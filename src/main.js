import "./style.css";
// import javascriptLogo from "./javascript.svg";
// import viteLogo from "/vite.svg";
// import { setupCounter } from "./functions.js";

document.querySelector("#app").innerHTML = `
<div class="max-w-[1920px] mx-auto">
   <header class="bg-white shadow-md sticky top-0 z-50">
    <nav class="px-6 h-[10vh] flex justify-between items-center">
      <div class="flex items-center">
        <img src="/logo-1.png" alt="TrustedInspectionDiary Logo" class="w-[10%] h-auto mr-[7px]" />
        <div class="text-2xl font-bold text-[#4A90E2]">TrustedInspectionDiary</div>
      </div>
      
      <ul class="flex list-none gap-8 nav-links">
        <li><a href="#welcome">Welcome</a></li>
        <li><a href="#">Who we are</a></li>
        <li><a href="#">What we are about</a></li>
        <li><a href="#">What You Should Know</a></li>
        <li><a href="#">Get in Touch</a></li>
      </ul>
    </nav>
  </header>

    <!-- Hero Section -->
  <section class="hero-background flex items-center justify-center relative" id="welcome">
    <div class="hero-overlay"></div>
    <div class="hero-content">
      <h1 class="company-name">Trusted Inspection Diary</h1>
      <p class="tagline">Independent inspections. Fast reports. Peace of mind.</p>
      <button class="cta-button">Book an Inspection</button>
    </div>
  </section>
</div>
`;

// setupCounter(document.querySelector("#counter"));
