import "./style.css";
// import javascriptLogo from "./javascript.svg";
// import viteLogo from "/vite.svg";
// import { setupCounter } from "./functions.js";

document.querySelector("#app").innerHTML = `
<div class="relative max-w-[1920px] mx-auto min-h-screen text-base sm:text-sm md:text-lg lg:text-xl xl:text-2xl">
   <header class="bg-white shadow-md sticky top-0 z-50">
    <nav class="px-6 h-[10vh] flex justify-between items-center">
      <a href="#welcome" class="flex items-center">
        <img src="/logo-1.png" alt="TrustedInspectionDiary Logo" class="w-[10%] h-auto mr-[7px]" />
        <div class="text-2xl font-bold text-main">TrustedInspectionDiary</div>
      </a>
      
      <ul class="flex list-none gap-8 nav-links text-xl justify-center items-center">
        <li><a href="#Who we are">About us</a></li>
        <li><a href="#What we are about">Services</a></li>
        <li><a href="#What You Should Know">FAQs</a></li>
        <li><a href="#Get in Touch">Contact us</a></li>
        <button class="cta-button ">Explore properties</button>
      </ul>   
    </nav>
  </header>

    <!-- Hero Section -->
  <section class="hero-background flex items-center justify-center relative" id="welcome">
    <div class="hero-overlay"></div>
    <div class="hero-content">
      <h1 class="company-name text-6xl  font-extrabold">Trusted Inspection Diary</h1>
      <p class="tagline ">Independent inspections. Fast reports. Peace of mind.</p>
      <button class="cta-button ">Book an Inspection</button>
    </div>
  </section>

    <!-- About Section -->
  <section class="mt-32 px-14 mx-auto" id="Who we are">
    <div>
      <span class='font-medium uppercase text-main'>WHO WE ARE</span>
      <h2 class='text-4xl text-heading font-bold uppercase'>
      Australia’s Independent Property Inspectors
      </h2>
    </div>
    <div class="text-text-1">
      <p>
        Trusted Inspection Diary provides honest, independent property inspections across Australia, from Sydney to Perth, Melbourne to Brisbane, and beyond. We deliver detailed photo and video reports within 24 hours, helping renters, buyers, and investors make confident decisions nationwide.
      </p>
      <p>
        Our experienced inspectors offer thorough, objective assessments of property condition and neighbourhoods. Guided by transparency, reliability, and integrity, we are your trusted eyes on the ground across all Australian states and territories.
      </p>

    </div>

    <!-- About Section -->
  <section class="mt-32" id="What we are about">
  </section>
  

    
    
  </section>
</div>
`;

// setupCounter(document.querySelector("#counter"));
