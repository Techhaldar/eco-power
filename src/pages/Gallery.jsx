import { useEffect } from "react";
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.css";

import gallery1 from "../assets/images/gallery1.webp";
import gallery2 from "../assets/images/gallery2.webp";
import gallery3 from "../assets/images/gallery3.webp";
import gallery4 from "../assets/images/gallery4.webp";
import gallery5 from "../assets/images/gallery5.webp";
import gallery6 from "../assets/images/solar-streat-light.jpg";
import gallery7 from "../assets/images/gallery7.webp";
import gallery8 from "../assets/images/gallery8.webp";

const images = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery8,
];

function Gallery() {
  // Initialize lightbox once
  useEffect(() => {
    GLightbox({
      selector: ".glightbox",
      touchNavigation: true,
      loop: true,
      zoomable: true,
      draggable: true,
      autoplayVideos: false,
    });
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 py-4 text-center">
      <h1 className="text-3xl font-bold text-blue-700 mb-5">
        Our Solar Projects
      </h1>

      <p className="text-gray-600 mb-10">
        Here are some glimpses of our recent solar panel installations under the
        PM Surya Ghar Muft Bijli Yojana.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((img, i) => (
          <a
            key={i}
            href={img}
            className="glightbox"
            data-gallery="solar-gallery"
          >
            <img
              src={img}
              alt={`Project ${i + 1}`}
              className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300 object-cover max-h-[220px] w-full h-full"
            />
          </a>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
