import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Hero() {
  const formRef = useRef(null);
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    state: "",
    panel_type: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus("");
    setErrors({
      name: "",
      phone: "",
      state: "",
      panel_type: "",
    });

    const form = formRef.current;
    const name = form.name.value.trim();
    const phone = form.phone.value.trim();
    const state = form.state.value;
    const panelType = form.panel_type.value;

    const newErrors = {};

    // Name validation: required + must start with alphabet
    if (!name) {
      newErrors.name = "Name is required.";
    } else if (!/^[A-Za-z]/.test(name)) {
      newErrors.name = "Name must start with an alphabet.";
    }

    // Phone validation: exactly 10 digits
    const digitsOnly = phone.replace(/\D/g, "");
    if (!phone) {
      newErrors.phone = "Contact number is required.";
    } else if (!/^\d{10}$/.test(digitsOnly)) {
      newErrors.phone = "Contact number must be exactly 10 digits.";
    }

    // State validation
    if (!state) {
      newErrors.state = "State is required.";
    }

    // Panel Type validation
    if (!panelType) {
      newErrors.panel_type = "Type of Solar Panel is required.";
    }

    // If any errors, stop here
    if (Object.keys(newErrors).length > 0) {
      setErrors((prev) => ({ ...prev, ...newErrors }));
      setIsSending(false);
      setStatus("Please correct the highlighted fields.");
      return;
    }

    // If validation passes, send email
    emailjs
      .sendForm(
        "service_aidd9hg", // YOUR SERVICE ID
        "template_jki58fk", // YOUR TEMPLATE ID
        formRef.current,
        "p6xOL1OEvfUJcYDyz" // YOUR PUBLIC KEY
      )
      .then(
        () => {
          setIsSending(false);
          setStatus("Thank you! Your enquiry has been submitted.");
          formRef.current.reset();
        },
        () => {
          setIsSending(false);
          setStatus("Something went wrong. Please try again.");
        }
      );
  };

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

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter your name"
                  className={`w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 ${
                    errors.name
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-blue-500"
                  }`}
                />
                {errors.name && (
                  <p className="text-xs text-red-600 mt-1">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Contact Number + State */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Contact Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="phone"
                    required
                    placeholder="Enter your contact number"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    onInput={(e) => {
                      e.target.value = e.target.value.replace(/\D/g, ""); // remove all non-digits
                    }}
                    maxLength="10"
                    className={`w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 ${
                      errors.phone
                        ? "border-red-500 focus:ring-red-500"
                        : "border-gray-300 focus:ring-blue-500"
                    }`}
                  />

                  {errors.phone && (
                    <p className="text-xs text-red-600 mt-1">{errors.phone}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    State <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="state"
                    required
                    className={`w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 ${
                      errors.state
                        ? "border-red-500 focus:ring-red-500"
                        : "border-gray-300 focus:ring-blue-500"
                    }`}
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select your state
                    </option>
                    <option value="Uttarakhand">Uttarakhand</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                  </select>
                  {errors.state && (
                    <p className="text-xs text-red-600 mt-1">{errors.state}</p>
                  )}
                </div>
              </div>

              {/* Type of Solar Panel */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Type of Solar Panel <span className="text-red-500">*</span>
                </label>
                <select
                  name="panel_type"
                  required
                  className={`w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 ${
                    errors.panel_type
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-blue-500"
                  }`}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select panel type
                  </option>
                  <option value="Ongrid">Ongrid</option>
                  <option value="Hybrid">Hybrid</option>
                  <option value="Offgrid">Offgrid</option>
                </select>
                {errors.panel_type && (
                  <p className="text-xs text-red-600 mt-1">
                    {errors.panel_type}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  rows="4"
                  name="message"
                  placeholder="Write your message here..."
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSending}
                className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-yellow-400 text-black text-sm font-semibold hover:bg-yellow-500 transition disabled:opacity-60"
              >
                {isSending ? "Sending..." : "Submit Message"}
              </button>

              {status && <p className="text-xs text-gray-600 mt-1">{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
