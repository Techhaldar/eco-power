// src/components/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // jab bhi route change hoga, top pe scroll karo
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // "smooth" bhi kar sakte ho
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
