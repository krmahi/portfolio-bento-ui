import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import Home from "./Pages/Home";

gsap.registerPlugin(useGSAP, ScrollToPlugin);

function App() {
  useGSAP(() => {
    gsap.set("body", { autoAlpha: 0 });
    gsap.to("body", { autoAlpha: 1, duration: 2, ease: "power2" });
  });
  return <Home />;
}

export default App;
