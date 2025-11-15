'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Menu, X } from 'lucide-react';

export default function PricingPage() {
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
  const pricingInfoRef = useRef<HTMLDivElement>(null);
  const gardeningTitleRef = useRef<HTMLDivElement>(null);
  const gardeningCardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const softscapingTitleRef = useRef<HTMLDivElement>(null);
  const softscapingCardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const contactFormRef = useRef<HTMLDivElement>(null);
  const ctaRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Hero animation
    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-scroll');
        }
      },
      { threshold: 0.3 }
    );

    if (heroRef.current) {
      heroObserver.observe(heroRef.current);
    }

    // Pricing info animation
    const pricingInfoObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-in-left');
        }
      },
      { threshold: 0.3 }
    );

    if (pricingInfoRef.current) {
      pricingInfoObserver.observe(pricingInfoRef.current);
    }

    // Section titles animation
    const titleObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-scroll');
          }
        });
      },
      { threshold: 0.3 }
    );

    if (gardeningTitleRef.current) {
      titleObserver.observe(gardeningTitleRef.current);
    }
    if (softscapingTitleRef.current) {
      titleObserver.observe(softscapingTitleRef.current);
    }

    // Cards animation
    const cardsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-in-right');
          }
        });
      },
      { threshold: 0.3 }
    );

    gardeningCardsRef.current.forEach((ref) => {
      if (ref) cardsObserver.observe(ref);
    });
    softscapingCardsRef.current.forEach((ref) => {
      if (ref) cardsObserver.observe(ref);
    });

    // Contact form animation
    const contactObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-scroll');
        }
      },
      { threshold: 0.3 }
    );

    if (contactFormRef.current) {
      contactObserver.observe(contactFormRef.current);
    }

    // CTA buttons animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-scroll');
          }
        });
      },
      { threshold: 0.3 }
    );

    ctaRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      heroObserver.disconnect();
      pricingInfoObserver.disconnect();
      titleObserver.disconnect();
      cardsObserver.disconnect();
      contactObserver.disconnect();
      observer.disconnect();
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect to thank you page
    window.location.href = '/thank-you';
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
          className="relative z-10 text-center text-white opacity-0 transition-all duration-700"
        >
          <h1 className="text-5xl font-bold text-white drop-shadow-lg">Pricing</h1>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Pricing Info */}
        <Card 
          ref={pricingInfoRef}
          className="mb-12 opacity-0 transition-all duration-700"
        >
          <CardContent className="p-8">
            <p className="text-gray-700 mb-6">
              Below pricing is for standard sized jobs requiring 1 – 2 staff. For Strata Blocks, 
              any jobs not listed, and larger homes, use the contact form below, or contact 
              Mitch directly at 0415 174 668...
            </p>
            
            <div 
              ref={(el) => { ctaRefs.current[0] = el; }}
              className="opacity-0 transition-all duration-700"
            >
              <Button asChild className="bg-green-500 hover:bg-green-600">
                <Link href="/">
                  Book a free quote - Today!
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Gardening Jobs */}
        <div className="mb-16">
          <h2 
            ref={gardeningTitleRef}
            className="text-3xl font-bold text-green-500 mb-8 opacity-0 transition-all duration-700"
          >
            Gardening Jobs
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card 
              ref={(el) => { gardeningCardsRef.current[0] = el; }}
              className="opacity-0 transition-all duration-700"
              style={{ transitionDelay: '0.1s' }}
            >
              <CardHeader>
                <CardTitle className="text-xl text-green-600">Lawn Mowing and Edging</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-gray-800 mb-2">$80 Per hour plus GST</p>
                <Link href="/" className="text-green-500 underline hover:text-green-600">
                  Gardening Home page
                </Link>
              </CardContent>
            </Card>
            
            <Card 
              ref={(el) => { gardeningCardsRef.current[1] = el; }}
              className="opacity-0 transition-all duration-700"
              style={{ transitionDelay: '0.2s' }}
            >
              <CardHeader>
                <CardTitle className="text-xl text-green-600">Pruning and Hedge Trimming</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-gray-800 mb-2">$100 Per hour plus GST</p>
                <p className="text-sm text-gray-600">*Additional fee may be applied for bulk green waste removal.</p>
              </CardContent>
            </Card>
            
            <Card 
              ref={(el) => { gardeningCardsRef.current[2] = el; }}
              className="opacity-0 transition-all duration-700"
              style={{ transitionDelay: '0.3s' }}
            >
              <CardHeader>
                <CardTitle className="text-xl text-green-600">Weeding and Weed Spraying</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-gray-800 mb-2">$80 Per hour plus GST</p>
                <p className="text-sm text-gray-600">*Plus $20 for chemicals for weed spraying.</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Softscaping Jobs */}
        <div className="mb-16">
          <h2 
            ref={softscapingTitleRef}
            className="text-3xl font-bold text-green-500 mb-8 opacity-0 transition-all duration-700"
          >
            Softscaping Jobs
          </h2>
          
          <div 
            ref={(el) => { ctaRefs.current[1] = el; }}
            className="opacity-0 transition-all duration-700 mb-8"
          >
            <Button asChild className="bg-green-500 hover:bg-green-600">
              <Link href="/">
                Ready to begin transforming your yard?
              </Link>
            </Button>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card 
              ref={(el) => { softscapingCardsRef.current[0] = el; }}
              className="opacity-0 transition-all duration-700"
              style={{ transitionDelay: '0.1s' }}
            >
              <CardHeader>
                <CardTitle className="text-xl text-green-600">Yard redesign</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Start at <span className="font-bold">$3,000</span> - increase factors include: job size, plants required, volume of plants
                </p>
              </CardContent>
            </Card>
            
            <Card 
              ref={(el) => { softscapingCardsRef.current[1] = el; }}
              className="opacity-0 transition-all duration-700"
              style={{ transitionDelay: '0.2s' }}
            >
              <CardHeader>
                <CardTitle className="text-xl text-green-600">Turf Installation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Start at <span className="font-bold">$2,000</span> - increase factors include: turf type, soil prep time, job size.
                </p>
              </CardContent>
            </Card>
            
            <Card 
              ref={(el) => { softscapingCardsRef.current[2] = el; }}
              className="opacity-0 transition-all duration-700"
              style={{ transitionDelay: '0.3s' }}
            >
              <CardHeader>
                <CardTitle className="text-xl text-green-600">Garden bed design & Planting</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Start at <span className="font-bold">$1,500</span> - increase factors include: job size, plants required, volume of plants
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div 
            ref={(el) => { ctaRefs.current[2] = el; }}
            className="opacity-0 transition-all duration-700 mt-8"
          >
            <Button asChild className="bg-green-500 hover:bg-green-600">
              <Link href="/">
                Start with a walkthrough.
              </Link>
            </Button>
          </div>
        </div>

        {/* Contact Form */}
        <Card 
          ref={contactFormRef}
          className="opacity-0 transition-all duration-700"
        >
          <CardHeader>
            <CardTitle className="text-2xl text-gray-800">
              Have a question or want pricing for something not listed? Use the form below.
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="text-gray-700 font-semibold">
                    Name <span className="text-red-500">*</span>
                  </Label>
                  <Input 
                    id="name"
                    type="text" 
                    required
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-gray-700 font-semibold">
                    Email <span className="text-red-500">*</span>
                  </Label>
                  <Input 
                    id="email"
                    type="email" 
                    required
                    className="mt-2"
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="message" className="text-gray-700 font-semibold">Message</Label>
                <Textarea 
                  id="message"
                  rows={6}
                  className="mt-2"
                />
              </div>
              
              <Button type="submit" className="bg-green-500 hover:bg-green-600">
                Submit
              </Button>
            </form>
          </CardContent>
        </Card>
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
                  <a href="https://realityscapes.netlify.app/warranty" className="hover:text-white transition-colors">
                    Our Warranty
                  </a>
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