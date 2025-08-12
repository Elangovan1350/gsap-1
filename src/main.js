import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";
import { gsap } from "gsap";

document.querySelector("#app").innerHTML = `
  <div>
    <a class="logo" href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
    <h1 class="">G</h1>
  </div>
`;

setupCounter(document.querySelector("#counter"));

gsap.to(".logo", {
  rotation: 360,
  duration: 2,
  repeat: 2,
  stagger: 1,
  ease: "linear",
  yoyo: true,
  onComplete: () => {
    console.log("Animation complete!");
    gsap.to("h1", {
      color: "red",
      rotate: 360,
      x: 100,
      duration: 1,
      yoyo: true,
      repeat: 1,
      ease: "power1.inOut",
    });
  },
});
