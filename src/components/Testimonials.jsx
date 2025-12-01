// src/components/Testimonials.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Swiper styles import karna zaruri hai
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    name: "Mohan Verma",
    location: "Bareilly, Uttar Pradesh",
    role: "Homeowner",
    message:
      "Mera electricity bill lagbhag 6,000₹ se 1,500₹ ke aas-paas aa gaya hai. Installation time par hua aur team ne sab kuch clearly explain kiya.",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya Sharma",
    location: "Rudrapur, Uttarakhand",
    role: "Small Business Owner",
    message:
      "Shop ke liye on-grid solar lagwaya. Power cut me bhi inverter backup mil jata hai aur monthly saving bhi achhi ho rahi hai.",
    rating: 4,
  },
  {
    id: 3,
    name: "Mahesh Gupta",
    location: "Haldwani, Uttarakhand",
    role: "Factory Owner",
    message:
      "Industrial load ke liye unhone proper survey karke system design kiya. ROI clear tha, isliye decision lena easy ho gaya.",
    rating: 5,
  },
  {
    id: 4,
    name: "Rahul",
    location: "Haldwani, Uttarakhand",
    role: "Factory Owner",
    message:
      "Industrial load ke liye unhone proper survey karke system design kiya. ROI clear tha, isliye decision lena easy ho gaya.",
    rating: 5,
  },
];

const StarRating = ({ count }) => {
  return (
    <div className="flex items-center gap-1 text-yellow-400 text-sm">
      {Array.from({ length: count }).map((_, idx) => (
        <span key={idx}>★</span>
      ))}
      {Array.from({ length: 5 - count }).map((_, idx) => (
        <span key={idx} className="text-slate-600">
          ★
        </span>
      ))}
    </div>
  );
};

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="py-16 bg-slate-950 text-white px-4 sm:px-6 lg:px-12"
    >
      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center mb-10">
        <p className="text-emerald-400 text-xs font-semibold tracking-[0.25em] uppercase">
          Testimonials
        </p>
        <h2 className="text-3xl sm:text-4xl font-semibold mt-2">
          Our happy <span className="text-emerald-400">solar customers</span>
        </h2>
        <p className="text-slate-400 mt-3 text-sm sm:text-base">
          Real stories from homeowners and businesses who switched to solar and
          are now saving every month on their electricity bills.
        </p>
      </div>

      {/* Swiper Slider */}
      <div className="max-w-5xl mx-auto">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id} className="h-auto flex">
              <article
                className="relative h-full flex flex-col bg-slate-900/60 border border-slate-800 rounded-2xl p-6 gap-4 hover:border-emerald-500/60 hover:shadow-xl hover:shadow-emerald-500/10 transition group min-h-[230px] sm:min-h-[250px] lg:min-h-[280px]
"
              >
                {/* Quote icon */}
                <div className="text-3xl text-emerald-400/70 group-hover:text-emerald-300">
                  ❝
                </div>

                {/* Message */}
                <p className="text-sm text-slate-200 leading-relaxed">
                  {item.message}
                </p>

                {/* Bottom info */}
                <div className="mt-2 flex items-center justify-between gap-3">
                  <div>
                    <h3 className="text-sm font-semibold text-white">
                      {item.name}
                    </h3>
                    <p className="text-xs text-slate-400">
                      {item.role} • {item.location}
                    </p>
                  </div>

                  <StarRating count={item.rating} />
                </div>

                {/* Glow overlay */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-emerald-500/10 via-transparent to-sky-500/5" />
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
