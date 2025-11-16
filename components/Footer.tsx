'use client';

import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
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

          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm text-center md:text-left">
                © 2024 Realityscapes CBR. All rights reserved. | ABN: 66 481 745 785
              </p>
              <div className="flex flex-wrap justify-center md:justify-end gap-x-4 gap-y-2 text-sm">
                <Link href="/warranty" className="text-gray-400 hover:text-white transition-colors">
                  Warranty
                </Link>
                <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/customer-policy" className="text-gray-400 hover:text-white transition-colors">
                  Customer Policy
                </Link>
                <Link href="/terms-and-conditions" className="text-gray-400 hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
