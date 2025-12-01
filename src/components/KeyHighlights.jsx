// src/components/KeyHighlights.jsx

const highlights = [
  {
    id: 1,
    title: "Govt Approved Installer",
    desc: "Authorized & certified for residential and commercial solar installations.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="40px"
        viewBox="0 -960 960 960"
        width="40px"
        fill="#e3e3e3"
      >
        <path d="M200-280v-280h80v280h-80Zm240 0v-280h80v280h-80ZM80-640v-80l400-200 400 200v80H80Zm179-80h442L480-830 259-720ZM80-120v-80h482q2 21 5 40.5t9 39.5H80Zm600-310v-130h80v90l-80 40ZM800 0q-69-17-114.5-79.5T640-218v-102l160-80 160 80v102q0 76-45.5 138.5T800 0Zm-29-120 139-138-42-42-97 95-39-39-42 43 81 81ZM259-720h442-442Z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "25 Years Panel Warranty",
    desc: "Long-term performance guarantee with top-tier solar modules.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="40px"
        viewBox="0 -960 960 960"
        width="40px"
        fill="#e3e3e3"
      >
        <path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Zm280 240q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-160 0q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm320 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "0% Maintenance Cost",
    desc: "Rooftop solar systems that run smoothly with minimal upkeep.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="40px"
        viewBox="0 -960 960 960"
        width="40px"
        fill="#e3e3e3"
      >
        <path d="M120-160v-80h110l-16-14q-52-46-73-105t-21-119q0-111 66.5-197.5T360-790v84q-72 26-116 88.5T200-478q0 45 17 87.5t53 78.5l10 10v-98h80v240H120Zm717-360h-81q-5-35-21.5-67T690-648l-10-10v98h-80v-240h240v80H730l16 14q41 42 63 89t28 97ZM680-40l-12-60q-12-5-22.5-10.5T624-124l-58 18-40-68 46-40q-2-14-2-26t2-26l-46-40 40-68 58 18q11-8 21.5-13.5T668-380l12-60h80l12 60q12 5 22.5 11t21.5 15l58-20 40 70-46 40q2 12 2 25t-2 25l46 40-40 68-58-18q-11 8-21.5 13.5T772-100l-12 60h-80Zm40-120q33 0 56.5-23.5T800-240q0-33-23.5-56.5T720-320q-33 0-56.5 23.5T640-240q0 33 23.5 56.5T720-160Z" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Up to 70% Savings",
    desc: "Massive reduction in monthly electricity bills with smart solar usage.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="40px"
        viewBox="0 -960 960 960"
        width="40px"
        fill="#e3e3e3"
      >
        <path d="M336-120q-91 0-153.5-62.5T120-336q0-38 13-74t37-65l142-171-97-194h530l-97 194 142 171q24 29 37 65t13 74q0 91-63 153.5T624-120H336Zm144-200q-33 0-56.5-23.5T400-400q0-33 23.5-56.5T480-480q33 0 56.5 23.5T560-400q0 33-23.5 56.5T480-320Zm-95-360h190l40-80H345l40 80Zm-49 480h288q57 0 96.5-39.5T760-336q0-24-8.5-46.5T728-423L581-600H380L232-424q-15 18-23.5 41t-8.5 47q0 57 39.5 96.5T336-200Z" />
      </svg>
    ),
  },
  {
    id: 5,
    title: "Subsidy Support",
    desc: "Complete assistance for claiming Govt subsidy under PM Surya Ghar Yojana.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="40px"
        viewBox="0 -960 960 960"
        width="40px"
        fill="#e3e3e3"
      >
        <path d="M280-280h280v-80H280v80Zm0-160h400v-80H280v80Zm0-160h400v-80H280v80Zm-80 480q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z" />
      </svg>
    ),
  },
  {
    id: 6,
    title: "Fast Installation",
    desc: "Professional installation team with guaranteed on-time delivery.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="40px"
        viewBox="0 -960 960 960"
        width="40px"
        fill="#e3e3e3"
      >
        <path d="m422-232 207-248H469l29-227-185 267h139l-30 208ZM320-80l40-280H160l360-520h80l-40 320h240L400-80h-80Zm151-390Z" />
      </svg>
    ),
  },
];

const KeyHighlights = () => {
  return (
    <section className="py-8 bg-slate-950 text-white px-4 sm:px-6 lg:px-12">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl sm:text-4xl font-semibold mt-2">
          Why Choose{" "}
          <span className="text-emerald-400">Our Solar Solutions?</span>
        </h2>
        <p className="text-slate-400 mt-3 text-sm sm:text-base">
          We help your home and business reduce electricity bills, save money,
          and adopt clean energy solutions.
        </p>
      </div>

      {/* Highlight Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {highlights.map((item) => (
          <div
            key={item.id}
            className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 hover:border-emerald-500/60 hover:shadow-xl hover:shadow-emerald-500/10 transition group"
          >
            <div className="text-4xl mb-4 group-hover:scale-110 transition">
              {item.icon}
            </div>

            <h3 className="text-lg font-semibold text-white group-hover:text-emerald-400 transition">
              {item.title}
            </h3>

            <p className="text-slate-400 text-sm mt-2">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KeyHighlights;
