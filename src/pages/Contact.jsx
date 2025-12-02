import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

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
        "p6xOL1OEvfUJcYDyz" // PUBLIC_KEY
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
        }
      );
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
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
              className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-yellow-400 text-black text-sm font-semibold hover:bg-yellow-500 transition disabled:opacity-60"
            >
              {isSending ? "Sending..." : "Submit Message"}
            </button>

            {status && <p className="text-xs text-gray-600 mt-1">{status}</p>}
          </form>
        </div>

        {/* Contact Details (original, unchanged) */}
        <div className="order-2 lg:order-1 bg-gray-50 rounded-xl p-5 border border-gray-100">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Contact Details
          </h2>

          <div className="space-y-3 text-sm">
            <p className="flex justify-start items-start sm:items-center gap-2 text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="currentColor"
              >
                <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" />
              </svg>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="currentColor"
              >
                <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
              </svg>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="currentColor"
              >
                <path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" />
              </svg>
              <span>
                <strong>Address:</strong> Melaghat Road, Jankaiya, Khatima -
                262308, U.S. Nagar (Uttarakhand)
              </span>
            </p>

            <p className="flex justify-start items-start sm:items-center gap-2 text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="currentColor"
              >
                <path d="M160-200v-440 440-15 15Zm0 80q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h160v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640v171q-18-13-38-22.5T800-508v-132H160v440h283q3 21 9 41t15 39H160Zm240-600h160v-80H400v80ZM720-40q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40Zm20-208v-112h-40v128l86 86 28-28-74-74Z" />
              </svg>
              <strong>Working Hours:</strong> Mon - Sun, 9:00 AM to 10:00 PM
              <span></span>
            </p>
          </div>
        </div>
      </div>

      {/* Google Map - Niche, full width */}
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
  );
}

export default Contact;
