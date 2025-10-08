import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { FaPlus, FaTimes } from "react-icons/fa";
import Image from "next/image";
const faqs = [
  {
    question: "What is Eriggo?",
    answer: "Eriggo is an online platform that connects customers with restaurants, caterers, personal shoppers, and local food vendors. You can order food, book catering, or get a personal shopper to shop for fresh groceries, all in one app."
  },
  {
    question: "How does Eriggo work?",
    answer: "Simple! Customers place orders through the app or website, vendors receive and fulfill those orders, and Eriggo handles the payments and logistics so everyone gets value with ease."
  },
  {
    question: "Is Eriggo available nationwide?",
    answer: "We’re starting with select cities and expanding rapidly across Nigeria. You’ll soon be able to use Eriggo anywhere local food is loved, which is everywhere!"
  },
  {
    question: "Is Eriggo safe and reliable?",
    answer: "Absolutely. All vendors are verified, trained, and certified by Eriggo in hygiene and food handling. Payments are processed securely, and we ensure every transaction is safe and traceable."
  },
  {
    question: "How do I contact Eriggo support?",
    answer: "You can reach us via the in-app support chat, email (customercare@eriggo.com), or call our hotline (coming soon). We’re always here to help."
  },
  {
    question: "How do I order on Eriggo?",
    answer: "Download the Eriggo app, browse through restaurants, caterers, or shoppers near you, add items to your cart, and check out. Easy as that."
  },
  {
    question: "How can I pay for my order?",
    answer: "You can pay securely using your debit card, bank transfer, or wallet balance on the app. Eriggo holds the payment until your order is confirmed as delivered."
  },
  {
    question: "What happens if my order is late or missing an item?",
    answer: "Don’t worry. Our support team will quickly resolve it. We follow up with vendors and delivery partners to make sure you get what you paid for, or a refund if needed."
  },
  {
    question: "Can I schedule an order in advance?",
    answer: "Yes! You can pre-order meals or catering for a later date, perfect for parties, meetings, or Sunday rice days."
  },
  {
    question: "Can I rate vendors?",
    answer: "Definitely. Ratings help us maintain quality and reward vendors who deliver the best service."
  },
  {
    question: "How do I become a vendor on Eriggo?",
    answer: "Simply visit www.eriggo.com or click “Partner”. Fill out your business details, and you’re all set after verification."
  },
  {
    question: "What kind of vendors can join?",
    answer: "We welcome restaurants, caterers, home chefs, bakers, and personal shoppers. If you sell quality food or food-related services, Eriggo is your home."
  },
  {
    question: "How does payment work for vendors?",
    answer: "Customers pay Eriggo directly, and we remit your payment after the order is completed, no stress about unpaid or fake transfers."
  },
  {
    question: "Does Eriggo offer training or certification?",
    answer: "Yes! All Eriggo vendors receive free training and certification on food hygiene, safety, and handling. It’s part of our quality assurance process."
  },
  {
    question: "How does Eriggo help vendors grow?",
    answer: "We promote your business to thousands of potential customers, provide marketing support, and ensure seamless payments so you can focus on cooking, not chasing payments."
  },
  {
    question: "How do I manage my orders?",
    answer: "You’ll have access to your own vendor dashboard where you can update your menu, track sales, accept or reject orders, and monitor earnings."
  },
  {
    question: "Are there any fees to join Eriggo?",
    answer: "Registration is free. We only charge a small commission per completed order, so you only pay when you earn."
  },
  {
    question: "How do I get more visibility on the app?",
    answer: "Vendors with great reviews, quick response times, and consistent quality are featured more prominently. You can also join Eriggo’s promo campaigns."
  },
  {
    question: "Who handles delivery?",
    answer: "Eriggo partners with trusted logistics providers and riders to ensure fast, safe, and affordable delivery."
  },
  {
    question: "Can vendors use their own delivery team?",
    answer: "Yes, vendors can choose to handle deliveries themselves or use Eriggo’s delivery partners, whichever works best for your business."
  },
  {
    question: "How long does delivery take?",
    answer: "Delivery time varies based on location and order type, but most local deliveries arrive within 30–60 minutes."
  },
  {
    question: "Can I use Eriggo for bulk or corporate orders?",
    answer: "Absolutely. Businesses can place large orders, plan catering, or partner with us for office meal programs."
  },
  {
    question: "What makes Eriggo different?",
    answer: "Eriggo celebrates African food culture. From jollof to okpa, suya to amala — we connect people with the tastes they love while supporting small food businesses to grow."
  }
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
        <div className="space-y-6 overflow-y-auto md:max-h-[460px] md:pr-16 mr-2- md:faqs-scroll faqs-scroll md:col-span-8">
          {faqs.map((faq, idx) => (
            <Disclosure key={faq.question}>
              {({ open }) => (
                <div
                  className={`rounded-xl flex items-center px-3 sm:px-8 py-2 md:py-6 transition-all duration-500 ease-in-out shadow-sm hover:shadow-md ${
                    open ? "bg-[#D0DFB7]" : "bg-[#f6fbe9]"
                  }`}
                  style={{ minHeight: "80px" }}
                >
                  <div className="flex w-full items-start">
                    <div className="flex-1">
                      {/* Button */}
                      <DisclosureButton
                        className={`flex w-full items-center justify-between focus:outline-none relative  ${
                          open && "border-b pb-2 border-[#ccc]"
                        }`}
                      >
                        <div
                          className={`flex space-x-2 sm:space-x-4 items-center flex-1`}
                        >
                          {/* number eg 01 */}
                          <div
                            className={`text-2xl sm:text-xl md:text-3xl font-bold md:mr-6 min-w-[30px] md:min-w-[48px] text-[#D0DFB7] transition-all duration-500 ease-in-out ${
                              open &&
                              "scale-105 text-xl sm:text-2xl md:text-3xl text-[#fff]"
                            }`}
                          >
                            {String(idx + 1).padStart(2, "0")}
                          </div>
                          {/*end of number*/}
                          {/* the questions*/}
                          <span
                            className={`text-base grid place-content-center sm:text-lg font-medium text-[#3D4E3C] text-left transition-colors duration-500 ease-in-out ${
                              open && "ps-1"
                            }`}
                          >
                            <h3 className={` ${open && "truncate"} `}>
                              {" "}
                              {faq.question}
                            </h3>
                          </span>
                          {/*End of the questions*/}
                        </div>

                        {/* Icon toggle */}
                        <span
                          className={`ml-4  p-0.5 md:p-1 rounded-full text-xs sm:text-sm md:text-base flex items-center justify-center relative ${
                            open
                              ? "bg-[#ffffff] text-[#779949]"
                              : "bg-[#779949]"
                          }`}
                        >
                          <FaPlus
                            className={` md:text-xs transform transition-all duration-500 ease-in-out ${
                              open
                                ? "rotate-45 opacity-0 scale-75"
                                : "rotate-0 opacity-100 scale-100"
                            }`}
                          />
                          <FaTimes
                            className={`md:text-xs absolute transform transition-all duration-500 ease-in-out ${
                              open
                                ? "rotate-0 opacity-100 scale-100"
                                : "-rotate-45 opacity-0 scale-75"
                            }`}
                          />
                        </span>
                      </DisclosureButton>

                      {/* the answer  */}
                      {/* Panel */}
                      <DisclosurePanel static>
                        {({ open }) => (
                          <div
                            className={`mt-3 text-sm sm:text-base text-[#23311c] font-normal leading-relaxed transition-all duration-700 ease-in-out overflow-hidden ${
                              open
                                ? "max-h-[500px] opacity-100"
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
