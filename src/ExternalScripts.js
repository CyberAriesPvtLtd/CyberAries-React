import { useEffect } from "react";

const ExternalScripts = () => {
  useEffect(() => {
    const load = (src) =>
      new Promise((resolve, reject) => {
        // prevent double-loading
        if (document.querySelector(`script[src="${src}"]`)) {
          resolve();
          return;
        }

        const s = document.createElement("script");
        s.src = src;
        s.async = false; // IMPORTANT: preserve execution order
        s.onload = resolve;
        s.onerror = reject;
        document.body.appendChild(s);
      });

    (async () => {
      try {
        // ORDER MATTERS
        await load("/js/plugins.js");
        await load("/js/designesia.js");
        // await load("/js/custom-marquee.js");
      } catch (e) {
        console.error("External script failed:", e);
      }
    })();

    return () => {
      // optional cleanup (usually NOT needed for theme JS)
    };
  }, []);

  return null;
};

export default ExternalScripts;
