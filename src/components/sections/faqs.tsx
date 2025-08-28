import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { FaPlus, FaTimes } from "react-icons/fa";
import Image from "next/image";
const faqs = [
  {
    question: "How do I create a business eriggo account",
    answer:
      "To create a business eriggo account, visit our website and follow the sign-up instructions for business users.",
  },
  {
    question: "How fast is delivery in my area?",
    answer:
      "Delivery times vary by location. Enter your address on our app or website to see estimated delivery times.",
  },
  {
    question: "Can I customize meals for dietary needs?",
    answer:
      "Yes, you can customize your meals during checkout to fit your dietary preferences.",
  },
  {
    question: "How do I track my order?",
    answer:
      "Track your order in real-time from your account dashboard or via the tracking link sent to your email.",
  },
  {
    question: "What if I need to cancel or change my order?",
    answer:
      "You can cancel or change your order before it is prepared. Visit your orders page or contact support for help.",
  },
  {
    question: "Is there a minimum order amount?",
    answer:
      "Yes, there is a minimum order amount depending on your location. Please check the app for details.",
  },
  {
    question: "Can I schedule orders in advance?",
    answer:
      "Absolutely! You can schedule your orders for a future date and time during checkout.",
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "We accept credit/debit cards, mobile payments, and select digital wallets.",
  },
  {
    question: "How do I apply a promo code?",
    answer:
      "Enter your promo code at checkout to receive your discount. Only one code can be used per order.",
  },
  {
    question: "Can I order from multiple restaurants at once?",
    answer:
      "Currently, each order can only be placed with one restaurant at a time.",
  },
  {
    question: "How do I contact customer support?",
    answer:
      "You can reach our support team via live chat, email, or phone. Visit the Contact Us page for details.",
  },
  {
    question: "Are there loyalty rewards or referral bonuses?",
    answer:
      "Yes! Earn points for every order and get bonuses for referring friends. Check your account for more info.",
  },
];

export default function Faqs() {
  return (
    <div
      id="faqs"
      className="min-h-[95vh] -py-10 md:py-0 w-full flex items-center justify-center md:bg-gradient-to-l from-[#FAFFFA] via-[#F0F5E8] to-[#D0DFB7] rounded-2xl faqs-scroll relative mx-auto px-2"
    >
      <Image
        width={100}
        height={30}
        src="/faq_Vector.png"
        alt="vector"
        className="hidden sm:inline absolute bottom-0 left-20"
      />
      <Image
        width={100}
        height={30}
        src="/faq_vector_top.png"
        alt="vector"
        className="hidden sm:inline absolute top-0 right-20"
      />
      <div className="w-full max-w-6xl px-2 md:py-12 grid md:grid-cols-12 gap-8 ">
        <div className="sm:mb-4 md:mb-8 md:col-span-4">
          <div className="text-[#5C7937] text-center text-lg font-medium mb-2">
            we have answers
          </div>
          <h2 className="text-xl sm:text-3xl md:text-4xl font-semibold text-[#141A14] leading-tight md:mb-4 text-center md:text-start">
            Frequently asked
            <br />
            question <span className="font-normal=">(FAQS)</span>
          </h2>
        </div>
        <div className="space-y-6 overflow-y-auto md:max-h-[430px] md:pr-16 mr-2- md:faqs-scroll faqs-scroll md:col-span-8">
          {faqs.map((faq, idx) => (
            <Disclosure key={faq.question}>
              {({ open }) => (
                <div
                  className="bg-[#f6fbe9] rounded-xl flex items-center px-3 sm:px-8 py-2 md:py-6- transition-shadow shadow-sm hover:shadow-md"
                  style={{ minHeight: "80px" }}
                >
                  <div className="flex items-center w-full">
                    <div className="text-[#A5B3A2]  text-lg sm:text-xl md:text-3xl font-bold md:mr-6 min-w-[30px] md:min-w-[48px]">
                      {String(idx + 1).padStart(2, "0")}
                    </div>
                    <div className="flex-1">
                      <DisclosureButton className="flex w-full items-center justify-between focus:outline-none">
                        <span className="text-base grid place-content-center sm:text-lg font-medium text-[#3D4E3C] text-left">
                          {faq.question}
                        </span>
                        <span className="ml-4 bg-[#3D4E3C] p-1 sm:p-1.5 md:p-2-  text-[#F0F5E8] rounded-full text-xs sm:text-sm md:text-base">
                          {open ? (
                            <FaTimes className="md:text-sm transition-transform duration-300 rotate-90" />
                          ) : (
                            <FaPlus className="md:text-sm transition-transform duration-300" />
                          )}
                        </span>
                      </DisclosureButton>
                      <DisclosurePanel static>
                        {({ open }) => (
                          <div
                            className={`mt-3 text-sm sm:text-base text-[#23311c] font-normal leading-relaxed transition-all duration-700 ease-in-out overflow-hidden ${
                              open
                                ? "max-h-[200px] opacity-100"
                                : "max-h-0 opacity-0"
                            }`}
                            style={{
                              transitionProperty: "max-height, opacity",
                            }}
                          >
                            {faq.answer}
                          </div>
                        )}
                      </DisclosurePanel>
                    </div>
                  </div>
                </div>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </div>
  );
}
