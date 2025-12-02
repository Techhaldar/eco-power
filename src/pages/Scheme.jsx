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

      {/* ====== Benefits Section Added Below ====== */}

      <section className="py-12 sm:py-16 sm:mt-12 sm:bg-[#f4f7fc]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f5fbf] text-center mb-6">
            Benefits
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10 text-sm md:text-base">
            Check the government subsidy structure and recommended rooftop solar
            plant capacity based on your average monthly electricity
            consumption.
          </p>

          {/* Subsidy Section */}
          <div className="bg-white rounded-3xl shadow-md p-6 md:p-8 lg:p-10 space-y-10">
            {/* Subsidy Heading */}
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                Central Financial Assistance (Subsidy)
              </h3>
              <p className="text-xs md:text-sm text-gray-500">
                Applicable under the Rooftop Solar Programme for residential
                consumers.
              </p>
            </div>

            {/* Subsidy Tables */}
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Residential Households */}
              <div className="border border-gray-100 rounded-2xl overflow-hidden">
                <div className="px-5 py-4 border-b border-gray-100 bg-[#f8fafc]">
                  <h4 className="text-lg font-semibold text-gray-900">
                    Subsidy for{" "}
                    <span className="block text-[#0f5fbf] text-xl">
                      Residential Households
                    </span>
                  </h4>
                </div>
                <div className="p-5 overflow-x-auto">
                  <table className="min-w-full text-left text-xs md:text-sm">
                    <thead className="bg-[#f9fbff]">
                      <tr>
                        <th className="px-3 py-2 font-semibold text-gray-600">
                          System Capacity
                        </th>
                        <th className="px-3 py-2 font-semibold text-gray-600 text-right">
                          Subsidy (Rs/kW)
                        </th>
                        <th className="px-3 py-2 font-semibold text-gray-600">
                          Remarks
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      <tr>
                        <td className="px-3 py-3 text-gray-800">Up to 2 kW</td>
                        <td className="px-3 py-3 text-right font-semibold text-[#0f5fbf]">
                          30,000
                        </td>
                        <td className="px-3 py-3 text-gray-500">
                          Maximum benefit for first 2 kW.
                        </td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 text-gray-800">
                          Additional capacity up to 3 kW
                        </td>
                        <td className="px-3 py-3 text-right font-semibold text-[#0f5fbf]">
                          18,000
                        </td>
                        <td className="px-3 py-3 text-gray-500">
                          Applicable for the next 1 kW (2–3 kW).
                        </td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 text-gray-800">Above 3 kW</td>
                        <td className="px-3 py-3 text-right font-semibold text-[#0f5fbf]">
                          —
                        </td>
                        <td className="px-3 py-3 text-gray-500">
                          Total subsidy capped at{" "}
                          <span className="font-semibold text-gray-700">
                            Rs. 78,000
                          </span>{" "}
                          for systems &gt; 3 kW.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* GHS / RWA */}
              <div className="border border-gray-100 rounded-2xl overflow-hidden">
                <div className="px-5 py-4 border-b border-gray-100 bg-[#f8fafc]">
                  <h4 className="text-lg font-semibold text-gray-900">
                    Subsidy for{" "}
                    <span className="block text-[#0f5fbf] text-xl">
                      GHS / RWA
                    </span>
                  </h4>
                  <p className="text-xs text-gray-500 mt-1">
                    (Group Housing Society / Resident Welfare Association)
                  </p>
                </div>
                <div className="p-5 overflow-x-auto">
                  <table className="min-w-full text-left text-xs md:text-sm">
                    <thead className="bg-[#f9fbff]">
                      <tr>
                        <th className="px-3 py-2 font-semibold text-gray-600">
                          Particulars
                        </th>
                        <th className="px-3 py-2 font-semibold text-gray-600 text-right">
                          Value
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      <tr>
                        <td className="px-3 py-3 text-gray-800">
                          Subsidy per kW
                        </td>
                        <td className="px-3 py-3 text-right font-semibold text-[#0f5fbf]">
                          Rs. 18,000 / kW
                        </td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 text-gray-800">
                          Maximum aggregate capacity
                        </td>
                        <td className="px-3 py-3 text-right text-gray-700">
                          Up to 500 kW
                        </td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 text-gray-800">Basis</td>
                        <td className="px-3 py-3 text-right text-gray-700">
                          3 kW per house
                        </td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 text-gray-800">Usage</td>
                        <td className="px-3 py-3 text-right text-gray-700">
                          Common facilities incl. EV charging
                        </td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 text-gray-800">Note</td>
                        <td className="px-3 py-3 text-right text-gray-500">
                          Includes rooftop plants installed by individual
                          residents.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Additional Subsidy Note */}
            <div className="rounded-2xl bg-[#f5f7ff] px-4 py-4 md:px-6 md:py-5 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <p className="text-sm md:text-base text-gray-700">
                For{" "}
                <span className="font-semibold text-gray-900">
                  special states
                </span>
                , an additional{" "}
                <span className="font-semibold text-[#0f5fbf]">
                  10% subsidy
                </span>{" "}
                per kW will be applicable as per applicable guidelines.
              </p>
            </div>

            {/* Suitable Plant Capacity */}
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 text-center mb-3">
                Suitable Rooftop Solar Plant Capacity for Households
              </h3>
              <p className="text-center text-xs md:text-sm text-gray-500 mb-5">
                Based on your average monthly electricity consumption (in
                units).
              </p>

              {/* Desktop / Tablet View (Table) */}
              <div className="hidden md:block overflow-x-auto">
                <table className="min-w-full border border-gray-200 rounded-2xl bg-white text-sm">
                  <thead className="bg-[#f8fafc]">
                    <tr>
                      <th className="px-4 py-3 text-gray-600 font-semibold border-b border-gray-200 text-left">
                        Average Monthly Consumption (Units)
                      </th>
                      <th className="px-4 py-3 text-gray-600 font-semibold border-b border-gray-200 text-center">
                        0 – 150
                      </th>
                      <th className="px-4 py-3 text-gray-600 font-semibold border-b border-gray-200 text-center">
                        150 – 300
                      </th>
                      <th className="px-4 py-3 text-gray-600 font-semibold border-b border-gray-200 text-center">
                        &gt; 300
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-gray-100">
                    <tr className="hover:bg-[#f9fbff] transition-colors">
                      <td className="px-4 py-3 text-gray-700">
                        Recommended Rooftop Solar Plant Capacity
                      </td>
                      <td className="px-4 py-3 text-center font-medium text-[#0f5fbf]">
                        1 – 2 kW
                      </td>
                      <td className="px-4 py-3 text-center font-medium text-[#0f5fbf]">
                        2 – 3 kW
                      </td>
                      <td className="px-4 py-3 text-center font-medium text-[#0f5fbf]">
                        Above 3 kW
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Mobile View (Cards) */}
              <div className="md:hidden space-y-4">
                {/* 0–150 Card */}
                <div className="border border-gray-200 rounded-2xl bg-white p-4 shadow-sm">
                  <p className="text-[11px] uppercase tracking-wide text-gray-500 mb-1">
                    Average Monthly Consumption
                  </p>
                  <p className="text-sm font-semibold text-gray-800 mb-2">
                    0 – 150 Units
                  </p>
                  <div className="flex items-baseline justify-between">
                    <p className="text-xs text-gray-500">
                      Recommended Capacity
                    </p>
                    <p className="text-base font-bold text-[#0f5fbf]">
                      1 – 2 kW
                    </p>
                  </div>
                </div>

                {/* 150–300 Card */}
                <div className="border border-gray-200 rounded-2xl bg-white p-4 shadow-sm">
                  <p className="text-[11px] uppercase tracking-wide text-gray-500 mb-1">
                    Average Monthly Consumption
                  </p>
                  <p className="text-sm font-semibold text-gray-800 mb-2">
                    150 – 300 Units
                  </p>
                  <div className="flex items-baseline justify-between">
                    <p className="text-xs text-gray-500">
                      Recommended Capacity
                    </p>
                    <p className="text-base font-bold text-[#0f5fbf]">
                      2 – 3 kW
                    </p>
                  </div>
                </div>

                {/* >300 Card */}
                <div className="border border-gray-200 rounded-2xl bg-white p-4 shadow-sm">
                  <p className="text-[11px] uppercase tracking-wide text-gray-500 mb-1">
                    Average Monthly Consumption
                  </p>
                  <p className="text-sm font-semibold text-gray-800 mb-2">
                    &gt; 300 Units
                  </p>
                  <div className="flex items-baseline justify-between">
                    <p className="text-xs text-gray-500">
                      Recommended Capacity
                    </p>
                    <p className="text-base font-bold text-[#0f5fbf]">
                      Above 3 kW
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Button */}
      <div className="mt-8 flex justify-center items-center">
        <a
          href="/contact"
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-lg inline-block"
        >
          Apply Now
        </a>
      </div>
    </div>
  );
}

export default Scheme;
