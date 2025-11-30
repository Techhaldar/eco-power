function Services() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-4">
      <h1 className="text-3xl font-bold text-blue-700 mb-4 text-center max-w-5xl">
        Our Solar Services
      </h1>

      <p className="text-gray-600 mb-6 text-center max-w-5xl mx-auto">
        We provide a complete range of solar energy solutions — from rooftop
        solar installations to maintenance and support, all under the PM Surya
        Ghar Muft Bijli Yojana.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="border p-4 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="font-semibold text-lg mb-2 text-green-600">
            Residential Solar
          </h3>
          <p className="text-gray-500">
            Affordable rooftop solar systems for homes with government subsidy.
          </p>
        </div>

        <div className="border p-4 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="font-semibold text-lg mb-2 text-green-600">
            Commercial Solar
          </h3>
          <p className="text-gray-500">
            Efficient solar power systems for offices, shops, and factories.
          </p>
        </div>

        <div className="border p-4 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="font-semibold text-lg mb-2 text-green-600">
            Installation & Maintenance
          </h3>
          <p className="text-gray-500">
            Hassle-free installation and long-term system support by experts.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
