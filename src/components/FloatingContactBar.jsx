import { useEffect, useState } from "react";
import { Phone, Instagram, Facebook, User } from "lucide-react";

export default function FloatingContactBar() {
  const [hideBar, setHideBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.getElementById("footer");
      if (!footer) return;

      const rect = footer.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Jab footer screen me aane lage
      if (rect.top < windowHeight) {
        setHideBar(true);
      } else {
        setHideBar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`
      fixed bottom-0 left-0 z-50 w-full bg-green-700 shadow-lg transition-all duration-300
      lg:bottom-6 lg:right-0 lg:left-auto lg:w-auto lg:rounded-l-xl
      ${hideBar ? "translate-x-full lg:translate-x-full pointer-events-none" : "opacity-100"}
    `}
    >
      <div
        className="
        flex w-full items-center justify-around
        lg:flex-col lg:divide-y lg:divide-white/40
      "
      >
        {/* Call */}
        <a
          href="tel:9068202706"
          className="flex justify-center p-4 hover:bg-white/10 transition hover:scale-90"
        >
          <Phone className="text-white w-8 h-8" />
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/ecopowersolarsolutions/"
          target="_blank"
          className="flex justify-center p-4 hover:bg-white/10 transition hover:scale-90"
        >
          <Instagram className="text-white w-8 h-8" />
        </a>

        {/* Facebook */}
        <a
          href="https://www.facebook.com/profile.php?id=61582773907302"
          target="_blank"
          rel="noreferrer"
          className="flex justify-center p-4 hover:bg-white/10 transition hover:scale-90"
        >
          <Facebook className="text-white w-8 h-8" />
        </a>

        {/* about */}
        <a
          href="#"
          target="_blank"
          rel="noreferrer"
          className="flex justify-center p-4 hover:bg-white/10 transition hover:scale-90"
        >
          <User className="text-white w-8 h-8" />
        </a>
      </div>
    </div>
  );
}
