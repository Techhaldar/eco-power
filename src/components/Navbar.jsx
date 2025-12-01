import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-green-700 text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
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

        <div className="hidden md:flex items-center space-x-8 font-medium">
          <Link to="/" className="hover:text-yellow-300 transition-colors">
            Home
          </Link>
          <Link to="/about" className="hover:text-yellow-300 transition-colors">
            About
          </Link>
          <Link
            to="/services"
            className="hover:text-yellow-300 transition-colors"
          >
            Services
          </Link>
          <Link
            to="/products"
            className="hover:text-yellow-300 transition-colors"
          >
            Products
          </Link>
          <Link
            to="/scheme"
            className="hover:text-yellow-300 transition-colors"
          >
            Scheme
          </Link>
          <Link
            to="/gallery"
            className="hover:text-yellow-300 transition-colors"
          >
            Gallery
          </Link>
          <Link
            to="/contact"
            className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition"
          >
            Contact
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-green-800 text-white px-6 pb-4 space-y-3">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="block hover:text-yellow-300 transition-colors pt-6"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="block hover:text-yellow-300 transition-colors"
          >
            About
          </Link>
          <Link
            to="/services"
            onClick={() => setIsOpen(false)}
            className="block hover:text-yellow-300 transition-colors"
          >
            Services
          </Link>
          <Link
            to="/products"
            onClick={() => setIsOpen(false)}
            className="block hover:text-yellow-300 transition-colors"
          >
            Products
          </Link>
          <Link
            to="/scheme"
            onClick={() => setIsOpen(false)}
            className="block hover:text-yellow-300 transition-colors"
          >
            Scheme
          </Link>
          <Link
            to="/gallery"
            onClick={() => setIsOpen(false)}
            className="block hover:text-yellow-300 transition-colors"
          >
            Gallery
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
