import residentialImg from "../assets/images/Residential-Solar.webp";
import commercialImg from "../assets/images/Commercial-Solar.webp";
import maintenanceImg from "../assets/images/Installation-and-Maintenance.webp";

function Services() {
  const services = [
    {
      title: "Residential Solar",
      img: residentialImg,
      desc: "Rooftop solar solutions for homes with PM Surya Ghar subsidy benefits.",
      points: [
        "Up to ₹85,800 Government Subsidy",
        "Reduce Electricity Bills",
        "Eco-friendly & Long-lasting",
      ],
    },
    {
      title: "Commercial Solar",
      img: commercialImg,
      desc: "High-capacity solar systems for offices, shops & factories.",
      points: [
        "High ROI & Low Maintenance",
        "Customized Power Solutions",
        "Net Metering Facility",
      ],
    },
    {
      title: "Installation & Maintenance",
      img: maintenanceImg,
      desc: "End-to-end installation with expert maintenance support.",
      points: [
        "Professional Installation",
        "Annual Maintenance Support",
        "Fast Service & Warranty",
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-14">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-4">
        Our Solar Services
      </h1>

      <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
        We offer complete solar energy solutions — from installation to
        maintenance — under <strong>PM Surya Ghar Muft Bijli Yojana</strong> to
        help you save money and protect the environment.
      </p>

      {/* Services Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {services.map((service, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden group"
          >
            {/* Image */}
            <div className="h-48 overflow-hidden">
              <img
                src={service.img}
                alt={service.title}
                className="h-full w-full object-cover group-hover:scale-110 transition duration-300"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-green-600 mb-2">
                {service.title}
              </h3>

              <p className="text-gray-500 mb-4">{service.desc}</p>

              <ul className="space-y-2 text-sm text-gray-600">
                {service.points.map((point, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="text-green-500">✔</span>
                    {point}
                  </li>
                ))}
              </ul>

              <a
                href="tel:9068202706"
                className="mt-6 w-full inline-block text-center bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-medium transition"
              >
                Get Free Consultation
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
