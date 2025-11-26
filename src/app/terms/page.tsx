"use client";
import { errigo } from "@/components/texts/constants";
import React from "react";
import Link from "next/link";
import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";

const TermsOfUse = () => {
  return (
    <>
    <Navbar />
     <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      <div className="max-w-4xl bg-white shadow-lg rounded-2xl p-8 md:p-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Terms of Use
        </h1>
        <p className="text-gray-700 mb-6 text-center">
          By accessing and using our website, you agree to comply with the following Terms of Use. 
          Please read them carefully.
        </p>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              1. Acceptance of Terms
            </h2>
            <p>
              By using this website, you confirm that you are at least 18 years old 
              or have the legal consent of a guardian, and that you agree to be bound 
              by these Terms of Use.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              2. Use of Website
            </h2>
            <p>
              You agree to use this website only for lawful purposes and in a way that 
              does not infringe on the rights of others or restrict their use and 
              enjoyment of the website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              3. Intellectual Property
            </h2>
            <p>
              All content, logos, graphics, and materials on this website are the 
              property of our company unless otherwise stated. You may not reproduce, 
              distribute, or use them without prior written permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              4. Limitation of Liability
            </h2>
            <p>
              We are not responsible for any damages, losses, or issues arising from the 
              use of this website, including but not limited to service interruptions 
              or data inaccuracies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              5. Third-Party Links
            </h2>
            <p>
              This website may contain links to third-party websites. We are not 
              responsible for the content, policies, or practices of third-party sites. 
              Accessing them is at your own risk.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              6. Changes to Terms
            </h2>
            <p>
              We reserve the right to update or modify these Terms of Use at any time 
              without prior notice. Continued use of this website after changes means 
              you accept the updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              7. Governing Law
            </h2>
            <p>
              These Terms of Use are governed by and construed in accordance with the 
              laws of [Your Country/State], without regard to its conflict of law 
              provisions.
            </p>
          </section>
        </div>

        <p className="text-gray-600 text-sm mt-8 text-center">
          If you have any questions regarding these Terms of Use, please contact us at 
          <Link href={errigo.support} className="text-blue-600 font-medium"> support@example.com</Link>.
        </p>
      </div>
    </div>
    <Footer />
    </>
   
  );
};

export default TermsOfUse;
