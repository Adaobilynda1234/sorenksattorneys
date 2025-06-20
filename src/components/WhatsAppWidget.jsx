import React, { useState } from "react";
import { MessageCircle, X, Scale } from "lucide-react";

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Replace with your law firm's WhatsApp number (include country code without + or 00)
  const phoneNumber = "2348127350477";
  const defaultMessage = "Hello! I need legal consultation.";

  const openWhatsApp = (message = defaultMessage) => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 animate-pulse"
          title="Contact us on WhatsApp"
        >
          <MessageCircle size={24} />
        </button>
      )}

      {/* Expanded Widget */}
      {isOpen && (
        <div className="bg-white rounded-lg shadow-xl border border-gray-200 w-80 mb-2">
          {/* Header */}
          <div className="bg-green-500 text-white p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <Scale className="text-green-500" size={20} />
              </div>
              <div>
                <h3 className="font-semibold">Legal Consultation</h3>
                <p className="text-xs opacity-90">We're here to help</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200 transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Body */}
          <div className="p-4">
            <div className="bg-gray-100 rounded-lg p-3 mb-4">
              <p className="text-sm text-gray-700">
                ⚖️ Hello! How can our legal team assist you today?
              </p>
            </div>

            {/* Quick Legal Services */}
            <div className="space-y-2">
              <button
                onClick={() =>
                  openWhatsApp("I need consultation for a criminal case")
                }
                className="w-full text-left p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors text-sm text-gray-700"
              >
                🚔 Criminal Law Consultation
              </button>
              <button
                onClick={() => openWhatsApp("I need help with a civil matter")}
                className="w-full text-left p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors text-sm text-gray-700"
              >
                📋 Civil Law Assistance
              </button>
              <button
                onClick={() => openWhatsApp("I need family law consultation")}
                className="w-full text-left p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors text-sm text-gray-700"
              >
                👨‍👩‍👧‍👦 Family Law Matter
              </button>
              <button
                onClick={() =>
                  openWhatsApp("I want to schedule an appointment")
                }
                className="w-full text-left p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors text-sm text-gray-700"
              >
                📅 Schedule Appointment
              </button>
              <button
                onClick={() => openWhatsApp("I have an urgent legal matter")}
                className="w-full bg-red-500 hover:bg-red-600 text-white p-3 rounded-lg transition-colors text-sm font-medium"
              >
                🚨 Urgent Legal Matter
              </button>
              <button
                onClick={() => openWhatsApp()}
                className="w-full bg-green-500 hover:bg-green-600 text-white p-3 rounded-lg transition-colors text-sm font-medium"
              >
                💬 Start Consultation
              </button>
            </div>

            <div className="mt-3 text-xs text-gray-500 text-center">
              Available 24/7 for urgent matters
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WhatsAppWidget;
