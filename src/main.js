import "./style.css";
// import javascriptLogo from "./javascript.svg";
// import viteLogo from "/vite.svg";
// import { setupCounter } from "./functions.js";

document.querySelector("#app").innerHTML = `
<div class="relative max-w-[1920px] mx-auto min-h-screen text-base sm:text-sm md:text-lg lg:text-xl xl:text-2xl">
   <header class="bg-white shadow-md sticky top-0 z-50">
    <nav class="px-6 h-[10vh] flex justify-between items-center">
      <a href="#home" class="flex items-center">
        <img src="/logo-1.png" alt="TrustedInspectionDiary Logo" class="w-[10%] h-auto mr-[7px]" />
        <div class="text-2xl font-bold text-main">TrustedInspectionDiary</div>
      </a>
      
      <ul class="flex list-none gap-8 nav-links text-xl justify-center items-center">
        <li><a href="#about">About us</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#What You Should Know">FAQs</a></li>
        <li><a href="#Get in Touch">Contact us</a></li>
        <button class="cta-button ">Explore properties</button>
      </ul>   
    </nav>
  </header>

    <!-- Hero Section -->
  <section class="hero-background flex items-center justify-center relative" id="home">
    <div class="hero-overlay"></div>
    <div class="hero-content">
      <h1 class="company-name text-6xl  font-extrabold">Trusted Inspection Diary</h1>
      <p class="tagline ">Independent inspections. Fast reports. Peace of mind.</p>
      <button class="cta-button ">Book an Inspection</button>
    </div>
  </section>

    <!-- About Section -->
  <section class="mt-32 px-14 mx-auto" id="about">
    <div class="mb-20">
      <span class="font-medium uppercase text-main">Who we are</span>
      <h2 class="text-4xl text-heading font-bold uppercase mt-3">
      Australia’s Independent Property Inspectors
      </h2>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <img src="/images/about-us.jpg" alt="About Trusted Inspection Diary" class="w-full h-auto object-cover rounded-lg"/>
      <div class="text-text-1">
        <p class="mb-7">
          We provides independent property inspections across Australia delivering detailed photos and video reports within 24 hours, helping renters, buyers, and investors make informed decisions. Whether you’re interstate, overseas, or simply can’t attend in person, our independent inspections are transparent, trustworthy and reliable giving you peace of mind with your decision.
        </p>
        <p>
          Our experienced inspectors offer thorough, objective assessments of property condition and neighbourhoods. We work in accordance with the current Australian Standards and, because we are independent of any third parties, you can be confident that the property report has been prepared for you. Our services reduce risk and uncertainty. Instead of relying solely on listings or agent descriptions, you get objective, visual evidence and local context before committing.
        </p>

        <button class="cta-button ">Explore services</button>
      </div>
    </div>
    
  </section>

    <!-- Service Section -->
  <section class="mt-32 px-14 mx-auto" id="services">
  <div class="mb-7">
      <span class="font-medium uppercase text-main">What we are about</span>
      <h2 class="text-4xl text-heading font-bold uppercase mt-3">
      Independent Property Reports You Can Rely On
      </h2>
    </div>
  </section>
  

    
    
  </section>
</div>
`;

// setupCounter(document.querySelector("#counter"));
