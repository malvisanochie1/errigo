"use client";
import { errigo } from "@/components/texts/constants";
import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import Link from "next/link";
import React from "react";

export default function RefundPolicy() {
  return (

   <>
   <Navbar />
 <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full space-y-8 bg-white p-10 rounded-2xl shadow-lg">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Refund Policy</h1>
          <p className="text-gray-600">
            Our Refund Policy outlines the terms under which you may request a refund for purchases or services made on our platform.
          </p>
        </div>

        <div className="text-gray-700 space-y-6">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">1. Eligibility for Refunds</h2>
            <p>
              To be eligible for a refund, your request must be submitted within{" "}
              <span className="font-medium">7 days</span> of purchase. Refunds may only apply if the service or product
              delivered does not meet the agreed description or has technical issues that prevent use.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">2. Non-Refundable Items</h2>
            <p>
              Certain items and services are non-refundable, including but not limited to:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Digital products once downloaded or accessed</li>
              <li>Services that have already been delivered in full</li>
              <li>Promotional or discounted items</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">3. Refund Process</h2>
            <p>
              To request a refund, please contact our support team at{" "}
              <span className="font-medium">support@example.com</span> with proof of purchase and details of your request.
              Approved refunds will be processed back to your original payment method within{" "}
              <span className="font-medium">5–10 business days</span>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">4. Late or Missing Refunds</h2>
            <p>
              If you haven’t received a refund within the expected timeframe, please check with your bank or payment
              provider. If the issue persists, contact us directly for assistance.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">5. Contact Us</h2>
            <p>
              If you have any questions about our Refund Policy, please reach out to us at{" "}
              <Link href={errigo.support} className="font-medium">support@example.com</Link>.
            </p>
          </section>
        </div>
      </div>
    </div>
   <Footer />
   </>
  );
}
