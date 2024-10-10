<script setup>
  import HeroIcons from "../components/HeroIcons.vue";
  import TraiButton from "../components/TraiButton.vue";
</script>
<template>
  <header class="h-screen flex items-center justify-center  relative">
    <!-- Hero img container -->
    <div class="absolute w-full h-full bg-black opacity-60 backdrop-blur-3xl z-10">
      <img src="/hero/abstractHero.jpg" alt="Blue abstract hero" class="saturate-150 blur-[2px] object-cover h-screen w-full"/>
    </div>
    <!-- Hero text and button container -->
    <div id="heroText" class="flex flex-col items-center z-30">
      <h1 class="text-center font-medium tracking-wide text-4xl text-white px-2 sm:text-5xl sm:px-9 fadeInUp-animation">
        Simplify global trade, Amplify your business
      </h1>
      <router-link to="/our-product">
        <TraiButton text="Explore TradeSphere" class="mt-16 py-3 fadeInUp-animation-button"/>
      </router-link>
    </div>
    <div class=" absolute w-full h-96 bg-gradient-to-b from-transparent to-[#010108] to-80%  z-20 -bottom-20"></div>
  </header>
 
  <main class="flex flex-col">

    <section id="section1" class=" z-40 flex flex-col gap-10 items-center   relative ">
      <h2 class="self-center tracking-wide px-2 font-medium leading-10 text-center text-3xl xl:text-[2.5rem] md:leading-relaxed md:px-12 text-white relative">First Intraeuropean Digital Trade Hub with <br class="hidden md:block"/> Sustainable Performance Tracking</h2>
      <!-- div container including article containers and button -->
      <div  class="flex flex-col  w-full items-center justify-center">
        <!-- div container including only article containers  -->
        <div class="flex flex-col flex-wrap justify-center items-center sm:flex-row gap-8 relative w-full py-8 sm:items-stretch">
          <article class=" w-60 rounded-lg py-2 px-2 flex flex-col items-center gap-4 justify-center lg:py-6 lg:w-60 ">
            <div class="p-3">
              <img src="/home/shop.svg" alt="Shop icon"/>
            </div>
            <h2 class="text-lg text-center text-[#f0efef] lg:text-2xl">SME</h2>
            <p class=" text-[#d1d1d1] text-center ">Trading process streamlining <br class="sm:hidden" />  and cost reduction</p>
          </article>
          <article class=" w-60 rounded-lg py-2 px-2 flex flex-col items-center gap-4 justify-center lg:py-6 lg:w-60">
            <div class="p-3">
              <img src="/home/building.svg" alt="Building icon"/>
            </div>
            <h2 class="text-lg text-center text-[#f0efef]  lg:text-2xl">Large Enterprises</h2>
            <p class=" text-[#d1d1d1]  text-center ">Scalability and integration <br class="sm:hidden" /> with existing systems</p>
          </article>
          <article class=" w-60 rounded-lg py-2 px-2 flex flex-col items-center gap-4 justify-center lg:py-6 lg:w-60">
            <div class=" p-3">
              <img src="/home/coin.svg" alt="Hand with coins icon"/>
            </div>
            <h2 class="text-lg text-center text-[#f0efef] lg:text-2xl">Trade Finance Providers</h2>
            <p class=" text-center text-[#d1d1d1] ">
                Blockchain-based financing</p>
          </article>
        </div>
        <router-link to="/our-product">
          <TraiButton text="Learn More" class="mt-2 mb-6 relative"/>
        </router-link>
      </div>
    </section>
    <h2 class="text-[2.5rem] tracking-wide text-white text-center font-medium py-8 mt-12 ">Breakdown of our approach</h2>
    <section id="section2" class="w-full flex flex-col items-center  py-5  gap-8">
      <HeroIcons />
          <!-- Container for Ai powered analytics -->
      <article id="content1" class="flex  w-full justify-center relative ">
        <Motion is="div" preset="slideVisibleLeft" :duration="1500">
          <div class=" flex flex-row flex-wrap justify-around items-center  relative max-w-4xl sm:flex-nowrap sm:flex-row-reverse sm:gap-3 ">
            <img class="flex w-48 relative right-[-20%] sm:static sm:w-1/3 float-animation" src="/breakdown-SVG/ai-analytic.svg" alt="Robot analysing"/>
            <div class="px-4 flex flex-col gap-3 relative bottom-[18%] sm:static sm:w-[60%] ">
              <h3 class="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500 text-left font-semibold relative bottom-3 text-3xl tracking-wide sm:text-3xl sm:static" >AI powered Analytics</h3>
              <p class="flex text-left self-center text-lg text-blue-200/90">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
          </div>
        </Motion>
      </article>
    <!-- Container for Blockchain payments -->
      <article id="content2" class="w-full flex justify-center py-5 gap-4 overflow-x-hidden">
        <Motion is="div" preset="slideVisibleRight" :duration="1500">
          <div class=" flex flex-row flex-wrap justify-around items-center  relative max-w-4xl sm:flex-nowrap  sm:gap-3">
            <img  class="flex w-48 absolute left-[-0%] top-[-5%] sm:static sm:w-5/12 float-animation" src="/breakdown-SVG/blockchain.svg" alt="Blockchain"/>
            <div class="px-8 flex flex-col gap-5 relative sm:static sm:w-[60%] pt-16 ">
              <h3 class="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500 text-right tracking-wide font-semibold  bottom-3 text-3xl sm:text-3xl sm:static">Blockchain <br class="sm:hidden"/>payments</h3>
              <p class="flex text-right self-center text-lg text-blue-200/90">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
          </div>
          </div>
        </Motion>
      </article>
      <!-- Container for sustainability tracking -->
      <article id="content3" class="flex w-full justify-center  relative ">
        <Motion is="div" preset="slideVisibleLeft" :duration="1500">
          <div class=" p-4 flex flex-row flex-wrap justify-around items-center  relative max-w-4xl sm:flex-nowrap sm:flex-row-reverse sm:gap-3 ">
            <img class="flex w-48 relative right-[-25%] hue-rotate-30 sm:static sm:w-1/3 float-animation" src="/breakdown-SVG/tracking.svg" alt="Sustainability illustration"/>
            <div class="flex flex-col gap-5 relative bottom-[22%] sm:gap-5 sm:static sm:w-[60%] ">
              <h3 class="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500 text-left tracking-wide font-semibold relative bottom-3 text-3xl sm:text-3xl sm:static">Sustainability <br class="sm:hidden"/> tracking</h3>
              <p class="flex text-left self-center text-lg text-blue-200/90">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
          </div>
        </Motion>
      </article>
    </section>
    <!-- Security and compliance section -->
    <section id="section3" class="flex flex-col justify-center p-4 md:flex-row relative mt-20" >
      <!-- h2 visible on bigger screens -->
      <h2 class="invisible font-semibold tracking-wide md:visible md:text-[2.5rem] md:absolute ">
        <span class=" bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-yellow-500 font-normal">Security & Compliance</span>
      </h2>
      <div id="container" class="flex flex-col gap-12 md:flex md:flex-row md:pt-12 md:gap-0 md:mt-4">
        <div id="security" class="flex flex-col justify-center gap-8 sm:px-9 md:p-4 md:gap-8 md:items-stretch md:max-w-[30rem]">
          <h2 class="text-start text-zinc-400 md:pb-4 text-[1.8rem] font-medium md:text-[2.5rem] md:hidden">  
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-yellow-500 font-semibold text-5xl">Security</span><br/>& Compliance
          </h2>
          <div class="glassEff md:p-4 md:flex-grow md:rounded-md"> 
            <h3 class="text-start font-semibold py-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500">Enterprise grade security protocols</h3>
            <p class=" sm:px-8 md:text-left leading-relaxed tracking-wide md:p-0 text-blue-200">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
            </p>
          </div>
          <div class="glassEff md:p-4 md:flex-grow md:rounded-md">
            <h3 class="text-start font-semibold py-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500">Secure transactions with blockchain</h3>
            <p class=" sm:px-8 md:text-left md:p-0 leading-relaxed tracking-wide text-blue-200">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
            </p>
          </div>
        </div>

        <div id="compliance" class="flex flex-col justify-center gap-8 sm:px-9 md:p-4 md:gap-8 items-stretch md:max-w-[30rem]">
          <h2 class="text-end text-zinc-400 md:pb-4 text-[1.8rem] font-medium md:text-[2.5rem] md:hidden">
            Security &<br/><span class="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-yellow-500 text-5xl">Compliance</span>
          </h2>
          <div class="glassEff md:p-4 md:flex-grow md:text-end md:rounded-md">
            <h3 class="text-end font-semibold py-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500">GDPR</h3>
            <p  class="text-end sm:px-8 md:p-0 leading-relaxed tracking-wide text-blue-200">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
            </p>
          </div>
          <div class="glassEff md:p-4 md:flex-grow md:text-end md:rounded-md">
            <h3 class="text-end font-semibold py-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500">CCPA</h3>
            <p class="text-end sm:px-8 leading-relaxed tracking-wide md:p-0 text-blue-200">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
            </p>
          </div>
        </div>
      </div>
    </section>
    <section id="sponsors" class="mt-20">
      <h3 class="text-center text-[#eeeeee] font-normal text-4xl">Sponsors</h3>
      <div id="logoWrapper" class="flex flex-wrap flex-row justify-center w-full">
        <img class="w-[9.5rem] object-contain m-4" src="/sponsor-logos/bgi-logo.png">
        <img class="w-[9.5rem] object-contain m-4" src="/sponsor-logos/eit-logo.png">
        <img class="w-[9.5rem] object-contain m-4" src="/sponsor-logos/fintech-logo.png">
        <img class="w-[9.5rem] object-contain m-4" src="/sponsor-logos/ibm-logo.png">
        <img class="w-[9.5rem] object-contain m-4" src="/sponsor-logos/logo-ua-incubator.png">
        <img class="w-[9.5rem] object-contain m-4" src="/sponsor-logos/MIT-logo.png">
        <img class="w-[9.5rem] object-contain m-4" src="/sponsor-logos/universidade-logo.png">
      </div>
    </section>
  </main>
</template>

<style scoped>

@media (min-width: 768px){
.glassEff{
  background: rgba(0, 78, 212, 0.11);
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(8.1px);
-webkit-backdrop-filter: blur(8.1px);
border: 1px solid rgba(3, 58, 153, 0.27);
}
}

@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}

@keyframes fadeInUp{
  0% {
    transform: translateY(100%);
    opacity: 0;

  }
  100% {
    transform: translateY(0%);
    opacity: 1;
  
  }
}

.fadeInUp-animation {
  animation: 1.5s fadeInUp;
}
.fadeInUp-animation-button {
  animation: 2s fadeInUp;
 
}

</style>