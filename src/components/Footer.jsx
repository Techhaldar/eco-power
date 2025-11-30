import { Link } from "react-router-dom";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-gray-300 mt-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        {/* Top section: Brand + Tagline */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-b border-gray-800 pb-6">
          <div className="text-center sm:text-left">
            <h2 className="text-2xl font-bold tracking-wide text-white">
              ECO POWER SOLAR SOLUTIONS
            </h2>
            <p className="text-sm text-gray-400 mt-1">
              Clean energy for every home. Save more, live better.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center sm:justify-end gap-3">
            <a
              href="https://www.facebook.com/profile.php?id=61582773907302"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 p-1 rounded-full border border-gray-700 flex items-center justify-center hover:border-blue-500 hover:text-blue-400 transition"
              aria-label="Facebook"
            >
              {/* Facebook Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
                fill="currentColor"
              >
                <path d="M240 363.3L240 576L356 576L356 363.3L442.5 363.3L460.5 265.5L356 265.5L356 230.9C356 179.2 376.3 159.4 428.7 159.4C445 159.4 458.1 159.8 465.7 160.6L465.7 71.9C451.4 68 416.4 64 396.2 64C289.3 64 240 114.5 240 223.4L240 265.5L174 265.5L174 363.3L240 363.3z" />
              </svg>
            </a>

            <a
              href="https://www.instagram.com/ecopowersolarsolutions/"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 p-1 rounded-full border border-gray-700 flex items-center justify-center hover:border-pink-500 hover:text-pink-400 transition"
              aria-label="Instagram"
            >
              {/* Instagram Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
                fill="currentColor"
              >
                <path d="M320.3 205C256.8 204.8 205.2 256.2 205 319.7C204.8 383.2 256.2 434.8 319.7 435C383.2 435.2 434.8 383.8 435 320.3C435.2 256.8 383.8 205.2 320.3 205zM319.7 245.4C360.9 245.2 394.4 278.5 394.6 319.7C394.8 360.9 361.5 394.4 320.3 394.6C279.1 394.8 245.6 361.5 245.4 320.3C245.2 279.1 278.5 245.6 319.7 245.4zM413.1 200.3C413.1 185.5 425.1 173.5 439.9 173.5C454.7 173.5 466.7 185.5 466.7 200.3C466.7 215.1 454.7 227.1 439.9 227.1C425.1 227.1 413.1 215.1 413.1 200.3zM542.8 227.5C541.1 191.6 532.9 159.8 506.6 133.6C480.4 107.4 448.6 99.2 412.7 97.4C375.7 95.3 264.8 95.3 227.8 97.4C192 99.1 160.2 107.3 133.9 133.5C107.6 159.7 99.5 191.5 97.7 227.4C95.6 264.4 95.6 375.3 97.7 412.3C99.4 448.2 107.6 480 133.9 506.2C160.2 532.4 191.9 540.6 227.8 542.4C264.8 544.5 375.7 544.5 412.7 542.4C448.6 540.7 480.4 532.5 506.6 506.2C532.8 480 541 448.2 542.8 412.3C544.9 375.3 544.9 264.5 542.8 227.5zM495 452C487.2 471.6 472.1 486.7 452.4 494.6C422.9 506.3 352.9 503.6 320.3 503.6C287.7 503.6 217.6 506.2 188.2 494.6C168.6 486.8 153.5 471.7 145.6 452C133.9 422.5 136.6 352.5 136.6 319.9C136.6 287.3 134 217.2 145.6 187.8C153.4 168.2 168.5 153.1 188.2 145.2C217.7 133.5 287.7 136.2 320.3 136.2C352.9 136.2 423 133.6 452.4 145.2C472 153 487.1 168.1 495 187.8C506.7 217.3 504 287.3 504 319.9C504 352.5 506.7 422.6 495 452z" />
              </svg>
            </a>

            <a
              href="https://wa.me/919068202706?text=Hi%20ECO%20POWER%20SOLAR%20SOLUTIONS%2C%20I%20want%20to%20book%20a%20solar%20installation.%20Please%20share%20details."
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 p-1 rounded-full border border-gray-700 flex items-center justify-center hover:border-green-500 hover:text-green-400 transition"
              aria-label="WhatsApp"
            >
              {/* WhatsApp Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
                fill="currentColor"
              >
                <path d="M476.9 161.1C435 119.1 379.2 96 319.9 96C197.5 96 97.9 195.6 97.9 318C97.9 357.1 108.1 395.3 127.5 429L96 544L213.7 513.1C246.1 530.8 282.6 540.1 319.8 540.1L319.9 540.1C442.2 540.1 544 440.5 544 318.1C544 258.8 518.8 203.1 476.9 161.1zM319.9 502.7C286.7 502.7 254.2 493.8 225.9 477L219.2 473L149.4 491.3L168 423.2L163.6 416.2C145.1 386.8 135.4 352.9 135.4 318C135.4 216.3 218.2 133.5 320 133.5C369.3 133.5 415.6 152.7 450.4 187.6C485.2 222.5 506.6 268.8 506.5 318.1C506.5 419.9 421.6 502.7 319.9 502.7zM421.1 364.5C415.6 361.7 388.3 348.3 383.2 346.5C378.1 344.6 374.4 343.7 370.7 349.3C367 354.9 356.4 367.3 353.1 371.1C349.9 374.8 346.6 375.3 341.1 372.5C308.5 356.2 287.1 343.4 265.6 306.5C259.9 296.7 271.3 297.4 281.9 276.2C283.7 272.5 282.8 269.3 281.4 266.5C280 263.7 268.9 236.4 264.3 225.3C259.8 214.5 255.2 216 251.8 215.8C248.6 215.6 244.9 215.6 241.2 215.6C237.5 215.6 231.5 217 226.4 222.5C221.3 228.1 207 241.5 207 268.8C207 296.1 226.9 322.5 229.6 326.2C232.4 329.9 268.7 385.9 324.4 410C359.6 425.2 373.4 426.5 391 423.9C401.7 422.3 423.8 410.5 428.4 397.5C433 384.5 433 373.4 431.6 371.1C430.3 368.6 426.6 367.2 421.1 364.5z" />
              </svg>
            </a>

            <a
              href="https://www.youtube.com/@Ecopowersolarsolutions "
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 p-1 rounded-full border border-gray-700 flex items-center justify-center hover:border-red-500 hover:text-red-400 transition"
              aria-label="YouTube"
            >
              {/* YouTube Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
                fill="currentColor"
              >
                <path d="M581.7 188.1C575.5 164.4 556.9 145.8 533.4 139.5C490.9 128 320.1 128 320.1 128C320.1 128 149.3 128 106.7 139.5C83.2 145.8 64.7 164.4 58.4 188.1C47 231 47 320.4 47 320.4C47 320.4 47 409.8 58.4 452.7C64.7 476.3 83.2 494.2 106.7 500.5C149.3 512 320.1 512 320.1 512C320.1 512 490.9 512 533.5 500.5C557 494.2 575.5 476.3 581.8 452.7C593.2 409.8 593.2 320.4 593.2 320.4C593.2 320.4 593.2 231 581.8 188.1zM264.2 401.6L264.2 239.2L406.9 320.4L264.2 401.6z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Middle section: Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          {/* Contact */}
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-white uppercase tracking-wide">
              Contact
            </h3>

            <p className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                viewBox="0 -960 960 960"
                width="16"
                fill="#e3e3e3"
              >
                <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
              </svg>
              <a
                href="mailto:ratinhaldar123@gmail.com"
                className="hover:text-green-400 transition"
              >
                ratinhaldar123@gmail.com
              </a>
            </p>

            <p className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                viewBox="0 -960 960 960"
                width="16"
                fill="#e3e3e3"
              >
                <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" />
              </svg>
              <a
                href="tel:9068202706"
                className="hover:text-green-400 transition"
              >
                9068202706
              </a>
            </p>

            <p className="text-gray-400">
              Address: Melaghat Road, Jankaiya – Khatima, U.S. Nagar
              (Uttarakhand)
            </p>
          </div>

          {/* Explore More */}
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-white uppercase tracking-wide">
              Explore More
            </h3>
            <ul className="space-y-1">
              <li>
                <Link to="/" className="hover:text-green-400 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-green-400 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-green-400 transition"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="hover:text-green-400 transition"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link to="/scheme" className="hover:text-green-400 transition">
                  Govt. Scheme
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-green-400 transition">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-green-400 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Other Links / Info */}
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-white uppercase tracking-wide">
              Other Links
            </h3>
            <ul className="space-y-1">
              <li>
                <a href="#" className="hover:text-green-400 transition">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition">
                  Refund & Cancellation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition">
                  Installation & Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition">
                  Careers
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <p className="text-center sm:text-left">
            © {year} ECO POWER SOLAR SOLUTIONS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
