function Services() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-4">
      <h1 className="text-3xl font-bold text-blue-700 mb-4 text-center">
        Our Solar Services
      </h1>

      <p className="text-gray-600 mb-6 mx-auto max-w-5xl">
        We offer a complete range of solar energy solutions — from residential
        rooftop installations to large commercial systems, all backed by trusted
        brands like TATA Power Solar and WAAREE Solar.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="border p-4 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="font-semibold text-lg mb-2 text-green-600">
            Residential Rooftop Solar
          </h3>
          <p className="text-gray-500">
            Cost-effective solar systems for homes under PM Surya Ghar Yojana.
          </p>
        </div>

        <div className="border p-4 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="font-semibold text-lg mb-2 text-green-600">
            Commercial & Industrial Solar
          </h3>
          <p className="text-gray-500">
            Reliable power for businesses with subsidy and long-term savings.
          </p>
        </div>

        <div className="border p-4 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="font-semibold text-lg mb-2 text-green-600">
            Installation & Maintenance
          </h3>
          <p className="text-gray-500">
            Professional installation with free 5-year maintenance and support.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
