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
import { Phone, Mail, MapPin, Clock, Send, Menu, X } from 'lucide-react';
import Footer from '@/components/Footer';

export default function ContactPage() {
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

  const heroRef = useRef<HTMLDivElement>(null);
  const contactInfoRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    // Initialize EmailJS
    emailjs.init('2s1WDFyr77H4SmL-R');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === heroRef.current) {
              entry.target.classList.add('animate-fade-in-scroll');
            } else if (entry.target === contactInfoRef.current) {
              entry.target.classList.add('animate-slide-in-left');
            } else if (entry.target === formRef.current) {
              entry.target.classList.add('animate-slide-in-right');
            } else if (entry.target === mapRef.current) {
              entry.target.classList.add('animate-fade-in-scroll');
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    if (heroRef.current) observer.observe(heroRef.current);
    if (contactInfoRef.current) observer.observe(contactInfoRef.current);
    if (formRef.current) observer.observe(formRef.current);
    if (mapRef.current) observer.observe(mapRef.current);

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
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
          suburb: '', // Not collected on contact form
          service: formData.subject || 'Contact Form Inquiry',
          message: formData.message,
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
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      subject: value
    }));
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

      {/* Hero Section */}
      <section 
        className="relative h-96 bg-cover bg-center flex items-center justify-center mt-20"
        style={{
          backgroundImage: "url('https://lh3.googleusercontent.com/d/1DseY5vvdH6ovm9p3xvr5wA6Y6Fc46vvd')"
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div 
          ref={heroRef}
          className="relative z-10 text-center text-white opacity-0 transition-all duration-700 px-4"
        >
          <Phone className="w-16 h-16 mx-auto mb-4 text-green-400" />
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl">Get in touch with Canberra's trusted landscaping experts</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Contact Information Cards */}
        <div 
          ref={contactInfoRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-12 opacity-0 transition-all duration-700"
        >
          <Card className="text-center">
            <CardContent className="p-3 md:p-6">
              <Phone className="w-8 h-8 md:w-12 md:h-12 mx-auto mb-2 md:mb-4 text-green-500" />
              <h3 className="text-sm md:text-xl font-bold text-gray-800 mb-1 md:mb-2">Phone</h3>
              <p className="text-xs md:text-base text-gray-600">0415 174 668</p>
              <p className="text-xs md:text-sm text-gray-500 mt-1 md:mt-2">Available 7 days a week</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-3 md:p-6">
              <Mail className="w-8 h-8 md:w-12 md:h-12 mx-auto mb-2 md:mb-4 text-green-500" />
              <h3 className="text-sm md:text-xl font-bold text-gray-800 mb-1 md:mb-2">Email</h3>
              <p className="text-xs md:text-base text-gray-600 break-all">contact@realityscapes.com.au</p>
              <p className="text-xs md:text-sm text-gray-500 mt-1 md:mt-2">We respond within 24 hours</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-3 md:p-6">
              <MapPin className="w-8 h-8 md:w-12 md:h-12 mx-auto mb-2 md:mb-4 text-green-500" />
              <h3 className="text-sm md:text-xl font-bold text-gray-800 mb-1 md:mb-2">Service Area</h3>
              <p className="text-xs md:text-base text-gray-600">Canberra & Surrounding Areas</p>
              <p className="text-xs md:text-sm text-gray-500 mt-1 md:mt-2">Free on-site quotes</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-3 md:p-6">
              <Clock className="w-8 h-8 md:w-12 md:h-12 mx-auto mb-2 md:mb-4 text-green-500" />
              <h3 className="text-sm md:text-xl font-bold text-gray-800 mb-1 md:mb-2">Business Hours</h3>
              <p className="text-xs md:text-base text-gray-600">Mon - Fri: 7AM - 6PM</p>
              <p className="text-xs md:text-base text-gray-600">Sat - Sun: 8AM - 5PM</p>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form and Info */}
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Contact Form */}
          <Card 
            ref={formRef}
            className="opacity-0 transition-all duration-700"
          >
            <CardHeader>
              <div className="flex items-center">
                <Send className="w-8 h-8 text-green-500 mr-3" />
                <CardTitle className="text-3xl text-gray-800">Send us a Message</CardTitle>
              </div>
              <p className="text-gray-600 text-sm">Fields marked with * are required</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
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
                    Email <span className="text-red-500">*</span>
                  </Label>
                  <Input 
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">
                    Phone <span className="text-red-500">*</span>
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
                  <Label htmlFor="subject">Subject</Label>
                  <Select value={formData.subject} onValueChange={handleSelectChange}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="quote">Request a Quote</SelectItem>
                      <SelectItem value="booking">Book a Service</SelectItem>
                      <SelectItem value="warranty">Warranty Inquiry</SelectItem>
                      <SelectItem value="general">General Question</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">
                    Message <span className="text-red-500">*</span>
                  </Label>
                  <Textarea 
                    id="message"
                    name="message"
                    placeholder="Tell us about your project or ask any questions..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="mt-2"
                  />
                </div>

                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-green-500 hover:bg-green-600 disabled:bg-gray-400"
                >
                  <Send className="w-5 h-5 mr-2" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Why Choose Realityscapes */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-gray-800">Why Choose Realityscapes?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start">
                <div className="bg-green-100 p-2 rounded-full mr-4 mt-1">
                  <Phone className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Local Expertise</h4>
                  <p className="text-gray-600 text-sm">Canberra-based with deep knowledge of local conditions and requirements.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-green-100 p-2 rounded-full mr-4 mt-1">
                  <Mail className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Fully Insured</h4>
                  <p className="text-gray-600 text-sm">$20 million public liability insurance for your peace of mind.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-green-100 p-2 rounded-full mr-4 mt-1">
                  <MapPin className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Quality Guarantee</h4>
                  <p className="text-gray-600 text-sm">All workmanship guaranteed with comprehensive warranty coverage.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-green-100 p-2 rounded-full mr-4 mt-1">
                  <Clock className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Fast Response</h4>
                  <p className="text-gray-600 text-sm">Quick quotes and reliable service when you need it.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Service Areas */}
        <Card 
          ref={mapRef}
          className="opacity-0 transition-all duration-700 mb-12"
        >
          <CardHeader>
            <CardTitle className="text-3xl text-green-500 text-center">Service Areas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">North Canberra</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>Belconnen</li>
                  <li>Gungahlin</li>
                  <li>Mitchell</li>
                  <li>Dickson</li>
                  <li>Lyneham</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">South Canberra</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>Woden</li>
                  <li>Tuggeranong</li>
                  <li>Weston Creek</li>
                  <li>Deakin</li>
                  <li>Kingston</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Central Canberra</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>Civic</li>
                  <li>Braddon</li>
                  <li>Turner</li>
                  <li>Acton</li>
                  <li>Parkes</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">
                Don't see your area listed? We service all of Canberra and surrounding regions. 
                Contact us to confirm service availability in your location.
              </p>
              <p className="text-green-600 font-semibold">
                Free on-site quotes available for all service areas
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Ready to Get Started */}
        <Card className="bg-green-50 mb-12">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-green-600 mb-4">Ready to Get Started?</h3>
            <p className="text-gray-700 mb-6">
              Whether you need a quick quote, want to book a service, or have questions about our work, 
              we're here to help transform your outdoor space.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center text-gray-700">
                <Phone className="w-5 h-5 text-green-500 mr-3" />
                <span className="font-semibold">Call now:</span>
                <span className="ml-2">0415 174 668</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Clock className="w-5 h-5 text-green-500 mr-3" />
                <span>Available 7 days a week</span>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Logo */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center justify-center">
            <img 
              src="/realityscapes-logo-jpeg (1).jpg"
              alt="Realityscapes Logo"
              className="w-48 h-48 object-contain"
              style={{ 
                clipPath: 'inset(4px 4px 4px 4px)',
                transform: 'scale(1.02)'
              }}
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}