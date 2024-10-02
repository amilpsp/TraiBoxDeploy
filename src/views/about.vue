
<template>
 <!--  <section > -->
    <div id="hero" class="bg-[url(/hero/peakpx.jpg)] bg-no-repeat bg-cover relative">
      <div class="flex flex-col justify-center items-center w-full absolute top-0 bottom-0 bg-gradient-to-t  from-darkBg">
      <h2>Mission & Vision</h2>
      <p>"Empowering businesses to navigate and optimize global trade through cutting-edge technology and innovation."</p>
    </div>
    </div>
 
<!--   </section> -->
<h3>Our Team</h3>
  <section>

    <div class="team">

        <img class="border-1 rounded-full shadow-[0px_0px_94px_9px_rgba(3,83,232,0.7)] border-[rgb(0,193,207)]" src="/team/juan.png">

      <div class="teamTxt">
      <h4>Juan Da Rocha - CEO Portugal </h4>
      <p>
        Serial Entrepreneur, 
        experienced in Structured 
        Trade Finance.
        Former professor of Project 
        Valuation under 
        Sustainable Criteria.
      </p>
    </div>
    </div>
    <div class="team">

        <img class="border-1 rounded-full shadow-[0px_0px_94px_9px_rgba(3,83,232,0.7)] border-[rgb(0,193,207)]" src="/team/carlos.png">
      
      
      <div class="teamTxt">
      <h4>Carlos Abreu - CTO Spain
      </h4>
      <p>
        Serial Entrepreneur experienced and SaaS development 
        applications.
        Secretary General at the 
        Blockchain Association, Valencia.
        Lean Six Sigma - Black Belt.
      </p>
    </div>
    </div> 
    <div class="team">
      
      <img class="border-1 rounded-full shadow-[0px_0px_94px_9px_rgba(3,83,232,0.7)] border-[rgb(0,193,207)]" src="/team/matthias.png">
    
      <div class="teamTxt">
      <h4>Matthias Apel - CFO Germany</h4>
      <p>
        Serial Entrepreneur with 
        experience in Financing and 
        International Trade.
        Market experience all across 
        Europe, Latin America and 
        Caribe.
      </p>
    </div>
    </div>
  </section>

</template>
<style scoped>
#hero{

  width: 100%;
  height: 50vh;
  /* margin-top: 6rem; */
  margin-bottom: 5rem;

  text-align: center;
/*   padding: 1rem;
  padding-top: 3rem; */

  color: rgb(255, 255, 255);
}
section{
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
}
.team{
  display: flex;
  justify-content: center;
  flex-direction: column;

  margin: 2rem 1.5rem;
  text-align: center;
/*   width: 100%; */
  position: relative;
}

 img{
  width: 10rem;
  height: 10rem;
  object-fit: cover;
  align-self: center;
  border-radius: 50%;
 }

.teamTxt{
  width: 20rem;
  color: rgb(255, 255, 255);
  border-radius: 6px;
  align-self: center;
}
.teamTxt h4{
  margin: 1rem 0;
}
</style>