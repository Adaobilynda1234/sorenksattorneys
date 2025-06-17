import React from "react";
import {
  Users,
  Briefcase,
  Scale,
  Home,
  DollarSign,
  Shield,
} from "lucide-react";
import Teamwork from "../assets/teamwork.png";

const Service = () => {
  const services = [
    {
      icon: <Scale className="w-8 h-8 text-gray-800" />,
      title: "Litigation and Dispute Resolution",
      items: [
        "Legal representation in court",
        "Civil, criminal, and commercial litigation",
        "Mediation and arbitration services",
      ],
    },
    {
      icon: <Briefcase className="w-8 h-8 text-[#FCA311]" />,
      title: "Corporate and Business Law",
      items: [
        "Building and reviewing contracts",
        "Corporate compliance and governance",
        "Mergers, acquisitions, and business restructuring",
      ],
    },
    {
      icon: <Users className="w-8 h-8 text-gray-800" />,
      title: "Family Law",
      items: [
        "Divorce and child custody",
        "Immigration services",
        "Estate planning and inheritance matters",
      ],
    },
    {
      icon: <Users className="w-8 h-8 text-gray-800" />,
      title: "Employment and Labor Law",
      items: [
        "Workplace disputes and wrongful termination",
        "Employment contracts and policies",
        "Labor union negotiations",
      ],
    },
    {
      icon: <Home className="w-8 h-8 text-gray-800" />,
      title: "Intellectual Property Law",
      items: [
        "Trademark and copyright registrations",
        "IP infringement cases",
        "Licensing and patent agreements",
      ],
    },
    {
      icon: <Home className="w-8 h-8 text-gray-800" />,
      title: "Real Estate and Property Law",
      items: [
        "Property transaction contracts",
        "Land disputes and zoning issues",
        "Lease agreements and tenant rights",
      ],
    },
    {
      icon: <Shield className="w-8 h-8 text-gray-800" />,
      title: "Human Rights and Advocacy",
      items: [
        "Legal aid for marginalized communities",
        "Protection of fundamental rights",
        "Representation in public interest litigation",
      ],
    },
    {
      icon: <DollarSign className="w-8 h-8 text-gray-800" />,
      title: "Taxation and Financial Law",
      items: [
        "Tax compliance and disputes",
        "Financial regulations and audits",
        "Tax planning for individuals and businesses",
      ],
    },
  ];

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div className="relative">
            <img
              src={Teamwork}
              alt="Legal consultation"
              className="rounded-lg shadow-lg w-full h-[400px] object-cover"
            />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="text-[#FCA311] font-semibold text-lg">
              What We Offer
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              We provide tailored legal solutions to meet your unique needs,
              ensuring your rights are protected and justice is served.
            </h2>
            <button className="bg-[#FCA311] hover:bg-[#e8920f] text-white px-8 py-3 rounded-md font-semibold transition-colors duration-200">
              See more
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              {/* Icon and Title */}
              <div className="flex items-center gap-3 mb-4 pb-4 border-b-2 border-[#FCA311]">
                {service.icon}
                <h3 className="font-bold text-gray-900 text-lg leading-tight">
                  {service.title}
                </h3>
              </div>

              {/* Service Items */}
              <ul className="space-y-2">
                {service.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="text-gray-600 text-sm leading-relaxed flex items-start"
                  >
                    <span className="w-1.5 h-1.5 bg-[#FCA311] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
