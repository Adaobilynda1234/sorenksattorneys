import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "What types of legal services do you provide?",
      answer:
        "We offer comprehensive legal services across various practice areas, including family law, business law, property law, intellectual property, and litigation. Our experienced team provides personalized solutions tailored to meet your specific legal needs, whether you're an individual, small business, or large corporation.",
    },
    {
      question: "How can I schedule a consultation with your legal team?",
      answer:
        "Our consultation is online and can be easily scheduled through our website. Simply fill out our online contact form or send us an email with your preferred time, and we'll arrange a convenient video consultation to discuss your legal needs from the comfort of your home or office.",
    },
    {
      question: "Do you offer free initial consultations?",
      answer:
        "Yes, we offer complimentary initial consultations for most practice areas. This allows us to understand your legal situation, discuss potential strategies, and determine if we're the right fit for your needs. During this consultation, we'll provide you with honest advice about your case and explain our approach to handling your matter.",
    },
    {
      question: "What are your typical fees for legal services?",
      answer:
        "Our fee structure varies depending on the complexity and type of legal matter. We offer competitive hourly rates, flat fee arrangements for certain services, and contingency fees where appropriate. We believe in transparent pricing and will provide you with a clear fee agreement before beginning work on your case.",
    },
    {
      question: "Do you handle cases outside the city or internationally?",
      answer:
        "Yes, we handle cases both locally and in other jurisdictions. While our primary practice is local, we have experience with interstate and international matters. We maintain relationships with qualified attorneys in other jurisdictions and can coordinate with local counsel when necessary to ensure your case receives proper representation.",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* FAQ Section */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-8">
              <h1
                className="text-4xl font-bold mb-4"
                style={{ color: "#FCA311" }}
              >
                FAQs
              </h1>
              <p className="text-gray-600 leading-relaxed">
                We've compiled responses to the questions we hear most often to
                help you better understand our approach and offerings.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  <button
                    className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 flex justify-between items-center transition-colors duration-200"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span className="font-semibold text-gray-800 pr-4">
                      {index + 1}. {faq.question}
                    </span>
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "#FCA311" }}
                    >
                      <ChevronDown
                        className={`w-4 h-4 text-white transform transition-transform duration-200 ${
                          openFAQ === index ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </div>
                  </button>
                  <div
                    className={`px-6 pb-4 text-gray-600 leading-relaxed transition-all duration-300 ${
                      openFAQ === index ? "block" : "hidden"
                    }`}
                  >
                    {faq.answer}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div className="flex justify-center items-start">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-md">
              <img
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&h=1200&q=80"
                alt="Legal consultation with two professional women working together"
                className="w-full h-auto object-cover"
                style={{ minHeight: "600px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
