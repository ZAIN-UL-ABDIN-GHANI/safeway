import React, { useState } from 'react';

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

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="max-w-4xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold text-center">Frequently Asked Questions</h2>
      <p className="mt-4 text-gray-600 dark:text-gray-300 text-center">
        Have questions? We’ve answered the most common ones to help you feel confident.
      </p>

      <div className="mt-10 space-y-4">
        {faqData.map((item, idx) => (
          <div
            key={idx}
            className="border border-gray-200 dark:border-gray-700 rounded-lg"
          >
            <button
              onClick={() =>
                setOpenIndex(openIndex === idx ? null : idx)
              }
              className="w-full flex justify-between items-center px-6 py-4 text-left focus:outline-none"
            >
              <span className="font-medium">{item.question}</span>
              <span className="ml-4 text-indigo-600">
                {openIndex === idx ? '−' : '+'}
              </span>
            </button>
            {openIndex === idx && (
              <div className="px-6 pb-4 text-gray-700 dark:text-gray-300">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
