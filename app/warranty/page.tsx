'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Clock, Leaf, Phone } from 'lucide-react';
import Footer from '@/components/Footer';

export default function WarrantyPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-green-500 shadow-sm py-4 border-b">
        <div className="container mx-auto px-4 max-w-full">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <img
                src="/realityscapes-logo-jpeg (1).jpg"
                alt="Realityscapes CBR Logo"
                className="h-12 md:h-16 w-auto"
              />
              <span className="text-sm md:text-2xl font-bold text-white">Realityscapes CBR</span>
            </Link>
            <Button asChild className="bg-white text-green-500 hover:bg-gray-100">
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Warranty Information</h1>
            <p className="text-xl text-gray-600">Our commitment to quality workmanship and your peace of mind</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="border-2 border-emerald-200">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-6 w-6 text-emerald-600" />
                  <span>12 Month Workmanship Warranty</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  All labour and installation work is covered against defects in workmanship for 12 months from completion date.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-emerald-200">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Leaf className="h-6 w-6 text-emerald-600" />
                  <span>6 Month Plant Warranty</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Plants and turf are warranted for 6 months when proper care instructions are followed.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Warranty Coverage Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Workmanship Warranty (12 Months)</h3>
                <p className="text-gray-600 mb-3">
                  Realityscapes CBR (ABN 66 481 745 785) warrants that all work performed will be:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>Completed to a professional standard using appropriate techniques</li>
                  <li>Free from defects in materials and workmanship for 12 months</li>
                  <li>Performed in accordance with industry best practices</li>
                  <li>Compliant with relevant Australian Standards where applicable</li>
                </ul>
                <p className="text-gray-600 mt-3">
                  This warranty covers issues such as improper installation, structural failures in garden beds, drainage issues directly related to our work, and defects in materials supplied by us.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Plant & Turf Warranty (6 Months)</h3>
                <p className="text-gray-600 mb-3">
                  Plants, turf, and hedging supplied and installed by Realityscapes CBR are warranted for 6 months from installation date, subject to the following conditions:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>Adequate watering is provided as per our care instructions</li>
                  <li>No physical damage or neglect occurs</li>
                  <li>No unauthorised modifications to soil, drainage or irrigation</li>
                  <li>Weather conditions remain within normal seasonal ranges</li>
                  <li>Pests and diseases are managed by the property owner</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Warranty Exclusions</h3>
                <p className="text-gray-600 mb-3">
                  The following are not covered under this warranty:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>Damage caused by extreme weather events, acts of nature, or circumstances beyond our control</li>
                  <li>Failure to follow provided maintenance and care instructions</li>
                  <li>Damage caused by third parties, including contractors, animals, or vandalism</li>
                  <li>Changes in soil conditions not related to our work</li>
                  <li>Plant death due to inadequate watering, over-watering, or pest infestation</li>
                  <li>Normal wear and tear or natural settlement</li>
                  <li>Modifications or additional work performed by others</li>
                  <li>Pre-existing conditions not identified during site assessment</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Making a Warranty Claim</h3>
                <p className="text-gray-600 mb-3">
                  To make a warranty claim, please contact us:
                </p>
                <div className="bg-emerald-50 p-4 rounded-lg space-y-2">
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-emerald-600" />
                    <span className="text-gray-700">Phone: <a href="tel:0415174668" className="text-emerald-600 hover:underline">0415 174 668</a></span>
                  </div>
                  <p className="text-gray-700">Email: contact@realityscapes.com.au</p>
                  <p className="text-gray-600 text-sm mt-3">
                    Please provide your invoice number, description of the issue, and photographs if possible. We will assess the claim within 5 business days and arrange rectification if covered under warranty.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Australian Consumer Law</h3>
                <p className="text-gray-600">
                  This warranty is in addition to your rights under the Australian Consumer Law (ACL). Our services come with guarantees that cannot be excluded under the ACL. You are entitled to a remedy if the services are not provided with acceptable care and skill, or fit for purpose. If the failure is major, you are entitled to cancel the service contract and obtain a refund or to compensation for the reduced value of the services. You may also be entitled to be compensated for any other reasonably foreseeable loss or damage.
                </p>
                <p className="text-gray-600 mt-3">
                  Nothing in this warranty limits or excludes any rights you may have under the ACL or other applicable consumer protection legislation.
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Limitation of Liability</h3>
                <p className="text-gray-600 text-sm">
                  To the extent permitted by law, our total liability for any warranty claim is limited to either re-performing the services or refunding the amount paid for the specific service in question. We will not be liable for any indirect, consequential, or incidental damages. This limitation does not apply to any liability that cannot be excluded under the Australian Consumer Law.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-emerald-50 border-2 border-emerald-200">
            <CardContent className="pt-6">
              <p className="text-center text-gray-700 mb-4">
                <strong>Questions about our warranty?</strong>
              </p>
              <p className="text-center text-gray-600 mb-4">
                We're here to help. Contact us anytime to discuss your warranty coverage.
              </p>
              <div className="flex justify-center">
                <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
                  <a href="tel:0415174668">Call 0415 174 668</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}
