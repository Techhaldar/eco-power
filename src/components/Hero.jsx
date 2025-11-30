function Hero() {
  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/solar-video.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* LEFT: Text */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-green-400 mb-3 px-4 lg:px-0 py-1">
              Welcome to
            </h1>
            <h1 className="text-3xl sm:text-4xl font-bold text-green-400 mb-3 px-4 lg:px-0 py-1">
              ECO POWER SOLAR SOLUTIONS
            </h1>

            <p className="text-gray-200 max-w-2xl mx-auto lg:mx-0 px-4 lg:px-0 py-2">
              Power your home with solar energy and enjoy up to ₹85,800 subsidy
              under PM Surya Ghar Muft Bijli Yojana.
            </p>
          </div>

          {/* RIGHT: Form */}
          <div className="bg-white shadow-md rounded-xl p-5 border border-gray-100">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Free Consultancy &amp; Service
            </h2>

            <form className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Contact Number + State */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Contact Number
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter your contact number"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    State
                  </label>
                  <select
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select your state
                    </option>
                    <option value="uttarakhand">Uttarakhand</option>
                    <option value="up">Uttar Pradesh</option>
                  </select>
                </div>
              </div>

              {/* Type of Solar Panel */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Type of Solar Panel
                </label>
                <select
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select panel type
                  </option>
                  <option value="ongrid">Ongrid</option>
                  <option value="hybrid">Hybrid</option>
                  <option value="offgrid">Offgrid</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Write your message here..."
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-yellow-400 text-black text-sm font-semibold hover:bg-yellow-500 transition"
              >
                Submit Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
