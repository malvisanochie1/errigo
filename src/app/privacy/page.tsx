"use client";
import React from "react";
import Navbar from "@/components/sections/navbar";
import { errigo } from "@/components/texts/constants";
import Link from "next/link";
import Footer from "@/components/sections/footer";
const PrivacyPolicy = () => {
  return (
    <>
      <div className="bg-gray-50 min-h-screen">
        <Navbar />
        <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl w-full space-y-8 bg-white p-10 rounded-2xl shadow-lg">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Privacy Policy
              </h1>
              <p className="text-gray-600">
                <span className="me-1 font-bold">Last Updated:</span>{" "}
                {new Date().toLocaleDateString(undefined, {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>

            <p className="text-gray-800 leading-relaxed">
              At <strong>Errigo</strong>, your privacy is very important to us.
              This Privacy Policy explains how we collect, use, store, and
              protect your information when you use our website, mobile
              applications, and services (collectively, the “Services”). By
              accessing or using Errigo, you agree to the terms of this Privacy
              Policy.
            </p>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                1. Information We Collect
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-800 leading-relaxed">
                <li>
                  <strong>Personal Information:</strong> Name, email, phone
                  number, delivery address, and payment details.
                </li>
                <li>
                  <strong>Usage Information:</strong> How you use our app and
                  website, including pages visited, time spent, and actions
                  taken.
                </li>
                <li>
                  <strong>Device & Technical Information:</strong> IP address,
                  browser, OS, app version, and device identifiers.
                </li>
                <li>
                  <strong>Location Information:</strong> If enabled, your
                  location to connect you with nearby vendors and riders.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                2. How We Use Your Information
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-800 leading-relaxed">
                <li>Deliver meals, groceries, and services to your doorstep</li>
                <li>Process payments securely</li>
                <li>Personalize recommendations and improve user experience</li>
                <li>Provide customer support and respond to inquiries</li>
                <li>Send updates such as order confirmations and promotions</li>
                <li>Ensure security, prevent fraud, and comply with laws</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                3. How We Share Your Information
              </h2>
              <p className="text-gray-800 leading-relaxed mb-3">
                We do <strong>not</strong> sell your personal information.
                However, we may share information in the following cases:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-800 leading-relaxed">
                <li>
                  <strong>With Vendors and Riders:</strong> To fulfill your
                  orders and deliveries.
                </li>
                <li>
                  <strong>With Service Providers:</strong> Payment processors,
                  IT support, analytics, and logistics partners.
                </li>
                <li>
                  <strong>For Legal Reasons:</strong> If required by law,
                  regulation, or government request.
                </li>
                <li>
                  <strong>In Business Transfers:</strong> If Errigo is involved
                  in a merger, acquisition, or sale of assets.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                4. Data Security
              </h2>
              <p className="text-gray-800 leading-relaxed">
                We implement appropriate technical and organizational measures
                to protect your data against unauthorized access, alteration,
                disclosure, or destruction. However, no method of transmission
                over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                5. Your Rights
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-800 leading-relaxed">
                <li>Access, correct, or update your personal information</li>
                <li>Request deletion of your data</li>
                <li>Opt out of marketing communications</li>
                <li>Restrict or object to certain processing activities</li>
              </ul>
              <p className="mt-3 text-gray-800">
                To exercise these rights, please contact us at{" "}
                <Link
                  href={`mailto:${errigo.support}`}
                  className="text-blue-600 underline"
                >
                  support@errigo.com
                </Link>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                6. Cookies & Tracking
              </h2>
              <p className="text-gray-800 leading-relaxed">
                We use cookies and similar technologies to keep you signed in,
                remember your preferences, analyze traffic, and deliver
                personalized promotions. You can manage or disable cookies in
                your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                7. Children’s Privacy
              </h2>
              <p className="text-gray-800 leading-relaxed">
                Errigo does not knowingly collect data from children under 13
                (or the applicable minimum age in your region). If we discover
                such data, we will delete it promptly.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                8. International Data Transfers
              </h2>
              <p className="text-gray-800 leading-relaxed">
                Since Errigo operates in multiple countries (Nigeria, Ghana, UK,
                Canada), your data may be transferred and stored in different
                regions. We ensure such transfers comply with applicable privacy
                laws.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                9. Changes to This Policy
              </h2>
              <p className="text-gray-800 leading-relaxed">
                We may update this Privacy Policy from time to time. Any changes
                will be posted here with a revised “Last Updated” date. We
                encourage you to review this page periodically.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                10. Contact Us
              </h2>
              <p className="text-gray-800 leading-relaxed">
                If you have any questions about this Privacy Policy, please
                reach out to us at: <br />
                📧{" "}
                <Link
                  href={`mailto:${errigo.support}`}
                  className="text-blue-600 underline"
                >
                  support@errigo.com
                </Link>{" "}
                <br />
                🌍{" "}
                <Link href="/" className="text-blue-600 underline">
                  www.errigo.com
                </Link>
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
