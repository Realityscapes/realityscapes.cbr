'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import emailjs from '@emailjs/browser';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Phone, Mail, MapPin, Calendar as CalendarIcon, Menu, X } from 'lucide-react';
import Calendar from '@/components/Calendar';

export default function BookOnlinePage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const titleRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedPeriod, setSelectedPeriod] = useState<'AM' | 'PM' | ''>('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    month: '',
    date: '',
    time: '',
    service: '',
    address: '',
    notes: ''
  });

  useEffect(() => {
    // Initialize EmailJS
    emailjs.init('2s1WDFyr77H4SmL-R');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === titleRef.current) {
              entry.target.classList.add('animate-fade-in-scroll');
            } else if (entry.target === formRef.current) {
              entry.target.classList.add('animate-slide-in-right');
            } else if (entry.target === logoRef.current) {
              entry.target.classList.add('animate-fade-in-scroll');
            }
          }
        });
      },
      { threshold: 0.05 }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    if (formRef.current) observer.observe(formRef.current);
    if (logoRef.current) observer.observe(logoRef.current);

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate date is not in the past
    const selectedDateTime = new Date();
    const monthIndex = [
      'january', 'february', 'march', 'april', 'may', 'june',
      'july', 'august', 'september', 'october', 'november', 'december'
    ].indexOf(formData.month.toLowerCase());
    
    if (monthIndex !== -1 && formData.date) {
      selectedDateTime.setMonth(monthIndex);
      selectedDateTime.setDate(parseInt(formData.date));
      
      // Set time if provided
      if (formData.time) {
        const [time, period] = formData.time.split(' ');
        const [hours, minutes] = time.split(':').map(Number);
        let hour24 = hours;
        if (period === 'PM' && hours !== 12) hour24 += 12;
        if (period === 'AM' && hours === 12) hour24 = 0;
        selectedDateTime.setHours(hour24, minutes || 0, 0, 0);
      }
      
      const now = new Date();
      if (selectedDateTime < now) {
        alert('Please select a future date and time for your booking.');
        return;
      }
    }
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.month || 
        !formData.date || !formData.time || !formData.service || !formData.phone) {
      alert('Please fill in all required fields.');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Send email using EmailJS
      await emailjs.send(
        'service_3jb89e1',
        'new_inquiry',
        {
          from_name: formData.name,
          from_phone: formData.phone,
          from_email: formData.email,
          suburb: formData.address || '',
          service: `${formData.service} - Phone Consultation on ${formData.month} ${formData.date} at ${formData.time}`,
          message: `Phone consultation booking:\n\nService: ${formData.service}\nDate: ${formData.month} ${formData.date}\nTime: ${formData.time}\nAddress: ${formData.address || 'Not provided'}\nNotes: ${formData.notes || 'None'}`,
          to_name: 'Realityscapes CBR',
        }
      );
      
      // Send auto-reply to customer if email provided
      if (formData.email) {
        await emailjs.send(
          'service_3jb89e1',
          'customer_auto_reply',
          {
            to_name: formData.name,
            to_email: formData.email,
          }
        );
      }
    } catch (error) {
      // Silently ignore any email errors
      console.log('Email sending failed, but continuing with redirect:', error);
    } finally {
      // Always redirect to thank you page regardless of email status
      setIsSubmitting(false);
      window.location.href = '/thank-you';
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    // Reset time selection if period changes
    if (e.target.name === 'period') {
      setSelectedPeriod(e.target.value as 'AM' | 'PM' | '');
      setFormData(prev => ({ ...prev, time: '' }));
      return;
    }
    
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSelectChange = (field: string, value: string) => {
    if (field === 'period') {
      setSelectedPeriod(value as 'AM' | 'PM' | '');
      setFormData(prev => ({ ...prev, time: '' }));
      return;
    }
    
    if (field === 'service') {
      setFormData(prev => ({
        ...prev,
        service: value,
        time: '' // Reset time when service changes
      }));
      setSelectedPeriod(''); // Reset period selection
      return;
    }
    
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const services = [
    'Lawn Mowing',
    'Garden Bed Design',
    'Turf Installation',
    'Hedge Trimming',
    'Weeding',
    'Yard Redesign',
    'Site Consultation',
    'Other'
  ];

  // Service duration and buffer times (in hours)
  const serviceDurations = {
    'Lawn Mowing': 2,
    'Garden Bed Design': 2,
    'Turf Installation': 2,
    'Hedge Trimming': 2,
    'Weeding': 2,
    'Yard Redesign': 2,
    'Site Consultation': 2,
    'Other': 2
  };

  // Business hours: Mon-Fri 7AM-4PM, Sat-Sun 8AM-4PM
  const amTimeSlots = [
    '7:00 AM', '7:30 AM', '8:00 AM', '8:30 AM', '9:00 AM', '9:30 AM', 
    '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM'
  ];
  
  const pmTimeSlots = [
    '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM'
  ];
  
  const weekendAmTimeSlots = [
    '8:00 AM', '8:30 AM', '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM'
  ];
  
  const weekendPmTimeSlots = [
    '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM'
  ];

  // Get current month and date for defaults
  const currentYear = new Date().getFullYear();
  
  // Get available months (current month onwards)
  const getAvailableMonths = () => {
    const months = [
      'january', 'february', 'march', 'april', 'may', 'june',
      'july', 'august', 'september', 'october', 'november', 'december'
    ];
    const currentMonthIndex = new Date().getMonth();
    return months.slice(currentMonthIndex);
  };

  // Generate available dates (only future dates)
  const getAvailableDates = () => {
    const dates = [];
    const today = new Date();
    const selectedMonthIndex = [
      'january', 'february', 'march', 'april', 'may', 'june',
      'july', 'august', 'september', 'october', 'november', 'december'
    ].indexOf(formData.month.toLowerCase());
    
    if (selectedMonthIndex === -1) return Array.from({ length: 31 }, (_, i) => i + 1);
    
    const daysInMonth = new Date(currentYear, selectedMonthIndex + 1, 0).getDate();
    
    for (let day = 1; day <= daysInMonth; day++) {
      const dateToCheck = new Date(currentYear, selectedMonthIndex, day);
      if (dateToCheck >= today || dateToCheck.toDateString() === today.toDateString()) {
        dates.push(day);
      }
    }
    
    return dates;
  };
  
  // Get AM time slots for selected date
  const getAMTimeSlots = () => {
    if (!formData.month || !formData.date) return amTimeSlots;
    
    const selectedMonthIndex = [
      'january', 'february', 'march', 'april', 'may', 'june',
      'july', 'august', 'september', 'october', 'november', 'december'
    ].indexOf(formData.month.toLowerCase());
    
    const selectedDate = new Date(currentYear, selectedMonthIndex, parseInt(formData.date));
    const isWeekend = selectedDate.getDay() === 0 || selectedDate.getDay() === 6;
    const today = new Date();
    
    // Get AM time slots based on day type
    const currentAmTimeSlots = isWeekend ? weekendAmTimeSlots : amTimeSlots;
    
    let availableSlots = currentAmTimeSlots;
    
    // If selected date is today, filter out past time slots
    if (selectedDate.toDateString() === today.toDateString()) {
      const currentMinutes = today.getHours() * 60 + today.getMinutes();
      
      availableSlots = currentAmTimeSlots.filter(timeSlot => {
        const [time, period] = timeSlot.split(' ');
        const [hours, minutes] = time.split(':').map(Number);
        let hour24 = hours;
        if (period === 'PM' && hours !== 12) hour24 += 12;
        if (period === 'AM' && hours === 12) hour24 = 0;
        const slotMinutes = hour24 * 60 + (minutes || 0);
        return slotMinutes > currentMinutes;
      });
    }
    
    return availableSlots;
  };

  // Get PM time slots for selected date
  const getPMTimeSlots = () => {
    if (!formData.month || !formData.date) return pmTimeSlots;
    
    const selectedMonthIndex = [
      'january', 'february', 'march', 'april', 'may', 'june',
      'july', 'august', 'september', 'october', 'november', 'december'
    ].indexOf(formData.month.toLowerCase());
    
    const selectedDate = new Date(currentYear, selectedMonthIndex, parseInt(formData.date));
    const isWeekend = selectedDate.getDay() === 0 || selectedDate.getDay() === 6;
    const today = new Date();
    
    // Get PM time slots based on day type
    let currentPmTimeSlots = isWeekend ? weekendPmTimeSlots : pmTimeSlots;
    
    let availableSlots = [...currentPmTimeSlots];
    
    // If selected date is today, filter out past time slots
    if (selectedDate.toDateString() === today.toDateString()) {
      const currentMinutes = today.getHours() * 60 + today.getMinutes();
      
      availableSlots = availableSlots.filter(timeSlot => {
        const [time, period] = timeSlot.split(' ');
        const [hours, minutes] = time.split(':').map(Number);
        let hour24 = hours;
        if (period === 'PM' && hours !== 12) hour24 += 12;
        if (period === 'AM' && hours === 12) hour24 = 0;
        const slotMinutes = hour24 * 60 + (minutes || 0);
        return slotMinutes > currentMinutes;
      });
    }
    
    return availableSlots;
  };

  // Calendar functions
  const handleDateSelect = (date: Date) => {
    const monthNames = [
      'january', 'february', 'march', 'april', 'may', 'june',
      'july', 'august', 'september', 'october', 'november', 'december'
    ];
    
    setFormData(prev => ({
      ...prev,
      month: monthNames[date.getMonth()],
      date: date.getDate().toString(),
      time: '' // Reset time when date changes
    }));
    setSelectedPeriod(''); // Reset period selection
    setShowCalendar(false); // Close calendar after selection
  };

  const hasAvailableSlots = (day: number) => {
    // For now, assume all weekdays have available slots
    // In a real app, this would check against backend availability
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    const dayOfWeek = date.getDay();
    return dayOfWeek !== 0 && dayOfWeek !== 6; // Not weekend
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
        isScrolled 
          ? 'bg-green-500/20 backdrop-blur-md shadow-lg py-2' 
          : 'bg-green-500 shadow-sm py-4'
      }`}>
        <div className="container mx-auto px-4 max-w-full">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 w-1/3">
              <img 
                src="/realityscapes-logo-jpeg (1).jpg" 
                alt="Realityscapes CBR Logo" 
                className={`w-auto transition-all duration-300 ${
                  isScrolled ? 'h-8 md:h-10' : 'h-12 md:h-16'
                }`} 
              />
              <span className={`text-sm md:text-2xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}>Realityscapes CBR</span>
            </div>
            <div className="w-1/3"></div>
            <div className="hidden md:flex items-center space-x-4">
              <Link 
                href="/" 
                className={`text-sm transition-colors duration-300 hover:underline ${
                  isScrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white/90 hover:text-white'
                }`}
              >
                Home
              </Link>
              <Link 
                href="/pricing" 
                className={`text-sm transition-colors duration-300 hover:underline ${
                  isScrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white/90 hover:text-white'
                }`}
              >
                Pricing
              </Link>
              <Link 
                href="/contact" 
                className={`text-sm transition-colors duration-300 hover:underline ${
                  isScrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white/90 hover:text-white'
                }`}
              >
                Contact
              </Link>
              <Link 
                href="/book-online" 
                className={`text-sm transition-colors duration-300 hover:underline ${
                  isScrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white/90 hover:text-white'
                }`}
              >
                Book Online
              </Link>
              <div className={`flex items-center space-x-2 text-sm transition-colors duration-300 ${
                isScrolled ? 'text-gray-600' : 'text-white/90'
              }`}>
                <Phone className="h-4 w-4" />
                <a href="tel:0415174668" className="hover:underline">0415 174 668</a>
              </div>
              <Button className={`transition-all duration-300 ${
                isScrolled 
                  ? 'bg-emerald-600 hover:bg-emerald-700' 
                  : 'bg-white text-green-500 hover:bg-gray-100'
              }`} asChild>
                <Link href="/">Book Walkthrough</Link>
              </Button>
            </div>
            <div className="md:hidden w-1/3 flex justify-end">
              <Button 
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 transition-all duration-300 ${
                  isScrolled 
                    ? 'text-gray-900 hover:bg-gray-100' 
                    : 'text-white hover:bg-white/10'
                }`}
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
          
          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-green-500/20 backdrop-blur-md border-t border-green-300/30 shadow-2xl z-40">
              <div className="px-4 py-3">
                <Link 
                  href="/" 
                  className="block px-4 py-3 text-gray-900 hover:bg-white/20 rounded-lg transition-all duration-300 font-medium border-b border-gray-300/20"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  href="/pricing" 
                  className="block px-4 py-3 text-gray-900 hover:bg-white/20 rounded-lg transition-all duration-300 font-medium border-b border-gray-300/20"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Pricing
                </Link>
                <Link 
                  href="/contact" 
                  className="block px-4 py-3 text-gray-900 hover:bg-white/20 rounded-lg transition-all duration-300 font-medium border-b border-gray-300/20"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
                <Link 
                  href="/book-online" 
                  className="block px-4 py-3 text-gray-900 hover:bg-white/20 rounded-lg transition-all duration-300 font-medium border-b border-gray-300/20"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Book Online
                </Link>
                <Button 
                  className="mx-4 mb-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium"
                  asChild
                >
                  <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                    Book Now
                  </Link>
                </Button>
                <div className="px-4 py-3 mt-2">
                  <div className="flex items-center space-x-2 text-sm text-gray-800 font-medium">
                    <Phone className="h-4 w-4" />
                    <a href="tel:0415174668" className="hover:text-emerald-600 transition-colors">0415 174 668</a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-16 mt-20">
        <div className="max-w-4xl mx-auto">
          <div 
            ref={titleRef}
            className="opacity-0 transition-all duration-700 mb-12"
          >
            <h1 className="text-4xl font-bold text-green-500 mb-4">
              Book Your Phone Consultation | Talk Directly with Our Expert
            </h1>
            
            {/* Conversion Booster */}
            <Card className="bg-green-50 border-l-4 border-green-500 mb-8">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-green-600 mb-3">
                  Book Your Free Phone Consultation with Mitch Tilbrook Today!
                </h2>
                <p className="text-gray-700 text-lg mb-3">
                  Speak directly with Mitch Tilbrook, our proud industry expert, about your gardening needs.
                </p>
                <p className="text-gray-700 text-base">
                  During this phone consultation, Mitch will discuss your project and then schedule an onsite visit if needed.
                </p>
              </CardContent>
            </Card>
            
            <p className="text-gray-700 mb-8">
              Choose a time that works for you to speak with Mitch over the phone. He'll discuss your gardening needs and arrange an onsite consultation if required.
            </p>
            <p className="text-gray-700 mb-12">
              This initial phone consultation helps Mitch understand your requirements before scheduling any onsite visits. 
              Use our calendar function to secure your consultation time instantly.
            </p>
          </div>

          {/* Booking Form */}
          <Card 
            ref={formRef}
            className="opacity-0 transition-all duration-700"
          >
            <CardHeader>
              <CardTitle className="text-2xl text-green-500">
                Book Your Phone Consultation with Mitch
              </CardTitle>
              <p className="text-gray-600 text-sm">
                Fields marked with * are required. Mitch will call you at the scheduled time to discuss your gardening needs.
              </p>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <Label htmlFor="name">
                    Name <span className="text-red-500">*</span>
                  </Label>
                  <Input 
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="email">
                    Email Address
                  </Label>
                  <Input 
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email address"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">
                    Phone number <span className="text-red-500">*</span>
                  </Label>
                  <Input 
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="service">
                    Service <span className="text-red-500">*</span>
                  </Label>
                  <Select value={formData.service} onValueChange={(value) => handleSelectChange('service', value)}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select service" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map(service => (
                        <SelectItem key={service} value={service}>{service}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Calendar Button */}
                <div className="col-span-1 md:col-span-2">
                  <Card className="bg-green-50 border-green-200">
                    <CardContent className="p-4">
                      <p className="text-gray-700 mb-3 text-sm md:text-base">
                        Want an easier way to pick your date? Open our Calendar function for an easier book, and see what days are unavailable.
                      </p>
                      <Button
                        type="button"
                        onClick={() => setShowCalendar(true)}
                        className="bg-green-500 hover:bg-green-600"
                      >
                        <CalendarIcon className="h-4 w-4 mr-2" />
                        Open our Calendar
                      </Button>
                    </CardContent>
                  </Card>
                </div>

                {/* Calendar Modal */}
                {showCalendar && (
                  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
                      <div className="p-4 border-b flex justify-between items-center">
                        <h3 className="text-lg font-semibold text-gray-900">Select a Date</h3>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setShowCalendar(false)}
                          className="p-1"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="p-4">
                        <Calendar
                          onDateSelect={handleDateSelect}
                          currentDate={currentDate}
                          setCurrentDate={setCurrentDate}
                          hasAvailableSlots={hasAvailableSlots}
                        />
                      </div>
                    </div>
                  </div>
                )}

                <div>
                  <Label htmlFor="month">
                    Month <span className="text-red-500">*</span>
                  </Label>
                  <Select value={formData.month} onValueChange={(value) => handleSelectChange('month', value)}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select month" />
                    </SelectTrigger>
                    <SelectContent>
                      {getAvailableMonths().map(month => (
                        <SelectItem key={month} value={month}>
                          {month.charAt(0).toUpperCase() + month.slice(1)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="date">
                    Date <span className="text-red-500">*</span>
                  </Label>
                  <Select value={formData.date} onValueChange={(value) => handleSelectChange('date', value)}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select date" />
                    </SelectTrigger>
                    <SelectContent>
                      {getAvailableDates().map((day) => (
                        <SelectItem key={day} value={day.toString()}>{day}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="time">
                    Time <span className="text-red-500">*</span>
                  </Label>
                  <div className="space-y-2 mt-2">
                    <Select value={selectedPeriod} onValueChange={(value) => handleSelectChange('period', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select AM or PM" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="AM">AM</SelectItem>
                        <SelectItem value="PM">PM</SelectItem>
                      </SelectContent>
                    </Select>
                    
                    {selectedPeriod && (
                      <Select value={formData.time} onValueChange={(value) => handleSelectChange('time', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          {selectedPeriod === 'AM' 
                            ? getAMTimeSlots().map(time => (
                                <SelectItem key={time} value={time}>{time}</SelectItem>
                              ))
                            : getPMTimeSlots().map(time => (
                                <SelectItem key={time} value={time}>{time}</SelectItem>
                              ))
                          }
                        </SelectContent>
                      </Select>
                    )}
                    
                    {formData.service && (
                      <div className="text-xs text-gray-600 mt-1">
                        Phone consultation duration: maximum of {serviceDurations[formData.service as keyof typeof serviceDurations] || 2} hours
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <Label htmlFor="address">Site address</Label>
                  <Input 
                    id="address"
                    name="address"
                    placeholder="Property address"
                    value={formData.address}
                    onChange={handleChange}
                    className="mt-2"
                  />
                </div>

                <div className="col-span-1 md:col-span-2">
                  <Label htmlFor="notes">Notes</Label>
                  <Textarea 
                    id="notes"
                    name="notes"
                    placeholder="Any additional information or special requests"
                    value={formData.notes}
                    onChange={handleChange}
                    rows={4}
                    className="mt-2"
                  />
                </div>

                <div className="col-span-1 md:col-span-2">
                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto bg-green-500 hover:bg-green-600 disabled:bg-gray-400"
                  >
                    {isSubmitting ? 'Booking...' : 'Book Phone Consultation'}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Logo Section */}
          <div 
            ref={logoRef}
            className="flex justify-center mt-12 opacity-0 transition-all duration-700"
          >
            <div className="flex items-center justify-center">
              <img 
                src="/realityscapes-logo-jpeg (1).jpg"
                alt="Realityscapes Logo"
                className="w-64 h-64 object-contain"
                style={{ 
                  clipPath: 'inset(4px 4px 4px 4px)',
                  transform: 'scale(1.02)'
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-16" style={{backgroundColor: '#1F2937'}}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <img src="/realityscapes-logo-jpeg (1).jpg" alt="Realityscapes CBR Logo" className="h-10 w-auto" />
                  <span className="text-xl font-bold">Realityscapes CBR</span>
                </div>
                <p className="text-gray-300 mb-4">
                  Professional softscaping services for the Canberra region. 
                  Friendly, meticulous, craftsmanlike approach to every project.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4">Services</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>Garden Design & Overhaul</li>
                  <li>Turf Installation</li>  
                  <li>Garden Bed Planting</li>
                  <li>Mulchwork & Soil Prep</li>
                  <li>Hedge & Screening</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4">Contact</h3>
                <div className="space-y-3 text-gray-300">
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4" />
                    <a href="tel:0415174668" className="hover:text-white transition-colors">0415 174 668</a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4" />
                    <span>contact@realityscapes.com.au</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4" />
                    <span>Kingston, ACT</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-700 pt-8 text-center">
              <p className="text-gray-400 mb-4">
                © 2024 Realityscapes CBR. All rights reserved. | ABN: 66 481 745 785
              </p>
              <div className="flex justify-end">
                <div className="flex space-x-4 text-xs text-gray-400">
                  <Link href="/warranty" className="hover:text-white transition-colors">
                    Our Warranty
                  </Link>
                  <a href="https://realityscapes.netlify.app/terms-conditions" className="hover:text-white transition-colors">
                    T's and C's
                  </a>
                  <a href="https://realityscapes.netlify.app/privacy-policy" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}