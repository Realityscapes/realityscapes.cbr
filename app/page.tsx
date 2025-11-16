'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import emailjs from '@emailjs/browser';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { CircleCheck as CheckCircle, Phone, Star, Shield, Award, Clock, Leaf, Menu, X } from 'lucide-react';
import Footer from '@/components/Footer';

export default function Home() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    suburb: '',
    service: '',
    message: ''
  });

  useEffect(() => {
    // Initialize EmailJS
    emailjs.init('2s1WDFyr77H4SmL-R');
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Check visibility of each section
      const sections = [
        'hero-badge', 'hero-title', 'hero-description', 'hero-buttons', 'hero-trust-points',
        'services-header', 'services-grid',
        'trust-header', 'trust-cards', 'trust-info',
        'contact-header', 'contact-form-header', 'contact-form-fields',
        'faq-header', 'faq-items',
        'footer-content'
      ];
      
      // Add individual service cards
      for (let i = 0; i < 5; i++) {
        sections.push(`service-card-${i}`);
      }
      
      // Add individual trust cards
      for (let i = 0; i < 3; i++) {
        sections.push(`trust-card-${i}`);
      }
      
      // Add individual FAQ items
      for (let i = 0; i < 3; i++) {
        sections.push(`faq-item-${i}`);
      }
      
      const newVisibleSections = new Set(visibleSections);
      
      sections.forEach(sectionId => {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          // Check if 25% of the element is visible
          const elementHeight = rect.height;
          const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
          const visibilityRatio = Math.max(0, visibleHeight) / elementHeight;
          
          if (visibilityRatio >= 0.15 && rect.top < windowHeight && rect.bottom > 0) {
            newVisibleSections.add(sectionId);
          } else {
            newVisibleSections.delete(sectionId);
          }
        }
      });
      
      setVisibleSections(newVisibleSections);
    };

    // Initial check
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleSections]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
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
          suburb: formData.suburb,
          service: formData.service,
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
      // Always show success and redirect regardless of email status
      setFormSubmitted(true);
      setIsSubmitting(false);
      
      // Redirect to thank you page after delay
      setTimeout(() => {
        window.location.href = '/thank-you';
      }, 2000);
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-header');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const services = [
    "Full yard & garden overhaul / rework / design",
    "Turf installation", 
    "Garden bed design & planting",
    "Mulchwork & soil prepping",
    "Hedge and screening installation"
  ];

  const trustPoints = [
    "Fully insured",
    "12 month workmanship warranty & 6 month plant warranty", 
    "Rated 5 stars on Google (0 reviews under 5)"
  ];

  const faqData = [
    { q: "Do you remove all green waste?", a: "Yes—your garden is left spotless after every job." },
    { q: "Can you recommend plants for Canberra's climate?", a: "Absolutely. We specialise in low-maintenance species suited to the local seasons." },
    { q: "How fast can you start?", a: "Walkthroughs within days; scheduling depends on job size and weather." }
  ];

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
              <a 
                href="/pricing" 
                className={`text-sm transition-colors duration-300 hover:underline ${
                  isScrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white/90 hover:text-white'
                }`}
              >
                Pricing
              </a>
              <a 
                href="/contact" 
                className={`text-sm transition-colors duration-300 hover:underline ${
                  isScrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white/90 hover:text-white'
                }`}
              >
                Contact
              </a>
              <a 
                href="/book-online" 
                className={`text-sm transition-colors duration-300 hover:underline ${
                  isScrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white/90 hover:text-white'
                }`}
              >
                Book Online
              </a>
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
              }`} onClick={scrollToContact}>
                Book Walkthrough
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
                <Button 
                  className="mx-4 mb-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium"
                  onClick={scrollToContact}
                >
                  Book Now
                </Button>
                <a 
                  href="/pricing" 
                  className="block px-4 py-3 text-gray-900 hover:bg-white/20 rounded-lg transition-all duration-300 font-medium border-b border-gray-300/20"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Pricing
                </a>
                <a 
                  href="/contact" 
                  className="block px-4 py-3 text-gray-900 hover:bg-white/20 rounded-lg transition-all duration-300 font-medium border-b border-gray-300/20"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </a>
                <a 
                  href="/book-online" 
                  className="block px-4 py-3 text-gray-900 hover:bg-white/20 rounded-lg transition-all duration-300 font-medium border-b border-gray-300/20"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Book Online
                </a>
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
      <section className="relative bg-gradient-to-br from-emerald-50 to-green-100 py-20 mt-20">
        <div className="absolute inset-0 bg-[url('/realityscapes-logo-jpeg%20(1).jpg')] bg-cover bg-center opacity-30"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 id="hero-title" className={`text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight transition-all duration-700 ease-out delay-200 ${visibleSections.has('hero-title') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
              Transform your yard into the garden{' '}
              <span className="text-emerald-600">Canberra notices</span>
            </h1>
            
            <p id="hero-description" className={`text-xl text-gray-600 mb-8 max-w-2xl mx-auto transition-all duration-700 ease-out delay-400 ${visibleSections.has('hero-description') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
              From turf to hedges, we handle the dirty work—you enjoy the results.
            </p>

            <div id="hero-buttons" className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 ease-out delay-600 ${visibleSections.has('hero-buttons') ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-lg px-8 py-4" onClick={scrollToContact}>
                Book your walkthrough
              </Button>
              <Button size="lg" variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 text-lg px-8 py-4" asChild>
                <a href="tel:0415174668">
                <Phone className="h-5 w-5 mr-2" />
                Call now
                </a>
              </Button>
            </div>

            <div id="hero-trust-points" className={`mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-3xl mx-auto transition-all duration-700 ease-out delay-800 ${visibleSections.has('hero-trust-points') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              {trustPoints.map((point, index) => (
                <div key={index} className="flex items-center justify-center space-x-2 text-xs md:text-sm text-gray-600 bg-white/90 backdrop-blur rounded-lg px-3 md:px-4 py-2 md:py-3 shadow-md border border-gray-200">
                  <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                  <span className="text-center">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div id="services-header" className={`text-center mb-16 transition-all duration-700 ease-out ${visibleSections.has('services-header') ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Professional Softscaping Services
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Specializing in Canberra's unique climate with meticulous attention to detail
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const images = [
                  '/Screenshot 2025-08-23 084134.png',
                  '/18059759999397527-m-90-600.jpg',
                  '/files_6614947-1755904677971-My-Raised-Bed-Garden-Design-Tips-1024x538.webp',
                  '/files_6614947-1755904569347-18101010259436359-m-90-600.jpg',
                  '/files_6614947-1755904559610-18059309800659720-m-90-600.jpg'
                ];
                
                // Determine animation direction based on grid position
                const getAnimationClasses = (index: number) => {
                  const isLeftColumn = index % 3 === 0; // First column (0, 3)
                  const isRightColumn = index % 3 === 2; // Third column (2, 4) 
                  const isMiddleColumn = index % 3 === 1; // Second column (1)
                  
                  if (isLeftColumn) {
                    return visibleSections.has(`service-card-${index}`) 
                      ? 'opacity-100 translate-x-0' 
                      : 'opacity-0 -translate-x-12';
                  } else if (isRightColumn) {
                    return visibleSections.has(`service-card-${index}`) 
                      ? 'opacity-100 translate-x-0' 
                      : 'opacity-0 translate-x-12';
                  } else {
                    // Middle column - alternate between left and right
                    const slideLeft = Math.floor(index / 3) % 2 === 0;
                    return visibleSections.has(`service-card-${index}`) 
                      ? 'opacity-100 translate-x-0' 
                      : slideLeft ? 'opacity-0 -translate-x-12' : 'opacity-0 translate-x-12';
                  }
                };
                
                return (
                  <Card key={index} id={`service-card-${index}`} className={`group hover:shadow-2xl transition-all duration-500 border-2 border-gray-300 shadow-2xl overflow-hidden transform hover:scale-105 ${getAnimationClasses(index)}`}>
                    <div className="h-48 bg-gradient-to-br from-emerald-100 to-green-200 relative overflow-hidden">
                      <img 
                        src={images[index]} 
                        alt={service}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0" style={{backgroundColor: 'rgba(233, 254, 240, 0.35)'}}></div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg text-gray-900">{service}</CardTitle>
                      <CardDescription className="text-gray-600">
                        Professional {service.toLowerCase()} tailored to Canberra's climate and soil conditions.
                      </CardDescription>
                    </CardHeader>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Credentials */}
      <section className="py-20 bg-emerald-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 id="trust-header" className={`text-3xl font-bold text-gray-900 mb-12 transition-all duration-700 ease-out ${visibleSections.has('trust-header') ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
              Why Canberra Trusts Realityscapes
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div id="trust-card-0" className={`flex flex-col items-center space-y-4 transition-all duration-500 ${visibleSections.has('trust-card-0') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Fully Insured</h3>
                <p className="text-gray-600">Complete peace of mind with comprehensive insurance coverage</p>
              </div>
              
              <div id="trust-card-1" className={`flex flex-col items-center space-y-4 transition-all duration-500 ${visibleSections.has('trust-card-1') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Warranty Protected</h3>
                <p className="text-gray-600">12 month workmanship & 6 month plant warranty</p>
              </div>
              
              <div id="trust-card-2" className={`flex flex-col items-center space-y-4 transition-all duration-500 ${visibleSections.has('trust-card-2') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">5-Star Rated</h3>
                <p className="text-gray-600">Perfect Google rating with zero reviews under 5 stars</p>
              </div>
            </div>

            <div id="trust-info" className={`mt-12 p-4 md:p-6 bg-white rounded-lg shadow-md transition-all duration-700 ease-out delay-600 ${visibleSections.has('trust-info') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
              <p className="text-sm md:text-lg text-gray-700 mb-4">
                <strong>Serving the Canberra region</strong> from our base in Kingston, ACT
              </p>
              <div className="flex flex-col md:flex-row justify-center md:space-x-8 space-y-2 md:space-y-0 text-xs md:text-sm text-gray-600 border-t border-gray-200 pt-4">
                <span className="text-center">• No mess left behind</span>
                <span className="text-center">• Transparent pricing</span>
                <span className="text-center">• Local climate expertise</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div id="contact-header" className={`text-center mb-12 transition-all duration-700 ease-out ${visibleSections.has('contact-header') ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Ready to Transform Your Garden?
              </h2>
              <p className="text-xl text-gray-600">
                Book your free on-site walkthrough today
              </p>
            </div>

            {formSubmitted ? (
              <Card className="text-center py-12 bg-emerald-50 border-2 border-emerald-200 shadow-2xl">
                <CardContent>
                  <CheckCircle className="h-16 w-16 text-emerald-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                  <p className="text-gray-600">We'll be in touch within 1 business day.</p>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-6">
                {/* Headline Section with Dynamic Border */}
                <Card id="contact-form-header" className={`bg-gray-50 border-0 relative overflow-hidden transition-all duration-700 ease-out delay-300 ${visibleSections.has('contact-form-header') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 via-transparent to-green-500/20 animate-pulse z-0"></div>
                  <div className="absolute inset-0 border-2 border-green-500/40 rounded-lg animate-pulse z-0"></div>
                  <CardHeader className="relative z-10">
                    <CardTitle className="text-2xl text-center">Free Walkthrough Request</CardTitle>
                    <CardDescription className="text-center">
                      Tell us about your project and we'll schedule your visit
                    </CardDescription>
                  </CardHeader>
                </Card>

                {/* Clean Form Fields Section */}
                <Card id="contact-form-fields" className={`bg-white shadow-2xl border-2 border-gray-200 transition-all duration-700 ease-out delay-600 ${visibleSections.has('contact-form-fields') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
                  <CardContent className="p-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name">Name *</Label>
                          <Input
                            id="name"
                            required
                            value={formData.name}
                            onChange={(e) => handleInputChange('name', e.target.value)}
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone">Phone *</Label>
                          <Input
                            id="phone"
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            className="mt-1"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="suburb">Suburb</Label>
                          <Input
                            id="suburb"
                            required
                            value={formData.suburb}
                            onChange={(e) => handleInputChange('suburb', e.target.value)}
                            className="mt-1"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="service">Service needed</Label>
                        <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="overhaul">Overhaul / Rework / Design</SelectItem>
                            <SelectItem value="turf">Turf installation</SelectItem>
                            <SelectItem value="garden">Garden bed design</SelectItem>
                            <SelectItem value="mulch">Mulchwork</SelectItem>
                            <SelectItem value="hedges">Hedges & screening</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="message">Tell us about your garden</Label>
                        <Textarea
                          id="message"
                          rows={4}
                          value={formData.message}
                          onChange={(e) => handleInputChange('message', e.target.value)}
                          className="mt-1"
                          placeholder="Describe your project, timeline, or any specific requirements..."
                        />
                      </div>

                      <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-lg py-3">
                        {isSubmitting ? (
                          <span className="flex items-center justify-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                          </span>
                        ) : (
                          <>
                        <span className="hidden sm:inline">Request your walkthrough</span>
                        <span className="sm:hidden">Request walkthrough</span>
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 id="faq-header" className={`text-3xl font-bold text-gray-900 text-center mb-12 transition-all duration-700 ease-out ${visibleSections.has('faq-header') ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
              Frequently Asked Questions
            </h2>
            
            <Accordion type="single" collapsible className="space-y-4">
              {faqData.map((faq, index) => (
                <AccordionItem key={index} id={`faq-item-${index}`} value={`item-${index}`} className={`bg-white rounded-lg px-6 border border-gray-200 shadow-md transition-all duration-500 ${visibleSections.has(`faq-item-${index}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="font-semibold text-gray-900">{faq.q}</span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600 pb-4">{faq.a}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}