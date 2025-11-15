'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, MapPin, Menu, X, Shield, CircleCheck as CheckCircle, Clock } from 'lucide-react';

export default function WarrantyPage() {
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
  const warrantyCardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const coverageRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

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

    // Warranty cards animation
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

    warrantyCardsRef.current.forEach((ref) => {
      if (ref) cardsObserver.observe(ref);
    });

    // Other sections animation
    const sectionsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === coverageRef.current) {
              entry.target.classList.add('animate-slide-in-left');
            } else {
              entry.target.classList.add('animate-fade-in-scroll');
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    if (coverageRef.current) sectionsObserver.observe(coverageRef.current);
    if (processRef.current) sectionsObserver.observe(processRef.current);
    if (contactRef.current) sectionsObserver.observe(contactRef.current);
    if (ctaRef.current) sectionsObserver.observe(ctaRef.current);

    return () => {
      heroObserver.disconnect();
      cardsObserver.disconnect();
      sectionsObserver.disconnect();
    };
  }, []);

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
          <Shield className="w-16 h-16 mx-auto mb-4 text-green-400" />
          <h1 className="text-5xl font-bold mb-4">Our Warranty Promise</h1>
          <p className="text-xl">Fully Insured. Quality Guaranteed. Peace of Mind Delivered.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Warranty Overview Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card 
            ref={(el) => { warrantyCardsRef.current[0] = el; }}
            className="text-center opacity-0 transition-all duration-700"
            style={{ transitionDelay: '0.1s' }}
          >
            <CardContent className="p-8">
              <Shield className="w-12 h-12 mx-auto mb-4 text-green-500" />
              <h3 className="text-xl font-bold text-gray-800 mb-4">Fully Insured</h3>
              <p className="text-gray-600">
                $20 million public liability insurance protects you and your property during all work.
              </p>
            </CardContent>
          </Card>

          <Card 
            ref={(el) => { warrantyCardsRef.current[1] = el; }}
            className="text-center opacity-0 transition-all duration-700"
            style={{ transitionDelay: '0.2s' }}
          >
            <CardContent className="p-8">
              <CheckCircle className="w-12 h-12 mx-auto mb-4 text-green-500" />
              <h3 className="text-xl font-bold text-gray-800 mb-4">Quality Guarantee</h3>
              <p className="text-gray-600">
                All workmanship guaranteed for 12 months. If it's not right, we'll make it right.
              </p>
            </CardContent>
          </Card>

          <Card 
            ref={(el) => { warrantyCardsRef.current[2] = el; }}
            className="text-center opacity-0 transition-all duration-700"
            style={{ transitionDelay: '0.3s' }}
          >
            <CardContent className="p-8">
              <Clock className="w-12 h-12 mx-auto mb-4 text-green-500" />
              <h3 className="text-xl font-bold text-gray-800 mb-4">Plant Warranty</h3>
              <p className="text-gray-600">
                6-month warranty on all plants and turf installations with proper care guidelines.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* What's Covered Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div 
            ref={coverageRef}
            className="opacity-0 transition-all duration-700"
          >
            <h2 className="text-3xl font-bold text-green-500 mb-8">What's Covered</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Workmanship Defects</h4>
                  <p className="text-gray-600">Any issues with installation quality, leveling, or construction methods.</p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Plant Health Issues</h4>
                  <p className="text-gray-600">Plants that fail to establish or die within 6 months when care guidelines are followed.</p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Turf Installation</h4>
                  <p className="text-gray-600">Turf that fails to establish, has poor coverage, or installation issues.</p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Structural Elements</h4>
                  <p className="text-gray-600">Garden bed edging, retaining elements, and hardscape integration.</p>
                </div>
              </div>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-gray-800">Insurance Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-gray-700">
                <div className="border-l-4 border-green-500 pl-4">
                  <p className="font-semibold">Public Liability Insurance</p>
                  <p className="text-sm">$20,000,000 coverage through CGU Insurance</p>
                </div>
                
                <div className="border-l-4 border-green-500 pl-4">
                  <p className="font-semibold">Professional Indemnity</p>
                  <p className="text-sm">Covers design and consultation services</p>
                </div>
                
                <div className="border-l-4 border-green-500 pl-4">
                  <p className="font-semibold">Workers Compensation</p>
                  <p className="text-sm">All staff covered during work on your property</p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-green-50 rounded-lg">
                <p className="text-sm text-green-800">
                  <strong>Certificate Available:</strong> Insurance certificates can be provided upon request.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Warranty Process */}
        <Card 
          ref={processRef}
          className="mb-16 opacity-0 transition-all duration-700"
        >
          <CardHeader>
            <CardTitle className="text-3xl text-green-500 text-center">How to Make a Warranty Claim</CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-green-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
                <h4 className="font-semibold text-gray-800 mb-2">Contact Us</h4>
                <p className="text-gray-600 text-sm">Call or email with details of the issue and photos if possible.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
                <h4 className="font-semibold text-gray-800 mb-2">Assessment</h4>
                <p className="text-gray-600 text-sm">We'll arrange a site visit within 48 hours to assess the issue.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
                <h4 className="font-semibold text-gray-800 mb-2">Resolution</h4>
                <p className="text-gray-600 text-sm">If covered, we'll schedule repairs or replacements at no cost to you.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
                <h4 className="font-semibold text-gray-800 mb-2">Follow-up</h4>
                <p className="text-gray-600 text-sm">We'll check back to ensure you're completely satisfied with the resolution.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Section */}
        <div 
          ref={contactRef}
          className="grid md:grid-cols-2 gap-12 mb-16 opacity-0 transition-all duration-700"
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-gray-800">Warranty Contact</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-green-500 mr-4" />
                  <div>
                    <p className="font-semibold text-gray-800">Phone</p>
                    <p className="text-gray-600">0415 174 668</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-green-500 mr-4" />
                  <div>
                    <p className="font-semibold text-gray-800">Email</p>
                    <p className="text-gray-600">contact@realityscapes.com.au</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Response Time:</strong> We aim to respond to all warranty claims within 24 hours and arrange site visits within 48 hours.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="bg-green-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-green-600 mb-6">Care Guidelines</h3>
            
            <div className="space-y-4 text-gray-700">
              <div>
                <h4 className="font-semibold mb-2">New Plantings</h4>
                <p className="text-sm">Water daily for first 2 weeks, then as needed. Avoid fertilizing for 6 weeks.</p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">New Turf</h4>
                <p className="text-sm">Water twice daily for first week, avoid foot traffic for 2 weeks.</p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Mulched Areas</h4>
                <p className="text-sm">Top up mulch annually, avoid piling against plant stems.</p>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-sm text-green-800 font-semibold">
                Following these guidelines ensures your warranty remains valid and your landscape thrives.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div 
          ref={ctaRef}
          className="text-center opacity-0 transition-all duration-700"
        >
          <Card className="bg-green-500 text-white max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="mb-6">
                Experience the peace of mind that comes with fully insured, guaranteed landscaping work.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <div className="grid grid-cols-3 gap-2 items-center w-full max-w-md md:flex md:gap-4 md:max-w-none md:justify-center">
                  <Button 
                    asChild
                    className="bg-green-600 text-white hover:bg-green-700 text-xs text-center md:px-8 md:py-3 md:text-base"
                  >
                    <Link href="/book-online">
                      Book Service
                    </Link>
                  </Button>
                  <span className="text-white font-medium text-xs text-center md:text-base">or</span>
                  <Button 
                    asChild
                    variant="secondary"
                    className="bg-white text-green-500 hover:bg-gray-100 text-xs text-center leading-tight md:px-8 md:py-3 md:text-base"
                  >
                    <Link href="/">
                      Get Your Free Quote
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
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