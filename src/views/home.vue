<script setup>
  import Spinner from "../components/Spinner.vue";
  import HeroIcons from "../components/HeroIcons.vue";
</script>
<template>

    <header class="h-screen relative">
      <video
        autoplay
        muted
        loop
        class="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/hero/herovid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        <div id="heroText" class="flex flex-col justify-center items-center w-full absolute top-0 bottom-0 bg-gradient-to-t  from-darkBg">
          <h1 class="text-center text-4xl text-white px-2 sm:text-5xl sm:px-9">
            Simplify global trade, Amplify your business
          </h1>
          <button class="bg-[rgba(0,82,82,0.658)] text-white font-medium py-2 px-4 rounded-full mt-16">
            Explore TradeSphere
          </button>
        </div>
 
    </header>
    <main>
      <HeroIcons/>
      <section id="section1">
        <h2>First intraeuropean digital trade hub with sustainable performance tracking</h2>
        <div id="sectionWrapper">
            <div class="box" id="box1">
              <p><span>Trade finance providers</span></p>
              <p>Blockchain-based financing, transparency and risk management</p>
            </div>
            <div class="box" id="box2">
              <p><span>Large enterprises</span></p>
              <p>Scalability and integration with existing systems</p>
            </div> 
            <div class="box" id="box3">
              <p><span>SME</span></p>
              <p>Trading process streamlining and cost reduction</p>
            </div> 
           
        </div>
        <button class="bg-[rgba(0,82,82,0.658)] text-white font-medium py-2 px-4 rounded-full mt-16">Learn More</button>
      </section>
      <Spinner/>
      <section id="section2">
        <h3>Breakdown of our approach</h3>
        <div class="container">
          <div class="content">
       
            <h1>Ai powered analytics</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div class="content">
            <h1>Blockchain payments</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div class="content">
            <h1>Sustainability tracking</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>

      </section>
      <section id="section3">
        
      </section>
      <section id="sponsors">
        <h3>Sponsors</h3>
        <div id="logoWrapper">
          <img class="logo" src="/sponsor-logos/bgi-logo.png">
          <img class="logo" src="/sponsor-logos/eit-logo.png">
          <img class="logo" src="/sponsor-logos/fintech-logo.png">
          <img class="logo" src="/sponsor-logos/ibm-logo.png">
          <img class="logo" src="/sponsor-logos/logo-ua-incubator.png">
          <img class="logo" src="/sponsor-logos/MIT-logo.png">
          <img class="logo" src="/sponsor-logos/universidade-logo.png">
        </div>
      
      </section>
    </main>
</template>

<style scoped>

#sponsors h3{
  text-align: center;
  color: white;
}
#logoWrapper{
  display: flex;
flex-wrap: wrap;
flex-direction: row;
justify-content: center;
width: 100%;
}
.logo{
width: 9.5rem;
object-fit: contain;
margin: 1rem;
}
#section1 h2{
  text-align: center;
  color: white;
  padding: 1.5rem;
}
#sectionWrapper{
  padding-top: 2rem;
}
#section1{
  background-color: rgb(0, 17, 54);
  display: flex;
  flex-direction: column;
}
#section1 span{
  font-weight: 700;
  font-size: 1.8rem;
}
.box{
  display: flex;
  flex-direction: row;
  font-size: 1.2rem;
  gap: 3rem;
  line-height: 3rem;
  justify-content: center;
  width: fit-content;
  color: white;
}
#box1{
  margin-left: 20%;
}
#box2{
  margin-left: 20%;
}
#box3{
  margin-left: 20%;
}

button{
    background: linear-gradient(0.25turn, #23BDB4, #051B68);
    width:fit-content;
    align-self: center;
    margin-bottom: 2rem;
    font-size: 1.2rem;
}
.container {
  display: flex;
  flex-direction: column;
  background-color: #1c1c1c;
  color: white;
  padding: 20px 0;
  font-family: Arial, sans-serif;
}



.content {
  max-width: 50rem;
  margin-bottom: 2rem;
}
.content svg{
  width: 20rem;
}
/* Heading styling */
.content h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

/* Paragraph styling */
.content p {
  line-height: 1.6;
}

</style>