function Scheme() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-4">
      {/* Title */}
      <h1 className="text-3xl font-bold text-blue-700 mb-4 text-center">
        PM Surya Ghar Muft Bijli Yojana
      </h1>

      {/* Intro Paragraph */}
      <p className="text-gray-700 leading-relaxed mb-6">
        The Pradhan Mantri Surya Ghar Muft Bijli Yojana is a Government of India
        initiative that aims to promote the use of solar energy for households.
        Under this scheme, families can install rooftop solar panels and receive
        free electricity for up to 30 years, along with a government subsidy of
        up to ₹85,800.
      </p>

      {/* Points */}
      <ul className="list-disc list-inside text-gray-600 space-y-2">
        <li>Subsidy up to ₹85,800 for 3KW system.</li>
        <li>30 years warranty on solar panels.</li>
        <li>Free electricity up to 300 units/month.</li>
        <li>Zero maintenance for 5 years.</li>
      </ul>

      {/* Button */}
      <div className="mt-8 flex justify-center items-center">
        <a
          href="/contact"
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-lg inline-block"
        >
          Apply Now
        </a>
      </div>

      {/* ====== Benefits Section Added Below ====== */}

      <section className="bg-[#f4f7fc] mt-12 py-10 rounded-3xl">
        <div className="max-w-6xl mx-auto px-4">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f5fbf] text-center mb-8">
            Benefits
          </h2>

          {/* Main Card */}
          <div className="bg-white rounded-3xl shadow-md px-4 py-8 md:px-10 md:py-10">
            {/* Top: Subsidy */}
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 pb-8 border-b border-gray-200">
              {/* Residential */}
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-lg font-semibold text-gray-900">
                  Subsidy for{" "}
                  <span className="block text-[#0f5fbf] text-2xl">
                    Residential Households
                  </span>
                </h3>

                <div className="mt-6 flex flex-col md:flex-row md:divide-x md:divide-gray-300 gap-6 md:gap-0">
                  <div className="md:px-6 flex-1">
                    <p className="text-gray-600 text-sm">Rs.</p>
                    <p className="text-3xl font-bold text-[#0f5fbf]">30,000</p>
                    <p className="text-gray-700 text-sm">per kW</p>
                    <p className="text-gray-500 text-xs mt-1">up to 2 kW</p>
                  </div>

                  <div className="md:px-6 flex-1">
                    <p className="text-gray-600 text-sm">Rs.</p>
                    <p className="text-3xl font-bold text-[#0f5fbf]">18,000</p>
                    <p className="text-gray-700 text-sm">per kW</p>
                    <p className="text-gray-500 text-xs mt-1">
                      for additional capacity up to 3 kW
                    </p>
                  </div>

                  <div className="md:px-6 flex-1">
                    <p className="text-gray-600 text-sm">Rs.</p>
                    <p className="text-3xl font-bold text-[#0f5fbf]">78,000</p>
                    <p className="text-gray-700 text-sm">Total subsidy</p>
                    <p className="text-gray-500 text-xs mt-1">
                      capped for systems above 3 kW
                    </p>
                  </div>
                </div>
              </div>

              {/* GHS/RWA */}
              <div className="flex-1 text-center lg:text-left lg:border-l lg:border-gray-200 lg:pl-10">
                <h3 className="text-lg font-semibold text-gray-900">
                  Subsidy for{" "}
                  <span className="block text-[#0f5fbf] text-2xl">
                    GHS / RWA
                  </span>
                </h3>

                <p className="text-xs text-gray-500 mt-1">
                  (Group Housing Society / Resident Welfare Association)
                </p>

                <div className="mt-6">
                  <p className="text-gray-600 text-sm">Rs.</p>
                  <p className="text-3xl font-bold text-[#0f5fbf]">18,000</p>
                  <p className="text-gray-700 text-sm mt-1">per kW</p>
                  <p className="text-gray-500 text-xs mt-2 leading-relaxed">
                    For common facilities including EV charging, up to 500 kW
                    (@3 kW per house). Includes rooftop plants installed by
                    individual residents.
                  </p>
                </div>
              </div>
            </div>

            {/* Additional 10% */}
            <p className="text-center text-gray-700 mt-6 text-sm md:text-base">
              For special states, an additional{" "}
              <span className="font-semibold">10% Subsidy</span> will be
              applicable per kW.
            </p>

            {/* Suitable PLANT Capacity */}
            <h3 className="text-center font-semibold text-xl mt-4 text-gray-900">
              Suitable Rooftop Solar Plant Capacity for Households
            </h3>

            <div className="mt-6 overflow-x-auto">
              <table className="min-w-full border border-gray-200 rounded-xl bg-white text-xs md:text-sm">
                <thead className="bg-[#f8fafc]">
                  <tr>
                    <th className="px-4 py-3 text-gray-600 font-semibold border-b border-gray-200 text-left">
                      Average Monthly Electricity Consumption (units)
                    </th>
                    <th className="px-4 py-3 text-gray-600 font-semibold border-b border-gray-200 text-center">
                      0–150
                    </th>
                    <th className="px-4 py-3 text-gray-600 font-semibold border-b border-gray-200 text-center">
                      150–300
                    </th>
                    <th className="px-4 py-3 text-gray-600 font-semibold border-b border-gray-200 text-center">
                      &gt;300
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td className="px-4 py-3 text-gray-700 border-b border-gray-200">
                      Suitable Rooftop Solar Plant Capacity
                    </td>
                    <td className="px-4 py-3 text-center border-b border-gray-200">
                      1–2 kW
                    </td>
                    <td className="px-4 py-3 text-center border-b border-gray-200">
                      2–3 kW
                    </td>
                    <td className="px-4 py-3 text-center border-b border-gray-200">
                      Above 3 kW
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Scheme;
