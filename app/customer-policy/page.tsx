'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Users, FileCheck, Phone } from 'lucide-react';
import Footer from '@/components/Footer';

export default function CustomerPolicyPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Customer Policy</h1>
            <p className="text-xl text-gray-600">Your rights and our service commitments</p>
            <p className="text-sm text-gray-500 mt-2">Last updated: {new Date().toLocaleDateString('en-AU')}</p>
          </div>

          <Card className="mb-8 bg-emerald-50 border-2 border-emerald-200">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Consumer Rights</h2>
              <p className="text-gray-700">
                As a customer of Realityscapes CBR, you are protected by the Australian Consumer Law (ACL). This policy outlines your rights, our commitments, and how we work together to ensure your satisfaction.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="pt-6 space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Australian Consumer Law Guarantees</h3>
                <p className="text-gray-600 mb-3">
                  Under the Australian Consumer Law (Competition and Consumer Act 2010), you have automatic guarantees whenever you purchase services. These guarantees cannot be excluded and are in addition to any warranty we provide.
                </p>
                <p className="text-gray-600 mb-3">
                  Our services come with guarantees that:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>Services will be provided with acceptable care and skill</li>
                  <li>Services are fit for any purpose you specify to us</li>
                  <li>Services will be supplied within a reasonable time (if no time specified)</li>
                  <li>Any products or materials used are of acceptable quality</li>
                  <li>We have the right to supply the services</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Your Rights When Things Go Wrong</h3>
                <p className="text-gray-600 mb-3">
                  If we fail to meet a consumer guarantee, you have rights to a remedy. The type of remedy depends on whether the failure is major or minor:
                </p>

                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Major Failure</h4>
                  <p className="text-gray-600 mb-2">A failure is major if:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4 text-sm">
                    <li>The service has a problem that would have stopped you from purchasing it if you had known</li>
                    <li>The service is substantially unfit for its common purpose and cannot easily be fixed within a reasonable time</li>
                    <li>The service does not meet a purpose you specified and cannot easily be fixed within a reasonable time</li>
                    <li>The service creates an unsafe situation</li>
                  </ul>
                  <p className="text-gray-600 mt-3 font-medium">Your options for major failure:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4 text-sm">
                    <li>Cancel the service contract and obtain a refund</li>
                    <li>Retain the service and seek compensation for the reduction in value</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Minor Failure</h4>
                  <p className="text-gray-600 mb-2">For problems that do not amount to a major failure:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4 text-sm">
                    <li>We will fix the problem within a reasonable time at no extra cost</li>
                    <li>If we fail to fix the problem within a reasonable time, you can cancel the contract or seek compensation</li>
                  </ul>
                </div>

                <p className="text-gray-600 mt-3">
                  You are also entitled to be compensated for any other reasonably foreseeable loss or damage resulting from the failure.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Our Service Commitments</h3>
                <p className="text-gray-600 mb-3">
                  Realityscapes CBR is committed to providing exceptional service and transparent communication:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li><strong>Free On-Site Consultations:</strong> Comprehensive property assessment before providing quotes</li>
                  <li><strong>Transparent Pricing:</strong> Detailed written quotes with no hidden fees</li>
                  <li><strong>Clear Communication:</strong> Regular updates throughout your project</li>
                  <li><strong>Professional Standards:</strong> Work performed to industry best practices</li>
                  <li><strong>Site Cleanliness:</strong> Complete removal of all green waste and materials</li>
                  <li><strong>Respect for Property:</strong> Care taken to protect existing structures and landscaping</li>
                  <li><strong>Timely Service:</strong> Adherence to agreed schedules and prompt notification of any changes</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">4. Quotations and Pricing</h3>
                <p className="text-gray-600 mb-3">
                  Our quotation process ensures transparency and clarity:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>All quotes are provided in writing and remain valid for 30 days unless otherwise stated</li>
                  <li>Quotes include a detailed breakdown of services, materials, and costs</li>
                  <li>Any variations to the quoted work will be discussed and agreed upon in writing before proceeding</li>
                  <li>Prices include GST unless otherwise stated</li>
                  <li>Payment terms and schedules are clearly outlined in the quote</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">5. Booking and Scheduling</h3>
                <p className="text-gray-600 mb-3">
                  To ensure smooth project delivery:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>Work commencement dates are confirmed in writing after deposit payment</li>
                  <li>We aim to complete projects within the estimated timeframe provided</li>
                  <li>Weather-dependent work may require rescheduling for optimal results</li>
                  <li>We will provide reasonable notice if schedule changes are necessary</li>
                  <li>You will be notified 24-48 hours before our team arrives on site</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">6. Payment Terms</h3>
                <p className="text-gray-600 mb-3">
                  Our standard payment terms are:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>Deposit: Typically 30-50% upon acceptance of quote</li>
                  <li>Progress payments may be required for larger projects</li>
                  <li>Final payment due upon completion and your satisfaction</li>
                  <li>Payment methods: Bank transfer, cash, or other agreed methods</li>
                  <li>Payment terms specific to your project will be outlined in your quote</li>
                </ul>
                <p className="text-gray-600 mt-3">
                  Under Australian Consumer Law, we cannot demand full payment before services are completed unless this is an industry practice (which it is not for landscaping services).
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">7. Cancellation and Refund Policy</h3>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Cancellation by Customer</h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                      <li><strong>Before work commences:</strong> You may cancel by providing written notice. Deposit refunds will be provided minus any costs already incurred (e.g., materials ordered, site preparation)</li>
                      <li><strong>After work commences:</strong> You may cancel at any time. You will be charged for work completed to date and materials purchased</li>
                      <li><strong>Cooling-off period:</strong> If you signed the contract off-premises (unsolicited sale), you may have a 10-business-day cooling-off period under ACL</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Cancellation by Realityscapes CBR</h4>
                    <p className="text-gray-600 mb-2">We may cancel a booking if:</p>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                      <li>Site conditions differ significantly from the initial assessment</li>
                      <li>Required permits or approvals cannot be obtained</li>
                      <li>Extreme weather or unforeseen circumstances make work impossible</li>
                      <li>Payment terms are not met</li>
                    </ul>
                    <p className="text-gray-600 mt-2">If we cancel, you will receive a full refund of any payments made.</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">8. Customer Responsibilities</h3>
                <p className="text-gray-600 mb-3">
                  To help us deliver the best results, we ask that you:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>Provide accurate information about your property and requirements</li>
                  <li>Ensure site access is available on scheduled work days</li>
                  <li>Arrange for pets to be secured during our visit</li>
                  <li>Notify us of any underground services (gas, water, electricity, telecommunications)</li>
                  <li>Follow provided maintenance and care instructions for plants and turf</li>
                  <li>Notify us promptly of any concerns or issues</li>
                  <li>Ensure timely payment according to agreed terms</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">9. Complaints and Dispute Resolution</h3>
                <p className="text-gray-600 mb-3">
                  We value your feedback and are committed to resolving any concerns:
                </p>

                <div className="bg-emerald-50 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Step 1: Contact Us Directly</h4>
                  <p className="text-gray-600 text-sm mb-2">
                    If you are not satisfied with any aspect of our service, please contact us immediately:
                  </p>
                  <div className="space-y-1 text-gray-700 text-sm">
                    <p>Phone: <a href="tel:0415174668" className="text-emerald-600 hover:underline">0415 174 668</a></p>
                    <p>Email: contact@realityscapes.com.au</p>
                  </div>
                  <p className="text-gray-600 text-sm mt-2">We will acknowledge your complaint within 2 business days and aim to resolve it within 14 days.</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Step 2: External Dispute Resolution</h4>
                  <p className="text-gray-600 text-sm mb-3">
                    If we cannot resolve your complaint internally, you may contact:
                  </p>
                  <div className="space-y-3">
                    <div>
                      <p className="font-medium text-gray-900 text-sm">ACT Civil and Administrative Tribunal (ACAT)</p>
                      <p className="text-gray-600 text-sm">Phone: (02) 6207 1740</p>
                      <p className="text-gray-600 text-sm">Website: www.acat.act.gov.au</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 text-sm">Australian Competition and Consumer Commission (ACCC)</p>
                      <p className="text-gray-600 text-sm">Phone: 1300 302 502</p>
                      <p className="text-gray-600 text-sm">Website: www.accc.gov.au</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">10. Insurance and Liability</h3>
                <p className="text-gray-600">
                  Realityscapes CBR maintains comprehensive public liability insurance. We take all reasonable care to protect your property and prevent damage. In the unlikely event of damage caused by our work, we will take responsibility and arrange for repairs or compensation in accordance with our insurance policy and the Australian Consumer Law.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">11. Privacy and Data Protection</h3>
                <p className="text-gray-600">
                  We handle your personal information in accordance with the Privacy Act 1988 (Cth) and our Privacy Policy. Your information will only be used for providing services to you and will not be shared with third parties except as outlined in our Privacy Policy.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">12. Changes to This Policy</h3>
                <p className="text-gray-600">
                  We may update this Customer Policy from time to time. The current version will always be available on our website. Changes will not affect rights you have already acquired or reduce your consumer guarantee rights under the Australian Consumer Law.
                </p>
              </div>

              <div className="bg-emerald-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Questions or Concerns?</h3>
                <p className="text-gray-600 mb-3">
                  We're here to help. If you have any questions about this policy or your rights as a customer:
                </p>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Phone:</strong> <a href="tel:0415174668" className="text-emerald-600 hover:underline">0415 174 668</a></p>
                  <p><strong>Email:</strong> contact@realityscapes.com.au</p>
                  <p><strong>ABN:</strong> 66 481 745 785</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}
