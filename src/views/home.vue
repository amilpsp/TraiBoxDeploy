<script setup>
  import Spinner from "../components/Spinner.vue";
  import HeroIcons from "../components/HeroIcons.vue";
  import TraiButton from "../components/TraiButton.vue";
/*   import Article from '../components/Article.vue';


  const header3="Integration with Existing Systems"
const header4="Advanced Features"
const text1="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque odit voluptatum quod iusto placeat eligendi expedita ullam, sapiente rem aliquid impedit quibusdam officiis accusamus dolorum alias mollitia aliquam doloremque a?"
const imgSrc1="/breakdown-SVG/ai-analytic.svg" */
/* const imgAlt1="sponsor-logos/MIT-logo.png" */
/* DON'T DELETE COMMENTED OUT CODE, IT'S ANIMATION STUFF FOR LATER!!!!! */
/* 
  import { ref } from 'vue'
  import { useIntersectionObserver } from '@vueuse/core'

  // Refs for security section
  const securityTitle = ref(null)
  const securityDiv1 = ref(null)
  const securityDiv2 = ref(null)

  // Refs for compliance section
  const complianceTitle = ref(null)
  const complianceDiv1 = ref(null)
  const complianceDiv2 = ref(null)

  // Boolean states to control animations
  const securityTitleVisible = ref(false)
  const securityDiv1Visible = ref(false)
  const securityDiv2Visible = ref(false)
  const complianceTitleVisible = ref(false)
  const complianceDiv1Visible = ref(false)
  const complianceDiv2Visible = ref(false)
  // IntersectionObserver for Security Title
  useIntersectionObserver(
    securityTitle,
    ([{ isIntersecting }]) => {
      securityTitleVisible.value = isIntersecting
    },
  )

  // IntersectionObserver for Security First Div
  useIntersectionObserver(
    securityDiv1,
    ([{ isIntersecting }]) => {
      securityDiv1Visible.value = isIntersecting
    },
  )

  // IntersectionObserver for Security Second Div
  useIntersectionObserver(
    securityDiv2,
    ([{ isIntersecting }]) => {
      securityDiv2Visible.value = isIntersecting
    },
  )

  // IntersectionObserver for Compliance Title
  useIntersectionObserver(
    complianceTitle,
    ([{ isIntersecting }]) => {
      complianceTitleVisible.value = isIntersecting
      // fade out previous title
    },
  )

  // IntersectionObserver for Compliance First Div
  useIntersectionObserver(
    complianceDiv1,
    ([{ isIntersecting }]) => {
      complianceDiv1Visible.value = isIntersecting
      securityDiv2Visible.value = !isIntersecting  
    },
  )' 
  useIntersectionObserver(
    complianceDiv2,
    ([{ isIntersecting }]) => {
      complianceDiv2Visible.value = isIntersecting
    }, 
  ) */


