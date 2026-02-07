import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Phone, Mail, MapPin, BriefcaseBusiness } from "lucide-react";

function Contact() {
  const formRef = useRef(null);
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus("");

    emailjs
      .sendForm(
        "service_aidd9hg", // SERVICE_ID
        "template_jki58fk", // TEMPLATE_ID
        formRef.current,
        "p6xOL1OEvfUJcYDyz", // PUBLIC_KEY
      )
      .then(
        () => {
          setIsSending(false);
          setStatus("Thank you! We have received your enquiry.");
          formRef.current.reset();
        },
        () => {
          setIsSending(false);
          setStatus("Something went wrong. Please try again.");
        },
      );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Heading */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-blue-700 mb-2">Contact Us</h1>
        <p className="text-gray-700">
          Get in touch with ECO POWER SOLAR SOLUTIONS for any solar
          installation, quotation, or support.
        </p>
      </div>

      {/* Main Content: Form + Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Form - Mobile top, Desktop right */}
        <div className="order-1 lg:order-2 bg-white shadow-md rounded-xl p-5 border border-gray-100">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Free Consultancy & Service
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
                onInput={(e) => {
                  e.target.value = e.target.value.replace(/[^A-Za-z\s]/g, "");
                }}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email (Optional)
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
              {/* Contact Number */}
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
                  maxLength={10}
                  pattern="\d{10}"
                  onInput={(e) => {
                    e.target.value = e.target.value.replace(/\D/g, "");
                  }}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* State */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  State <span className="text-red-500">*</span>
                </label>
                <select
                  name="state"
                  required
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select your state
                  </option>
                  <option value="Uttarakhand">Uttarakhand</option>
                  <option value="Uttar Pradesh">Uttar Pradesh</option>
                </select>
              </div>
            </div>

            {/* Panel Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Type of Solar Panel <span className="text-red-500">*</span>
              </label>
              <select
                name="panel_type"
                required
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                defaultValue=""
              >
                <option value="" disabled>
                  Select panel type
                </option>
                <option value="Ongrid">Ongrid</option>
                <option value="Hybrid">Hybrid</option>
                <option value="Offgrid">Offgrid</option>
              </select>
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

            {/* Submit */}
            <button
              type="submit"
              disabled={isSending}
              className="w-full sm:w-auto px-4 py-2.5 rounded-lg bg-yellow-400 text-black text-sm font-semibold hover:bg-yellow-500 transition disabled:opacity-60"
            >
              {isSending ? "Sending..." : "Submit Message"}
            </button>

            {status && <p className="text-xs text-gray-600 mt-1">{status}</p>}
          </form>
        </div>

        {/* Contact Details (original, unchanged) */}
        <div className="order-2 lg:order-1 bg-gray-50 rounded-xl p-4 border border-gray-100">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Contact Details
          </h2>

          <div className="space-y-3 text-sm">
            <p className="flex justify-start items-start sm:items-center gap-2 text-gray-600">
              <Phone className="shrink-0 w-6 h-6" />
              <span>
                <strong>Mobile:</strong>{" "}
                <a
                  href="tel:9068202706"
                  className="text-blue-700 hover:underline"
                >
                  +91 9068202706
                </a>
              </span>
            </p>

            <p className="flex justify-start items-start sm:items-center gap-2 text-gray-600">
              <Mail className="shrink-0 w-6 h-6" />
              <span>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:ecopowersolarsolutions@gmail.com"
                  className="text-blue-700 hover:underline"
                >
                  ecopowersolarsolutions@gmail.com
                </a>
              </span>
            </p>

            <p className="flex justify-start items-start sm:items-center gap-2 text-gray-600">
              <MapPin className="shrink-0 w-6 h-6" />
              <span>
                <strong>Address:</strong> Melaghat Road, Jankaiya, Khatima -
                262308, U.S. Nagar (Uttarakhand)
              </span>
            </p>

            <p className="flex justify-start items-start sm:items-center gap-2 text-gray-600">
              <BriefcaseBusiness className="shrink-0 w-6 h-6" />
              <strong>Working Hours:</strong> Mon - Sun, 9:00 AM to 10:00 PM
            </p>
          </div>
          <div className="mt-10">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Find us on Google Maps
            </h2>
            <div className="w-full h-72 md:h-96 rounded-xl overflow-hidden shadow-lg border border-gray-200">
              <iframe
                title="ECO POWER SOLAR SOLUTIONS Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3193.391685081152!2d80.0154107751275!3d28.879767375530715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a05365cc64577f%3A0xc73c1a9952cdcd2a!2sRatan%20Ladies%20Tailor%20Shop!5e1!3m2!1sen!2sin!4v1764500780951!5m2!1sen!2sin"
                className="w-full h-full border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Google Map - Niche, full width */}
    </div>
  );
}

export default Contact;
