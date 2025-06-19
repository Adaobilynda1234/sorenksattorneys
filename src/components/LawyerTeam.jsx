import React from "react";
import {
  ChevronLeft,
  ChevronRight,
  Phone,
  Mail,
  Facebook,
  Twitter,
} from "lucide-react";

const LawyersTeam = () => {
  const lawyers = [
    {
      name: "Ebuka Udeh Esq",
      role: "Expertise in Litigation,lands,Registry Practice and General Soliciting Practices",
      image: null, // Placeholder for image
    },
    {
      name: "Olantunji Olanrewaju Esq",
      role: "Expertise in Litigation,lands,Registry Practice and General Soliciting Practices",
      image: null, // Placeholder for image
    },
  ];

  return (
    <div className="py-16 px-4 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4" style={{ color: "#FCA311" }}>
          Our Lawyers
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Meet our team of dedicated legal professionals, committed to providing
          expert advice and tailored solutions to meet your legal needs.
        </p>
      </div>

      {/* Lawyers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {lawyers.map((lawyer, index) => (
          <div key={index} className="relative group">
            {/* Image Container */}
            <div className="relative overflow-hidden rounded-lg shadow-lg h-80 mb-4">
              <div
                className="w-full h-full flex items-center justify-center text-white font-semibold text-lg"
                style={{ backgroundColor: "#14213D" }}
              >
                {lawyer.image ? (
                  <img
                    src={lawyer.image}
                    alt={lawyer.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  `${lawyer.name} Photo`
                )}
              </div>

              {/* Overlay for Horace Thiele (third lawyer) */}
              {index === 2 && (
                <div
                  className="absolute inset-0 bg-opacity-80 flex flex-col items-center justify-center"
                  style={{ backgroundColor: "#14213D" }}
                >
                  <h3 className="text-white font-bold text-xl mb-2">
                    {lawyer.name}
                  </h3>
                  <p className="text-gray-300 mb-4">{lawyer.role}</p>

                  {/* Social Icons */}
                  <div className="flex space-x-3">
                    <div
                      className="p-2 rounded hover:scale-110 transition-transform cursor-pointer"
                      style={{ backgroundColor: "#FCA311" }}
                    >
                      <Phone className="w-4 h-4 text-white" />
                    </div>
                    <div
                      className="p-2 rounded hover:scale-110 transition-transform cursor-pointer"
                      style={{ backgroundColor: "#FCA311" }}
                    >
                      <Mail className="w-4 h-4 text-white" />
                    </div>
                    <div
                      className="p-2 rounded hover:scale-110 transition-transform cursor-pointer"
                      style={{ backgroundColor: "#FCA311" }}
                    >
                      <Facebook className="w-4 h-4 text-white" />
                    </div>
                    <div
                      className="p-2 rounded hover:scale-110 transition-transform cursor-pointer"
                      style={{ backgroundColor: "#FCA311" }}
                    >
                      <Twitter className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
              )}

              {/* Hover overlay for other lawyers */}
              {index !== 2 && (
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                  <div className="flex space-x-3">
                    <div
                      className="p-2 rounded hover:scale-110 transition-transform cursor-pointer"
                      style={{ backgroundColor: "#FCA311" }}
                    >
                      <Phone className="w-4 h-4 text-white" />
                    </div>
                    <div
                      className="p-2 rounded hover:scale-110 transition-transform cursor-pointer"
                      style={{ backgroundColor: "#FCA311" }}
                    >
                      <Mail className="w-4 h-4 text-white" />
                    </div>
                    <div
                      className="p-2 rounded hover:scale-110 transition-transform cursor-pointer"
                      style={{ backgroundColor: "#FCA311" }}
                    >
                      <Facebook className="w-4 h-4 text-white" />
                    </div>
                    <div
                      className="p-2 rounded hover:scale-110 transition-transform cursor-pointer"
                      style={{ backgroundColor: "#FCA311" }}
                    >
                      <Twitter className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Name and Role (hidden for Horace Thiele as it's in overlay) */}
            {index !== 2 && (
              <div className="text-center">
                <h3
                  className="font-bold text-xl mb-1"
                  style={{ color: "#14213D" }}
                >
                  {lawyer.name}
                </h3>
                <p className="text-gray-600">{lawyer.role}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LawyersTeam;
