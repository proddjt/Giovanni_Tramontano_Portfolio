import { useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { useGSAP } from '@gsap/react';
import hexToRgba from 'hex-to-rgba';
import rgbHex from 'rgb-hex';

import Landing from "./pages/Landing"
import Aurora from "./components/reactbits-components/Aurora"
import Navbar from "./components/Navbar"
import LangContext from "./components/context/LangContext"
import About from "./pages/About"
import TopButton from "./components/TopButton"
import ProgressBar from "./components/ProgressBar"
import Projects from './pages/Projects';

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

function App() {
  const main = useRef();
  const smoother = useRef();
  const progressBarRef = useRef();
  const [lang, setLang] = useState("it");
  const colorsRef = useRef(["#020024", "#090979", "#00D4FF"]);
  const [colors, setColors] = useState(colorsRef.current);

  const transitionColors = (newColors) => {
    const prevColors = [...colorsRef.current];
    const interpolated = { t: 0 };
    const rgbaFromHex = (hex) => hexToRgba(hex, 1);
    const toRGBAArray = (hexColors) => hexColors.map((hex) => rgbaFromHex(hex));

    const fromColorsRGBA = toRGBAArray(prevColors);
    const toColorsRGBA = toRGBAArray(newColors);

    gsap.to(interpolated, {
      t: 1,
      duration: 0.8,
      ease: "power2.inOut",
      onUpdate: () => {
        const blendedRGBA = fromColorsRGBA.map((from, i) =>
          gsap.utils.interpolate(from, toColorsRGBA[i], interpolated.t)
        );

        const blendedHex = blendedRGBA.map((rgbaStr) => {
          const parts = rgbaStr.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
          if (!parts) return "#000000";
          const [_, r, g, b] = parts;
          return `#${rgbHex(+r, +g, +b)}`;
        });

        colorsRef.current = blendedHex;
      }
    });
  };

  useGSAP(() => {
      smoother.current = ScrollSmoother.create({
        smooth: 2,
        effects: true,
      });

      const sections = [
        { id: "#home", colors: ["#020024", "#090979", "#00D4FF"] },
        { id: "#about", colors: ["#e5af06", "#f5d1bd", "#f76ed2"] },
        { id: "#projects", colors: ["#14e81e", "#00ea8d", "#b53dff"] },
      ];

      sections.forEach(({ id, colors: newColors }) => {
        ScrollTrigger.create({
          trigger: id,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          onUpdate: (self) => {
            gsap.to(progressBarRef.current, {
              scaleY: self.progress,
              duration: 0.1,
              ease: "none",
            });
          },
          onEnter: () => transitionColors(newColors),
          onLeave: () => {
            gsap.to(progressBarRef.current, { scaleY: 0, duration: 0.2 });
          },
          onEnterBack: () => {
            gsap.to(progressBarRef.current, { scaleY: 0.01, duration: 0 });
            transitionColors(newColors);
          },
          onLeaveBack: () => {
            const homeColors = sections[0].colors;
            transitionColors(homeColors);
          },
        });
      });
    }, { scope: main }
  );


  return (
    <LangContext.Provider value={{lang, setLang}}>
    <main className="background overflow-x-hidden" id="smooth-wrapper" ref={main}>
      <div className="fixed z-0">
        <Aurora
          colorsRef={colorsRef}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>
      <Navbar />
      <ProgressBar ref={progressBarRef} />
      <div className="relative z-1" id="smooth-content">
        <Landing data-speed="1"/>
        <About data-speed="2"/>
        <Projects data-speed="2"/>
      </div>
      <TopButton />
    </main>
    </LangContext.Provider>
  )
}

export default App
