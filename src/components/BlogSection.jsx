// src/components/BlogSection.jsx

const blogPosts = [
  {
    id: 1,
    title: "Rooftop Solar se Bijli Bill Kaise 70% Tak Kam Ho Sakta Hai?",
    excerpt:
      "On-grid, off-grid aur hybrid system ke through aap kaise smart tarike se solar choose kar sakte hain, simple language me samjhein.",
    tag: "Savings",
    readTime: "4 min read",
    date: "Nov 26, 2025",
  },
  {
    id: 2,
    title: "PM Surya Ghar Yojana: Kaun Eligible Hai & Kitni Subsidy Milegi?",
    excerpt:
      "Government subsidy, eligibility criteria, required documents aur apply karne ka step-by-step process ka short overview.",
    tag: "Govt Scheme",
    readTime: "5 min read",
    date: "Nov 18, 2025",
  },
  {
    id: 3,
    title: "On-Grid vs Off-Grid vs Hybrid: Aapke Ghar Ke Liye Kya Best Hai?",
    excerpt:
      "Power cut, load requirement aur budget ke hisaab se kaunsa solar setup choose karein – expert comparison.",
    tag: "Guide",
    readTime: "6 min read",
    date: "Nov 10, 2025",
  },
];

const BlogSection = () => {
  return (
    <section
      id="blogs"
      className="bg-slate-950 text-white py-16 px-4 sm:px-6 lg:px-12"
    >
      {/* Heading */}
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
        <div>
          <p className="text-emerald-400 text-xs font-semibold uppercase tracking-[0.2em]">
            BLOGS & INSIGHTS
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-2">
            Solar Power ke baare me
            <span className="text-emerald-400"> sahi knowledge</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-xl">
            Simple language me likhe huye blogs jisse aap investment, subsidy
            aur system selection ka sahi decision le pao.
          </p>
        </div>

        <button className="inline-flex items-center justify-center text-sm font-medium border border-emerald-500/70 text-emerald-400 px-4 py-2 rounded-full hover:bg-emerald-500 hover:text-slate-950 transition">
          View all blogs
          <span className="ml-2 text-lg">↗</span>
        </button>
      </div>

      {/* Blog Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <article
            key={post.id}
            className="group relative bg-slate-900/70 border border-slate-800 rounded-2xl p-5 flex flex-col h-full hover:border-emerald-500/70 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-500/10 transition"
          >
            {/* Tag & Date */}
            <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
              <span className="inline-flex items-center px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-300 font-medium">
                {post.tag}
              </span>
              <span>{post.date}</span>
            </div>

            {/* Title */}
            <h3 className="text-base sm:text-lg font-semibold text-slate-50 group-hover:text-emerald-300 line-clamp-2">
              {post.title}
            </h3>

            {/* Excerpt */}
            <p className="mt-3 text-sm text-slate-300 line-clamp-3">
              {post.excerpt}
            </p>

            {/* Footer */}
            <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
              <span>{post.readTime}</span>
              <button className="inline-flex items-center text-emerald-400 group-hover:text-emerald-300 font-medium">
                Read more
                <span className="ml-1 transition-transform group-hover:translate-x-1">
                  →
                </span>
              </button>
            </div>

            {/* Gradient Hover Glow */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-emerald-500/10 via-transparent to-sky-500/5" />
          </article>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
