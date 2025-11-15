'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export default function PricingPage() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
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
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section 
        className="relative h-96 bg-cover bg-center flex items-center justify-center"
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
    </div>
  );
}