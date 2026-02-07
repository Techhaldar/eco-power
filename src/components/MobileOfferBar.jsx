import { PhoneCall } from "lucide-react";

const MobileOfferBar = () => {
  return (
    <div className="md:hidden bg-black text-white text-sm py-1 overflow-hidden">
      <div className="flex items-center justify-center whitespace-nowrap w-max animate-marquee will-change-transform">
        <span className="mx-6 flex items-center">
          ☀️ Rooftop Solar Lagao, Bijli Bill 70% Tak Kamao! ⚡ Limited-Time
          Offer{" "}
          <a
            href="tel:9068202706"
            className="mx-2 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-semibold shadow-lg hover:shadow-xl transition shadow-green-500/40"
          >
            <span className="inline-flex h-5 w-5 items-center justify-center animate-bounce">
              <PhoneCall size={14} />
            </span>
            <span>
              Call Now <strong>9068202706</strong>
            </span>
          </a>{" "}
          & Go Solar!
        </span>

        <span className="mx-6 flex items-center">
          ☀️ Rooftop Solar Lagao, Bijli Bill 70% Tak Kamao! ⚡ Limited-Time
          Offer{" "}
          <a
            href="tel:9068202706"
            className="mx-2 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-semibold shadow-lg hover:shadow-xl transition shadow-green-500/40"
          >
            <span className="inline-flex h-5 w-5 items-center justify-center animate-bounce">
              <PhoneCall size={14} />
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
