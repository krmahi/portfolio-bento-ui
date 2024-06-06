import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import Cursor from "./components/cursor";
import Home from "./Pages/Home";
import Loader from "./components/Loader";

gsap.registerPlugin(useGSAP, ScrollToPlugin);

function App() {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  });

  useGSAP(() => {
    gsap.set("body", { opacity: 0 });
    gsap.to("body", { opacity: 1, duration: 1, ease: "power2" });
  });

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <Cursor isHovered={false} />
      <Home />
    </>
  );
}

export default App;
