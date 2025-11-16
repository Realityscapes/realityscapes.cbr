'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, AlertCircle, CheckCircle } from 'lucide-react';
import Footer from '@/components/Footer';

export default function TermsAndConditionsPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Terms and Conditions</h1>
            <p className="text-xl text-gray-600">Standard terms for services provided by Realityscapes CBR</p>
            <p className="text-sm text-gray-500 mt-2">Last updated: {new Date().toLocaleDateString('en-AU')}</p>
          </div>

          <Card className="mb-8 bg-blue-50 border-2 border-blue-200">
            <CardContent className="pt-6">
              <div className="flex items-start space-x-3">
                <AlertCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-lg font-bold text-gray-900 mb-2">Important Notice</h2>
                  <p className="text-gray-700 text-sm">
                    These Terms and Conditions govern the provision of services by Realityscapes CBR (ABN 66 481 745 785). By engaging our services, you agree to these terms. These terms do not limit your rights under the Australian Consumer Law. If you have any questions, please contact us before proceeding.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="pt-6 space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Definitions</h3>
                <p className="text-gray-600 mb-3">In these Terms and Conditions:</p>
                <ul className="space-y-2 text-gray-600 ml-4">
                  <li><strong>"We", "us", "our"</strong> refers to Realityscapes CBR (ABN 66 481 745 785)</li>
                  <li><strong>"You", "your", "Customer"</strong> refers to the person or entity engaging our services</li>
                  <li><strong>"Services"</strong> means landscaping, softscaping, garden design, turf installation, planting, and related services</li>
                  <li><strong>"Site"</strong> means the property where Services are to be performed</li>
                  <li><strong>"Quote"</strong> means our written quotation for Services</li>
                  <li><strong>"Agreement"</strong> means the acceptance of our Quote together with these Terms and Conditions</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Application of Terms</h3>
                <p className="text-gray-600 mb-3">
                  These Terms and Conditions apply to all Services provided by us. By accepting a Quote or allowing us to commence work, you agree to be bound by these terms. These terms prevail over any conflicting terms proposed by you unless we agree otherwise in writing.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Quotations and Acceptance</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>Quotations are valid for 30 days from the date of issue unless otherwise stated</li>
                  <li>Quotations are based on our site inspection and information you provide</li>
                  <li>All prices include GST unless otherwise stated</li>
                  <li>Acceptance occurs when you sign our Quote, make a deposit payment, or allow us to commence work</li>
                  <li>We reserve the right to withdraw or amend a Quote before acceptance</li>
                  <li>Quotations are not transferable to other properties or customers</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">4. Variations to Work</h3>
                <p className="text-gray-600 mb-3">
                  If you request changes to the Services, or if unforeseen circumstances require changes:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>We will provide a written variation quote for approval</li>
                  <li>Additional costs will be clearly stated</li>
                  <li>Work will not proceed with variations until you approve them in writing</li>
                  <li>If Site conditions differ materially from our inspection, we may adjust pricing or scope</li>
                  <li>We are not obligated to perform work outside the original Quote</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">5. Payment Terms</h3>
                <p className="text-gray-600 mb-3">
                  Unless otherwise agreed in writing:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>A deposit (typically 30-50% of the total) is required before work commences</li>
                  <li>Progress payments may be required for projects exceeding $5,000</li>
                  <li>Final payment is due upon completion of Services</li>
                  <li>Payment methods include bank transfer, cash, or as otherwise agreed</li>
                  <li>Overdue payments may incur interest at 10% per annum</li>
                  <li>We reserve the right to suspend work if payments are not made as agreed</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">6. Access and Site Conditions</h3>
                <p className="text-gray-600 mb-3">You must ensure:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>Safe and unobstructed access to the Site during agreed work hours</li>
                  <li>Availability of water and electricity if required</li>
                  <li>Removal or securing of any items that may hinder work</li>
                  <li>Pets are secured away from the work area</li>
                  <li>Notification of underground services, utilities, and irrigation systems</li>
                  <li>All necessary approvals, permits, and consents are obtained</li>
                </ul>
                <p className="text-gray-600 mt-3">
                  If access or Site conditions prevent us from completing work, we may reschedule or terminate the Agreement. You will be responsible for costs incurred to date.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">7. Our Obligations</h3>
                <p className="text-gray-600 mb-3">We will:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>Perform Services with reasonable care and skill</li>
                  <li>Use materials and plants of acceptable quality</li>
                  <li>Complete work within a reasonable timeframe or as agreed</li>
                  <li>Remove all green waste and leave the Site clean and tidy</li>
                  <li>Maintain appropriate insurance coverage</li>
                  <li>Comply with all applicable laws and regulations</li>
                  <li>Communicate any delays or issues promptly</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">8. Your Obligations</h3>
                <p className="text-gray-600 mb-3">You must:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>Provide accurate information about the Site and your requirements</li>
                  <li>Disclose any known issues with the Site (e.g., drainage problems, contaminated soil)</li>
                  <li>Make timely payments according to the agreed schedule</li>
                  <li>Follow maintenance and care instructions for plants and turf</li>
                  <li>Notify us immediately of any defects or concerns</li>
                  <li>Not interfere with our work or provide instructions to our staff</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">9. Delays and Force Majeure</h3>
                <p className="text-gray-600 mb-3">
                  We are not liable for delays or failure to perform due to circumstances beyond our reasonable control, including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>Adverse weather conditions (rain, extreme heat, frost)</li>
                  <li>Acts of God, natural disasters, or environmental events</li>
                  <li>Government restrictions, lockdowns, or regulatory changes</li>
                  <li>Supplier delays or material shortages</li>
                  <li>Labour disputes or unavailability of personnel</li>
                  <li>Unforeseen Site conditions or discovery of hazards</li>
                </ul>
                <p className="text-gray-600 mt-3">
                  If such events occur, we will notify you as soon as practicable and use reasonable efforts to minimise delays.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">10. Warranty</h3>
                <p className="text-gray-600 mb-3">
                  We provide the following warranties:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li><strong>Workmanship:</strong> 12 months from completion date</li>
                  <li><strong>Plants and Turf:</strong> 6 months from installation (subject to proper care)</li>
                </ul>
                <p className="text-gray-600 mt-3">
                  Full warranty terms, conditions, and exclusions are detailed in our Warranty Policy. This warranty is in addition to your rights under the Australian Consumer Law.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">11. Liability and Indemnity</h3>
                <p className="text-gray-600 mb-3">
                  To the extent permitted by law:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>We maintain public liability insurance and take reasonable care to prevent damage</li>
                  <li>We are not liable for pre-existing Site conditions, hidden defects, or damage caused by third parties</li>
                  <li>We are not responsible for damage to underground services if you fail to notify us of their location</li>
                  <li>Our liability is limited to the cost of re-performing the Services or refunding the relevant portion of payment</li>
                  <li>We are not liable for indirect, consequential, or economic losses</li>
                </ul>
                <p className="text-gray-600 mt-3">
                  <strong>Important:</strong> Nothing in these terms limits or excludes any rights or remedies you have under the Australian Consumer Law or other legislation that cannot be limited or excluded.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">12. Intellectual Property</h3>
                <p className="text-gray-600">
                  All designs, plans, and concepts we create remain our intellectual property unless otherwise agreed in writing. You may use designs for the specific project at the Site but may not reproduce, modify, or use them for other purposes without our permission.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">13. Cancellation and Termination</h3>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Cancellation by You</h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                      <li>You may cancel before work commences with written notice</li>
                      <li>Refunds will be provided minus any non-recoverable costs (materials ordered, site preparation)</li>
                      <li>If you cancel after work has commenced, you must pay for work completed and materials supplied</li>
                      <li>Cooling-off rights may apply if the contract was entered into off-premises (unsolicited)</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Termination by Us</h4>
                    <p className="text-gray-600 mb-2">We may terminate the Agreement if:</p>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                      <li>You fail to make payment as agreed</li>
                      <li>You breach these Terms and Conditions</li>
                      <li>Site conditions make it unsafe or impossible to proceed</li>
                      <li>You engage in abusive or threatening behaviour toward our staff</li>
                    </ul>
                    <p className="text-gray-600 mt-2">If we terminate, you must pay for work completed to date.</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">14. Privacy</h3>
                <p className="text-gray-600">
                  We collect and handle your personal information in accordance with the Privacy Act 1988 (Cth) and our Privacy Policy. We use your information only to provide Services and for related business purposes. We do not sell or share your information with third parties except as required to provide Services or comply with legal obligations.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">15. Dispute Resolution</h3>
                <p className="text-gray-600 mb-3">
                  If a dispute arises:
                </p>
                <ol className="list-decimal list-inside space-y-2 text-gray-600 ml-4">
                  <li>You must first contact us to attempt to resolve the matter informally</li>
                  <li>If unresolved, either party may refer the dispute to mediation</li>
                  <li>Mediation will be conducted in accordance with the Resolution Institute Mediation Rules</li>
                  <li>Each party will bear their own costs of mediation</li>
                  <li>If mediation is unsuccessful, either party may commence legal proceedings</li>
                </ol>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">16. General Provisions</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li><strong>Governing Law:</strong> These terms are governed by the laws of the Australian Capital Territory</li>
                  <li><strong>Severability:</strong> If any provision is invalid or unenforceable, the remaining provisions continue in effect</li>
                  <li><strong>Entire Agreement:</strong> These terms and the Quote constitute the entire agreement between us</li>
                  <li><strong>Amendments:</strong> Changes must be agreed in writing and signed by both parties</li>
                  <li><strong>Assignment:</strong> You may not assign your rights or obligations without our written consent</li>
                  <li><strong>Notices:</strong> Notices must be in writing and sent to the addresses in the Quote</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">17. Australian Consumer Law</h3>
                <p className="text-gray-600">
                  Our Services come with guarantees that cannot be excluded under the Australian Consumer Law. You are entitled to a remedy if the Services are not provided with acceptable care and skill, or are not fit for purpose. If the failure is major, you are entitled to cancel the contract and obtain a refund or to compensation for the reduced value. You may also be entitled to compensation for any other reasonably foreseeable loss or damage.
                </p>
                <p className="text-gray-600 mt-3 font-semibold">
                  Nothing in these Terms and Conditions limits or excludes any rights you have under the Australian Consumer Law or other legislation that cannot be lawfully limited or excluded.
                </p>
              </div>

              <div className="bg-emerald-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Contact Information</h3>
                <p className="text-gray-600 mb-3">
                  For questions about these Terms and Conditions or our Services:
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

          <Card className="bg-blue-50 border-2 border-blue-200">
            <CardContent className="pt-6">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-700 text-sm">
                    By proceeding with our Services, you acknowledge that you have read, understood, and agree to these Terms and Conditions. If you do not agree with any part of these terms, please do not proceed with engaging our Services.
                  </p>
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
