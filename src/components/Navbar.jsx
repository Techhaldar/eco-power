import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <nav className="bg-green-700 text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Link to="/" className="hover:text-yellow-300 transition-colors">
            <img
              src="/logo.webp"
              alt="logo"
              className="h-10 w-10 rounded-full"
            />
          </Link>
          <h1 className="font-extrabold text-xl tracking-wide">
            ECO POWER SOLAR
          </h1>
        </div>

        <div className="hidden lg:flex items-center space-x-8 font-medium">
          <Link to="/" className="hover:text-yellow-300">
            Home
          </Link>
          <Link to="/about" className="hover:text-yellow-300">
            About
          </Link>
          <Link to="/services" className="hover:text-yellow-300">
            Services
          </Link>
          <Link to="/products" className="hover:text-yellow-300">
            Products
          </Link>
          <Link to="/scheme" className="hover:text-yellow-300">
            Scheme
          </Link>
          <Link to="/gallery" className="hover:text-yellow-300">
            Gallery
          </Link>
          <Link
            to="/contact"
            className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold"
          >
            Contact
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(true)}
          className="lg:hidden focus:outline-none"
        >
          <Menu size={28} />
        </button>
      </div>

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
        />
      )}

      <div
        className={`fixed top-0 left-0 h-full w-[80%] bg-green-800 text-white px-4 py-6 transform transition-transform duration-300 z-50 lg:hidden flex flex-col
  ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex items-center justify-between border-b border-white/20 pb-3 mb-4">
          <div className="shrink-0 flex items-center gap-3">
            <Link to="/" className="hover:text-yellow-300 transition-colors">
              <img
                src="/logo.webp"
                alt="logo"
                className=" h-8 w-8 rounded-full border border-white/30"
              />
            </Link>
            <h1 className="font-extrabold text-sm tracking-wide">
              ECO POWER SOLAR
            </h1>
          </div>

          <button
            onClick={() => setIsOpen(false)}
            className="p-1 rounded-full hover:bg-white/20 transition"
          >
            <X size={20} />
          </button>
        </div>

        <div className="space-y-4">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="block hover:text-yellow-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="block hover:text-yellow-300"
          >
            About
          </Link>
          <Link
            to="/services"
            onClick={() => setIsOpen(false)}
            className="block hover:text-yellow-300"
          >
            Services
          </Link>
          <Link
            to="/products"
            onClick={() => setIsOpen(false)}
            className="block hover:text-yellow-300"
          >
            Products
          </Link>
          <Link
            to="/scheme"
            onClick={() => setIsOpen(false)}
            className="block hover:text-yellow-300"
          >
            Scheme
          </Link>
          <Link
            to="/gallery"
            onClick={() => setIsOpen(false)}
            className="block hover:text-yellow-300"
          >
            Gallery
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
