import banner from "../assets/images/banner.jpg";

function Hero() {
  return (
    <div
      className="h-[70vh] bg-cover bg-center relative flex flex-col justify-center items-center text-white text-center"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative p-6">
        <h1 className="text-4xl md:text-5xl font-bold">
          Switch to Solar. Save Energy. Save Money.
        </h1>

        <p className="mt-3 text-lg">
          PM Surya Ghar Muft Bijli Yojana ke sath 30 varsh tak free electricity!
        </p>

        <a
          href="/contact"
          className="mt-5 inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-lg"
        >
          Get Free Quote
        </a>
      </div>
    </div>
  );
}

export default Hero;
