'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-100 flex items-center justify-center p-4">
      <Card className="max-w-md w-full text-center shadow-2xl border-2 border-emerald-200">
        <CardHeader className="pb-4">
          <div className="flex justify-center mb-4">
            <img 
              src="/realityscapes-logo-jpeg (1).jpg" 
              alt="Realityscapes CBR Logo" 
              className="h-16 w-auto"
            />
          </div>
          <CheckCircle className="h-16 w-16 text-emerald-600 mx-auto mb-4" />
          <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
            Thank You for Contacting Realityscapes!
          </CardTitle>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <p className="text-gray-600 leading-relaxed">
            We've received your walkthrough request and will be in touch within 1 business day to schedule your free consultation.
          </p>
          
          <Button
            asChild
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
          >
            <Link href="/">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Return to Main Page
            </Link>
          </Button>
          
          <div className="pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Need immediate assistance? Call us at{' '}
              <a href="tel:0415174668" className="text-emerald-600 hover:underline font-semibold">
                0415 174 668
              </a>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}