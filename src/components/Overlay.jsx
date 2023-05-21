import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";

const Section = (props) => {
  return (
    <section
      className={`h-screen flex flex-col justify-center p-10 ${
        props.right ? "items-end" : "items-start"
      }`}
    >
      <div className="w-1/2 flex items-center justify-center">
        <div className="max-w-sm w-full">
          <div
            className="bg-white bg-opacity-25 backdrop-filter backdrop-blur-lg rounded-lg px-8 py-12"
            style={{
              opacity: props.opacity,
              background: "rgba(255, 255, 255, 0.5)",
              backdropFilter: "blur(10px)",
            }}
          >
            {props.children}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Overlay = () => {
  const scroll = useScroll();
  const [opacityFirstSection, setOpacityFirstSection] = useState(1);
  const [opacitySecondSection, setOpacitySecondSection] = useState(1);
  const [opacityLastSection, setOpacityLastSection] = useState(1);

  useFrame(() => {
    setOpacityFirstSection(1 - scroll.range(0, 1 / 3));
    setOpacitySecondSection(scroll.curve(1 / 3, 1 / 3));
    setOpacityLastSection(scroll.range(2 / 3, 1 / 3));
  });

  return (
    <Scroll html>
      <div className="w-screen">
        <Section opacity={opacityFirstSection}>
          <h1 className="font-semibold font-serif text-2xl text-gray-900">
            Hello, I'm Erizta
          </h1>
          <p className="text-gray-500 text-lg">Welcome to my page</p>
          <p className="mt-6 text-lg font-medium">I know:</p>
          <ul className="mt-2 leading-7 list-disc list-inside">
            <li className="text-lg">🧑‍💻 How to code</li>
            <li className="text-lg">🧑‍🏫 How to learn</li>
            <li className="text-lg">📦 How to deliver</li>
          </ul>
          <p className="animate-bounce mt-6 text-2xl">&#8595;</p>
        </Section>
        <Section right opacity={opacitySecondSection}>
          <h1 className="font-semibold font-serif text-2xl text-gray-900">
            Here are my skillsets 🔥
          </h1>
          <p className="text-gray-500 text-lg">~</p>
          <p className="mt-6 text-lg font-medium">
            <b>Frontend 🚀</b>
          </p>
          <ul className="mt-2 leading-7 list-disc list-inside">
            <li className="text-lg">ReactJS</li>
            <li className="text-lg">NextJS</li>
            <li className="text-lg">SvelteJS</li>
            <li className="text-lg">Tailwind</li>
          </ul>
          <p className="mt-6 text-lg font-medium">
            <b>Backend 🔬</b>
          </p>
          <ul className="mt-2 leading-7 list-disc list-inside">
            <li className="text-lg">NodeJS</li>
            <li className="text-lg">mySQL</li>
          </ul>
          <p className="animate-bounce mt-6 text-2xl">&#8595;</p>
        </Section>
        <Section opacity={opacityLastSection}>
          <h1 className="font-semibold font-serif text-2xl">
            🤙 Call me maybe?
          </h1>
          <p className="text-gray-500">Reach me at: </p>
          <p className="mt-6 p-3 bg-slate-200 rounded-lg">
            📞 <a href="tel:(+62) 85727434715">(+62) 85-727-434-715</a>
          </p>
        </Section>
      </div>
    </Scroll>
  );
};