</script>
<template>

    <header class="h-screen relative">
      <video
        autoplay
        muted
        loop
        class="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/hero/herovid3.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        <div id="heroText" class="flex flex-col justify-center items-center w-full absolute top-0 bottom-0 bg-gradient-to-t  from-darkBg backdrop-saturate-150 backdrop-blur-md">
          <h1 class="text-center text-4xl text-white px-2 sm:text-5xl sm:px-9
          fadeInUp-animation">
            Simplify global trade, Amplify your business
          </h1>
    
          <TraiButton text="Explore TradeSphere" class="mt-16 py-3 fadeInUp-animation-button"/>
        </div>
        
    </header>
    <HeroIcons class="mb-20"/>
    <main >
      
      <section id="section1" class="bg-[url('/hero/bg-colors.jpg')] bg-cover bg-bottom bg-no-repeat flex flex-col gap-10 items-center px-4  relative  ">
        <div class="absolute w-full h-full backdrop-blur-3xl"></div>

          <h2 class="self-center tracking-wide text-[1.6rem] pt-12 font-bold leading-10 text-center sm:text-3xl md:text-4xl md:leading-relaxed md:px-12 text-white relative">First Intraeuropean Digital Trade Hub <br class="hidden md:block"/> with Sustainable Performance Tracking</h2>
        <div class="flex flex-col gap-10 self-center  relative">
            <div id="box1" class="flex flex-col self-center max-w-72 text-center gap-1 sm:flex-row sm:max-w-full sm:items-baseline sm:gap-6 sm:self-start">
              <h4 class="text-2xl text-white font-semibold">SME</h4>
              <p class="text-lg lg:text-xl text-zinc-200">Trading process streamlining <br class="sm:hidden" />  and cost reduction</p>
            </div>
            <div id="box2" class="flex flex-col self-center max-w-72 text-center gap-1 sm:flex-row sm:max-w-full sm:items-baseline sm:gap-6 sm:self-start">
              <h4 class="text-2xl text-white font-semibold">Large enterprises</h4>
              <p class="text-lg lg:text-xl text-zinc-200">Scalability and integration <br class="sm:hidden" /> with existing systems</p>
            </div> 
            <div id="box3" class="flex flex-col self-center max-w-72 text-center gap-1 sm:flex-row sm:max-w-full sm:items-baseline sm:items-grow sm:gap-6 md:items-end sm:self-start">
              <h4 class="text-2xl text-white font-semibold self-center">Trade finance providers</h4>
              <p class="text-lg sm:text-left lg:text-xl text-zinc-200">
                Blockchain-based financing,<br class="sm:hidden"/> transparency and risk management</p>
            </div> 
          </div>
        <TraiButton text="Learn More" class="mt-6 mb-12 relative"/>
        
        
      
      </section>
      <section id="esg">
      
      <!-- <div id="esgWrapper">
        <div class="esgSection">
          <h3>Environmental</h3>
          <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
        </div>
        <div class="esgSection">
          <h3>Governance</h3>
          <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
        </div>
        <div class="esgSection">
          <h3>Social</h3>
          <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
        </div>
      </div>
      <Spinner/> -->
    </section>
  <h2 class="md:text-5xl tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-teal-500 via-blue-500 to-pink-900 text-center font-bold py-8 mt-12 ">Breakdown of our approach</h2>
    <section id="section2" class="w-full flex flex-col items-center text-white py-5 gap-8">
      
      <article id="content1" class="flex  w-full justify-center bg-[url('/hero/bg-colors2.jpg')] bg-cover bg-no-repeat bg-center bg-fixed relative">
        <div class="absolute backdrop-blur-3xl w-full h-full"></div>
        <Motion is="div" preset="slideVisibleLeft" :duration="1500">
        <div class=" p-4 flex flex-row flex-wrap justify-around items-center  relative max-w-4xl sm:flex-nowrap sm:flex-row-reverse sm:gap-3 ">
          <img class="flex w-48 relative right-[-25%] sm:static sm:w-1/3 float-animation" src="/breakdown-SVG/ai-analytic.svg"/>
          <div class="flex flex-col gap-5 relative bottom-[18%] sm:static sm:w-[60%] ">
            <h3 class="text-left font-bold relative bottom-10 text-3xl tracking-wide sm:text-3xl sm:static" >AI powered <br class="sm:hidden"/>Analytics</h3>
            <p class="flex text-left self-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
        </div>
        </Motion>
      </article>
  
      <article id="content2" class="w-full flex justify-center text-white py-5 gap-4 overflow-x-hidden">
        <Motion is="div" preset="slideVisibleRight" :duration="1500">
        <div class=" flex flex-row flex-wrap justify-around items-center  relative max-w-4xl sm:flex-nowrap  sm:gap-3">
          
          <img  class="flex w-48 absolute left-[-0%] top-[-5%] sm:static sm:w-5/12 float-animation" src="/breakdown-SVG/blockchain.svg"/>
          <div class="px-8 flex flex-col gap-5 relative sm:static sm:w-[60%] pt-16 ">
            <h3 class="text-right tracking-wide font-bold relative bottom-10 text-3xl sm:text-3xl sm:static">Blockchain <br class="sm:hidden"/>payments</h3>
            <p class="flex text-right self-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
        </div>
        </div>
      </Motion>
      </article>

      <article id="content3" class="flex w-full justify-center bg-[url('/hero/bg-colors2.jpg')] bg-cover bg-no-repeat bg-bottom bg-fixed relative ">
        
        <div class="absolute backdrop-blur-3xl w-full h-full"></div>
        <Motion is="div" preset="slideVisibleLeft" :duration="1500">
        <div class=" p-4 flex flex-row flex-wrap justify-around items-center  relative max-w-4xl sm:flex-nowrap sm:flex-row-reverse sm:gap-3 ">
         
          <img class="flex w-48 relative right-[-25%] hue-rotate-30 sm:static sm:w-1/3 float-animation" src="/breakdown-SVG/tracking.svg"/>
          <div class="flex flex-col gap-14 relative bottom-[22%] sm:gap-5 sm:static sm:w-[60%] ">
            <h3 class="text-left tracking-wide font-bold relative bottom-10 text-3xl sm:text-3xl sm:static">Sustainability <br class="sm:hidden"/> tracking</h3>
          <p class="flex text-left self-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
          </div>
         
        </div>
      </Motion>
      </article>
    </section>
    <section id="section3" class="flex flex-col justify-center p-4 md:flex-row relative mt-20" >
      <h2 class="invisible font-semibold tracking-wide md:visible md:text-[2.5rem] md:absolute ">
        <span class=" bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-violet-500">Security & Compliance</span>
      </h2>
      <div id="container" class="flex flex-col gap-12 md:flex md:flex-row md:pt-12 md:gap-0 md:mt-4">
     
      <div id="security" class="flex flex-col justify-center gap-8 sm:px-9 md:p-4 md:gap-8 md:items-stretch md:max-w-[30rem]">
        <h2 class="text-start text-zinc-300 md:pb-4 text-[1.8rem] font-bold md:text-[2.5rem] md:hidden">  
          <span class="text-[#1bb39e] text-5xl">Security</span><br/><span class="text-white">&</span> Compliance
        </h2>
        <div class="md:bg-gradient-to-br from-teal-700/50 to-violet-900/50  md:p-4 md:flex-grow md:rounded-md"> <!-- class="flex flex-col justify-center "  -->
          <h3 class="text-start font-semibold py-4 text-white">Enterprise grade security protocols</h3>
          <p class=" sm:px-8 md:text-left md:p-0 text-zinc-100">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
          </p>
        </div>
        <div class="md:bg-gradient-to-tr from-teal-700/50 to-violet-900/50 md:p-4 md:flex-grow md:rounded-md">
          <h3 class="text-start font-semibold py-4 text-white">Secure transactions with blockchain</h3>
          <p class=" sm:px-8 md:text-left md:p-0 text-zinc-100">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
          </p>
        </div>
      </div>

      <div id="compliance" class="flex flex-col justify-center gap-8 sm:px-9 md:p-4 md:gap-8 items-stretch md:max-w-[30rem]">
        <h2 class="text-end text-zinc-300 md:pb-4 text-[1.8rem] font-bold md:text-[2.5rem] md:hidden">
          Security <span class="text-white">&</span><br/><span class="text-[#1bb39e] text-5xl">Compliance</span>
        </h2>
        <div class="md:bg-gradient-to-tr from-violet-900/50 to-teal-700/50 md:p-4 md:flex-grow md:text-end md:rounded-md">
          <h3 class="text-end font-semibold py-4 text-white">GDPR</h3>
          <p  class="text-end sm:px-8 md:p-0 text-zinc-100">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
          </p>
        </div>
        <div class="md:bg-gradient-to-br from-violet-900/50 to-teal-700/50 md:p-4 md:flex-grow md:text-end md:rounded-md">
          <h3 class="text-end font-semibold py-4 text-white">CCPA</h3>
          <p class="text-end sm:px-8 md:p-0 text-zinc-100">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
          </p>
        </div>
      </div>
    </div>
    </section>
    <section id="sponsors" class="mt-20">
      <h3 class="text-center text-white font-bold text-4xl">Sponsors</h3>
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
@keyframes float {
	0% {
		transform: translatey(0px);
	}
	50% {
		transform: translatey(-20px);
	}
	100% {
		transform: translatey(0px);
	}
}
.float-animation{
  
	transform: translatey(0px);
	animation: float 6s ease-in-out infinite;
}
/*  DON'T DELETE, STILL IN PROGRESS */
 /* @keyframes anima {
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
 */
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
  /* animation: anima 15s linear infinite; */
}

/* .btn-anim{
  
 } */



/* .fade-in-left {
  opacity: 0;
  transform: translateX(-100%);

  transition: all 1.5s;
}
#esg{
  display: flex;
}
#esgWrapper{
  width: 50%;
}
.esgSection{
  width: 15rem;
}
.fade-in-left.active {
  opacity: 1;
  transform: translateX(0);
}

.fade-in-right {
  opacity: 0;
  transform: translateX(100%);

  transition: all 1s;

}

.fade-in-right.active {
  opacity: 1;
  transform: translateX(0);
}

.fade-in-bottom {
  opacity: 0;
  transform: translateY(100%);
  transition: opacity 2s, transform 1s;
}

.fade-in-bottom.active {
  opacity: 1;
  transform: translateY(0);
}
.fade-in-bottom:after{
  transform: translateY(-100%);
}
 */

</style>