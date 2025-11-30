function About() {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Heading */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-3">
            About ECO POWER SOLAR SOLUTIONS
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We are committed to bringing clean, reliable and affordable solar
            energy to every home in Uttarakhand and nearby regions.
          </p>
        </div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Left: Description */}
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              <strong>ECO POWER SOLAR SOLUTIONS</strong> is a trusted rooftop
              solar provider based in Khatima, Uttarakhand. We design and
              install high–efficiency solar systems for homes, shops and
              businesses, helping customers reduce their electricity bills and
              switch to clean energy.
            </p>

            <p>
              We actively support the{" "}
              <strong>PM Surya Ghar Muft Bijli Yojana</strong>, guiding
              customers through the complete process – from site survey and
              system design to subsidy documentation and installation.
            </p>

            <p>
              Our team focuses on quality components, neat installation and
              reliable after–sales support so that your solar system performs
              efficiently for years.
            </p>

            <div className="bg-white border border-blue-100 rounded-xl p-4 shadow-sm">
              <h2 className="text-lg font-semibold text-blue-700 mb-2">
                Our Mission
              </h2>
              <p className="text-sm text-gray-700">
                To make solar power simple, affordable and accessible for every
                Indian household by providing transparent guidance, quality
                products and dedicated service.
              </p>
            </div>
          </div>

          {/* Right: Highlights / Why Choose Us */}
          <div className="space-y-5">
            <div className="bg-white rounded-xl shadow-md border border-gray-100 p-5">
              <h2 className="text-lg font-semibold text-gray-800 mb-3">
                Why Choose Us?
              </h2>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-green-500" />
                  <span>
                    End–to–end support – site visit, design, installation, and
                    post–installation service.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-green-500" />
                  <span>
                    High–efficiency solar panels and inverters from trusted
                    brands like TATA Power &amp; WAAREE.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-green-500" />
                  <span>
                    Proper guidance for government subsidy under PM Surya Ghar
                    Muft Bijli Yojana.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-green-500" />
                  <span>
                    Neat, professional installation with focus on safety &
                    long–term performance.
                  </span>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4 text-center text-sm">
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
                <p className="text-2xl font-bold text-blue-700">Rooftop</p>
                <p className="text-gray-600 mt-1">
                  Solar for Homes &amp; Shops
                </p>
              </div>
              <div className="bg-green-50 border border-green-100 rounded-xl p-4">
                <p className="text-2xl font-bold text-green-700">Support</p>
                <p className="text-gray-600 mt-1">
                  Subsidy &amp; Documentation
                </p>
              </div>
              <div className="bg-yellow-50 border border-yellow-100 rounded-xl p-4">
                <p className="text-2xl font-bold text-yellow-700">Quality</p>
                <p className="text-gray-600 mt-1">
                  Branded Panels &amp; Inverters
                </p>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                <p className="text-2xl font-bold text-gray-800">Service</p>
                <p className="text-gray-600 mt-1">Local &amp; Reliable Team</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <p className="text-gray-700 mb-3">
            Ready to switch to solar and save on your electricity bill?
          </p>
          <a
            href="https://wa.me/919068202706?text=Hi%20ECO%20POWER%20SOLAR%20SOLUTIONS%2C%20I%20am%20interested%20in%20a%20rooftop%20solar%20system.%20Please%20contact%20me."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow"
          >
            Contact us on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
