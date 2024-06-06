import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import Cursor from "./components/cursor";
import Home from "./Pages/Home";

gsap.registerPlugin(useGSAP, ScrollToPlugin);

function App() {
  useGSAP(() => {
    gsap.set("body", { opacity: 0 });
    gsap.to("body", { opacity: 1, duration: 3, ease: "power2" });
  });
  return (
    <>
      <Cursor isHovered={false} />
      <Home />
    </>
  );
}

export default App;
