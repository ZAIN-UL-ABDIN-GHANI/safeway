import React, { useState } from "react";

export default function FAQS() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "What happens when the SafeFly sensor detects an emergency?",
      answer:
        "When distress is detected, SafeFly sends live location and incident data to your trusted contacts and emergency services within seconds.",
    },
    {
      question: "How does SafeFly protect my personal data?",
      answer:
        "All transmissions are encrypted using AES-256, personal data is anonymised, and only approved contacts/access can view your incident details.",
    },
    {
      question: "Does SafeFly require my phone to be nearby?",
      answer:
        "No — SafeFly works independently. It connects to your phone/cloud when available, but can send alerts even if the phone isn’t immediately accessible.",
    },
    {
      question: "What kind of battery life can I expect?",
      answer:
        "SafeFly provides up to 7-day usage on a single charge, with wireless charging support and smart power management to maximise standby time.",
    },
    {
      question: "Can I customise who gets alerted in an emergency?",
      answer:
        "Yes. You can set your trusted contacts and the alert sequence via the companion app. Only your selected contacts and emergency services receive alerts.",
    },
  ];

  return (
    <section
      id="faq"
      className="mx-auto px-4 sm:px-8 py-16 sm:py-24 font-body 
                 bg-gradient-to-b from-cotton via-pinky-100 to-white
                  shadow-inner"
    >
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-pinky-500 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-700">
          Have questions? We’ve answered the most common ones to help you feel
          confident.
        </p>
      </div>

      <div className="mt-10 sm:mt-14 space-y-4 sm:space-y-6 max-w-3xl mx-auto">
        {faqData.map((item, idx) => (
          <div
            key={idx}
            className="bg-white/80 backdrop-blur-sm border border-pinky-100 
                       rounded-2xl shadow-sm hover:shadow-md 
                       transition-all duration-300"
          >
            <button
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              className="w-full flex justify-between items-center px-6 py-4 sm:py-5 
                         text-left text-gray-900 font-medium focus:outline-none"
            >
              <span className="text-base sm:text-lg">{item.question}</span>
              <span
                className={`ml-4 text-pinky-400 transition-transform duration-300 ${
                  openIndex === idx ? "rotate-180" : ""
                }`}
              >
                {openIndex === idx ? "−" : "+"}
              </span>
            </button>

            {openIndex === idx && (
              <div className="px-6 pb-5 sm:pb-6 text-gray-700 text-sm sm:text-base 
                              border-t border-pinky-50 bg-pinky-50 
                              rounded-b-2xl transition-all duration-300">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Accent Gradient Line */}
      <div className="mt-16 h-1 w-40 bg-gradient-to-r from-pinky-300 via-rose to-pinky-500 rounded-full mx-auto"></div>
    </section>
  );
}
