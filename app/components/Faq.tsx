'use client';

import { useState } from 'react';

const faqs = [
  {
    question: "What can I expect in the first therapy session?",
    answer: "In your first session, we'll explore your goals, concerns, and how therapy can support your journey.",
  },
  {
    question: "Do you offer online therapy sessions?",
    answer: "Yes, secure video sessions are available for your convenience and comfort.",
  },
  {
    question: "Is everything I say confidential?",
    answer: "Absolutely. Confidentiality is a cornerstone of therapy, with exceptions only for safety concerns.",
  },
  {
    question: "How long does each session last?",
    answer: "Each session typically lasts 50 minutes unless otherwise discussed.",
  },
  {
    question: "How often should I attend therapy?",
    answer: "Most clients benefit from weekly sessions, but we’ll tailor the frequency to your needs.",
  },
  {
    question: "What issues do you specialize in?",
    answer: "I specialize in stress, anxiety, trauma, and relationship challenges.",
  },
  {
    question: "How do I book a free consultation?",
    answer: "Click the 'Book a Free Consult' button or use the contact form below to reach out directly.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-orange-50 py-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-10">❓ Frequently Asked Questions</h2>
        <div className="space-y-6 text-left">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-md p-5 cursor-pointer transition"
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-800">
                  {faq.question} <span className="text-indigo-600 font-bold">^</span>
                </h3>
              </div>
              {openIndex === idx && (
                <p className="text-gray-700 mt-3">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}





