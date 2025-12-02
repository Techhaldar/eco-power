// src/components/MobileOfferBar.jsx

const MobileOfferBar = () => {
  return (
    <div className="md:hidden bg-black text-white text-sm py-2 overflow-hidden">
      <div className="flex whitespace-nowrap w-max animate-marquee will-change-transform">
        <span className="mx-6">
          ☀️ Rooftop Solar Lagao, Bijli Bill 70% Tak Kamao! ⚡ Limited-Time
          Offer —{" "}
          <a
            href="tel:9068202706"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-semibold shadow-lg hover:shadow-xl transition shadow-green-500/40"
          >
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-green-600 animate-bounce text-base">
              📞
            </span>
            <span>
              Call Now <strong>9068202706</strong>
            </span>
          </a>{" "}
          & Go Solar!
        </span>
        <span className="mx-6">
          ☀️ Rooftop Solar Lagao, Bijli Bill 70% Tak Kamao! ⚡ Limited-Time
          Offer —{" "}
          <a
            href="tel:9068202706"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-semibold shadow-lg hover:shadow-xl transition shadow-green-500/40"
          >
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-green-600 animate-bounce text-base">
              📞
            </span>
            <span>
              Call Now <strong>9068202706</strong>
            </span>
          </a>{" "}
          & Go Solar!
        </span>
      </div>
    </div>
  );
};

export default MobileOfferBar;
