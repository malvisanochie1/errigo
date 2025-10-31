import { Mail, MapPin, Phone } from "lucide-react";
import Faqs from "@/components/sections/faqs";
const page = () => {
  return (
    <main className=" bg-gradient-to-b from-[#C4D96F] to-[#f3ffea] flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-3">
            Get in Touch
          </h1>
          <p className="text-lg text-[#4a4a4a]">
            We&#39;d love to hear from you. Reach out to us anytime.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-1 gap-6 mb-8">
          {/* Address Card */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-start gap-4">
              <div className="bg-[#C4D96F] p-3 rounded-lg flex-shrink-0">
                <MapPin className="w-6 h-6 text-[#1a1a1a]" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-[#1a1a1a] mb-2">
                  Address
                </h2>
                <p className="text-[#4a4a4a] leading-relaxed">
                  123 Food Street
                  <br />
                  Lagos, Nigeria
                  <br />
                  West Africa
                </p>
              </div>
            </div>
          </div>

          {/* Phone Card */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-start gap-4">
              <div className="bg-[#C4D96F] p-3 rounded-lg flex-shrink-0">
                <Phone className="w-6 h-6 text-[#1a1a1a]" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-[#1a1a1a] mb-2">
                  Phone
                </h2>
                <a
                  href="tel:+2341234567890"
                  className="text-[#C4D96F] hover:text-[#B0C85F] font-medium transition-colors text-lg"
                >
                  +234 123 456 7890
                </a>
              </div>
            </div>
          </div>

          {/* Email Card */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-start gap-4">
              <div className="bg-[#C4D96F] p-3 rounded-lg flex-shrink-0">
                <Mail className="w-6 h-6 text-[#1a1a1a]" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-[#1a1a1a] mb-2">
                  Email
                </h2>
                <a
                  href="mailto:support@eriggo.com"
                  className="text-[#C4D96F] hover:text-[#B0C85F] font-medium transition-colors text-lg"
                >
                  support@eriggo.com
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Footer Message */}
      </div>
      <div>
        <Faqs />
        <div className="text-center text-[#4a4a4a] mt-5 sm:mt-10 lg:mt-14">
          <p className="text-sm">We typically respond within 24 hours</p>
        </div>
      </div>
    </main>
  );
};

export default page;
