'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Lock, Eye, FileText } from 'lucide-react';
import Footer from '@/components/Footer';

export default function PrivacyPolicyPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-xl text-gray-600">How we collect, use, and protect your personal information</p>
            <p className="text-sm text-gray-500 mt-2">Last updated: {new Date().toLocaleDateString('en-AU')}</p>
          </div>

          <Card className="mb-8">
            <CardContent className="pt-6 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment to Privacy</h2>
                <p className="text-gray-600">
                  Realityscapes CBR (ABN 66 481 745 785) is committed to protecting your privacy and complying with the Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs). This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Information We Collect</h3>
                <p className="text-gray-600 mb-3">
                  We collect personal information that is reasonably necessary for our business functions. The types of information we collect include:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li><strong>Contact Information:</strong> Name, phone number, email address, and property address</li>
                  <li><strong>Service Information:</strong> Details about requested services, property conditions, and project specifications</li>
                  <li><strong>Financial Information:</strong> Payment details and invoice records (processed securely through third-party payment providers)</li>
                  <li><strong>Communication Records:</strong> Correspondence via email, phone, or our website contact forms</li>
                  <li><strong>Website Usage Data:</strong> IP addresses, browser type, and website interaction data collected via Google Analytics</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">2. How We Collect Information</h3>
                <p className="text-gray-600 mb-3">
                  We collect personal information directly from you through:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>Website contact forms and booking requests</li>
                  <li>Email and phone communications</li>
                  <li>On-site consultations and walkthroughs</li>
                  <li>Written quotes and contracts</li>
                  <li>Payment processing systems</li>
                </ul>
                <p className="text-gray-600 mt-3">
                  We may also collect information through third parties, such as referral partners, with your consent or where legally required.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">3. How We Use Your Information</h3>
                <p className="text-gray-600 mb-3">
                  We use your personal information for the following purposes:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>Providing landscaping and softscaping services</li>
                  <li>Communicating with you about your project, quotes, and bookings</li>
                  <li>Processing payments and maintaining financial records</li>
                  <li>Responding to enquiries and customer service requests</li>
                  <li>Improving our services and website functionality</li>
                  <li>Sending marketing communications (only with your consent)</li>
                  <li>Complying with legal obligations, including taxation and business record requirements</li>
                  <li>Managing warranty claims and service guarantees</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">4. Disclosure of Personal Information</h3>
                <p className="text-gray-600 mb-3">
                  We do not sell, rent, or trade your personal information. We may disclose your information to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li><strong>Service Providers:</strong> Third parties who assist in business operations (e.g., payment processors, email service providers, accounting software)</li>
                  <li><strong>Suppliers:</strong> Material suppliers and subcontractors necessary to complete your project</li>
                  <li><strong>Legal Authorities:</strong> Government agencies or authorities when required by law</li>
                  <li><strong>Insurance Providers:</strong> Our insurers in relation to claims or policy requirements</li>
                </ul>
                <p className="text-gray-600 mt-3">
                  All third parties we engage are required to handle your personal information in accordance with the Privacy Act and only for the specific purposes we authorise.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">5. Data Security</h3>
                <p className="text-gray-600">
                  We take reasonable steps to protect your personal information from misuse, interference, loss, unauthorised access, modification, or disclosure. Our security measures include:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4 mt-3">
                  <li>Secure storage of physical and electronic records</li>
                  <li>Encryption of sensitive data transmitted via our website</li>
                  <li>Access controls limiting who can view personal information</li>
                  <li>Regular security assessments of our systems and processes</li>
                </ul>
                <p className="text-gray-600 mt-3">
                  While we implement appropriate security measures, no method of transmission or storage is completely secure. We cannot guarantee absolute security of information transmitted over the internet.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">6. Data Retention</h3>
                <p className="text-gray-600">
                  We retain your personal information for as long as necessary to fulfil the purposes outlined in this policy and to comply with our legal obligations. Specifically:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4 mt-3">
                  <li>Client records are retained for a minimum of 7 years to comply with Australian tax law</li>
                  <li>Warranty-related information is retained for the duration of the warranty period plus 7 years</li>
                  <li>Marketing consent records are retained until you withdraw consent</li>
                  <li>Website analytics data is retained according to Google Analytics' retention policies</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">7. Your Rights</h3>
                <p className="text-gray-600 mb-3">
                  Under the Privacy Act 1988 and the Australian Privacy Principles, you have the right to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li><strong>Access:</strong> Request access to the personal information we hold about you</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate or out-of-date information</li>
                  <li><strong>Opt-out:</strong> Unsubscribe from marketing communications at any time</li>
                  <li><strong>Complaints:</strong> Lodge a complaint about how we handle your personal information</li>
                </ul>
                <p className="text-gray-600 mt-3">
                  To exercise these rights, please contact us using the details below. We will respond to your request within 30 days.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">8. Website and Cookies</h3>
                <p className="text-gray-600">
                  Our website uses Google Analytics to collect information about website usage. This includes:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4 mt-3">
                  <li>Pages visited and time spent on pages</li>
                  <li>Browser and device information</li>
                  <li>Approximate geographic location based on IP address</li>
                  <li>Referral sources and navigation patterns</li>
                </ul>
                <p className="text-gray-600 mt-3">
                  This data is collected via cookies and is used to improve website functionality and user experience. You can disable cookies through your browser settings, though this may affect website functionality.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">9. Third-Party Links</h3>
                <p className="text-gray-600">
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any personal information.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">10. Marketing Communications</h3>
                <p className="text-gray-600">
                  We may send you marketing communications about our services, special offers, or industry updates if you have provided consent or where we have a legitimate business interest and you have not opted out. You can unsubscribe from marketing communications at any time by:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4 mt-3">
                  <li>Clicking the unsubscribe link in our emails</li>
                  <li>Contacting us directly via phone or email</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">11. Changes to This Policy</h3>
                <p className="text-gray-600">
                  We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. The updated policy will be posted on our website with the revision date. We encourage you to review this policy periodically.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">12. Complaints and Disputes</h3>
                <p className="text-gray-600">
                  If you believe we have breached the Australian Privacy Principles or you wish to make a complaint about our handling of your personal information, please contact us using the details below. We will:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4 mt-3">
                  <li>Acknowledge your complaint within 7 days</li>
                  <li>Investigate the matter thoroughly</li>
                  <li>Respond with our findings and proposed resolution within 30 days</li>
                </ul>
                <p className="text-gray-600 mt-3">
                  If you are not satisfied with our response, you may lodge a complaint with the Office of the Australian Information Commissioner (OAIC):
                </p>
                <div className="bg-gray-50 p-4 rounded-lg mt-3">
                  <p className="text-gray-700 text-sm">Office of the Australian Information Commissioner</p>
                  <p className="text-gray-700 text-sm">Website: www.oaic.gov.au</p>
                  <p className="text-gray-700 text-sm">Phone: 1300 363 992</p>
                  <p className="text-gray-700 text-sm">Email: enquiries@oaic.gov.au</p>
                </div>
              </div>

              <div className="bg-emerald-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Contact Us</h3>
                <p className="text-gray-600 mb-3">
                  If you have any questions about this Privacy Policy or wish to exercise your privacy rights, please contact us:
                </p>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Business Name:</strong> Realityscapes CBR</p>
                  <p><strong>ABN:</strong> 66 481 745 785</p>
                  <p><strong>Phone:</strong> <a href="tel:0415174668" className="text-emerald-600 hover:underline">0415 174 668</a></p>
                  <p><strong>Email:</strong> contact@realityscapes.com.au</p>
                  <p><strong>Address:</strong> Kingston, ACT</p>
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
