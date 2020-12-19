import "../styles/globals.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Application({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);
  return <Component {...pageProps} />;
}

export function reportWebVitals(metric) {
  switch (metric.name) {
    case "FCP":
      break;
    case "LCP":
      break;
    case "CLS":
      break;
    case "FID":
      break;
    case "TTFB":
      break;
    case "Next.js-hydration":
      break;
    case "Next.js-route-change-to-render":
      break;
    case "Next.js-render":
      break;
    default:
      break;
  }
}
