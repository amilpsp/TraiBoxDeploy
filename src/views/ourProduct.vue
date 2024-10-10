<script setup>
import Article from '../components/Article.vue';
import Esg from '../components/Esg.vue';
</script>

<template>
  <section class="flex flex-row flex-wrap justify-center md:items-center py-20 px-4 xl:py-24 2xl:py-36 bg-gradient-to-br from-[#04052e] to-60% to-[#010108] ">
    <div class=" flex flex-row flex-wrap justify-center gap-4 md:gap-8 xl:gap-12 ">
      <h1 class="text-center font-medium leading-tight w-full text-white my-9">Solutions that fit your needs</h1>
      <article class="expand-hover glassEff   w-40 rounded-lg py-4 px-2 flex flex-col items-center gap-3 justify-center lg:py-6 lg:w-60">
        <h2 class="text-lg text-center text-blue-200 font-medium lg:text-2xl">Large Enterprises</h2>
        <div class="p-3">
          <img src="/home/building.svg" class="w-16"/>
      
        </div>
      </article>

      <article class="expand-hover glassEff  w-40 rounded-lg py-4 flex flex-col items-center gap-3 justify-center lg:py-6 lg:w-60">
        <h2 class="text-lg text-center text-blue-200 font-medium lg:text-2xl">SMEs</h2>
        <div class="p-3">
          <img src="/home/shop.svg" class="w-16"/>
        </div>
      </article>

      <article class="expand-hover glassEff w-40 rounded-lg py-4 flex flex-col items-center gap-3 justify-center lg:py-6 lg:w-60">
        <h2 class="text-lg text-center text-blue-200 font-medium lg:text-2xl">Trade Finance Providers</h2>
        <div class=" p-3">
          <img src="/home/coin.svg" class="w-16"/>
        </div>
      </article>
    </div>
  </section>
  <section class="flex flex-col  py-16 px-2 min-h-screen gap-10 ">
    <h2 class="text-center font-medium text-white">For Small and Medium Enterprises</h2>
    <div  class="flex flex-col justify-center gap-8  lg:flex-row-reverse items-center ">
      <img src="/our-product/suitcase.svg" class=" max-w-xl -hue-rotate-90"/>
      <div class="flex flex-col justify-center px-4 gap-4">
      <Article
      picture_src='./our-product/quick.png' 
      title="Quick and Easy Financing Access"
      paragr="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque odit voluptatum quod iusto placeat eligendi expedita ullam, sapiente rem aliquid impedit quibusdam officiis accusamus dolorum alias mollitia aliquam doloremque a?"/>

      <Article
      picture_src='./our-product/integ.png' 
      title="Integration with Existing Systems"
      paragr="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque odit voluptatum quod iusto placeat eligendi expedita ullam, sapiente rem aliquid impedit quibusdam officiis accusamus dolorum alias mollitia aliquam doloremque a?"/>
      <Article
      picture_src='./our-product/overview.png' 
      title="Full Process and Actor Operations Overview"
      paragr="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque odit voluptatum quod iusto placeat eligendi expedita ullam, sapiente rem aliquid impedit quibusdam officiis accusamus dolorum alias mollitia aliquam doloremque a?"/>
      </div>
    </div>

    <article class="flex flex-col items-center gap-3 mt-12">
      <h3  class="font-normal text-white text-center text-3xl tracking-wide pb-8">ESG Performance Improvements</h3>
      <Esg/>
    </article>
  </section>
  <section class="flex flex-col py-16 px-2 min-h-screen gap-10 ">
    <h2 class="font-medium text-white tracking-wide text-center xl:text-[2.2rem]">For Large Enterprises</h2>
    <div class="flex flex-col justify-center gap-8 lg:flex-row items-center ">
      <img src="/our-product/lgEnterp.svg" class="max-w-xl hue-rotate-15"/>
      <div class="flex flex-col justify-center px-4 gap-4">
        <Article
        picture_src='./our-product/tradesphere.png' 
        title="Integration with Existing Systems"
        paragr="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque odit voluptatum quod iusto placeat eligendi expedita ullam, sapiente rem aliquid impedit quibusdam officiis accusamus dolorum alias mollitia aliquam doloremque a?"/>

        <Article
          picture_src='./our-product/gear.png' 
          title="Advance Features"
          paragr="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque odit voluptatum quod iusto placeat eligendi expedita ullam, sapiente rem aliquid impedit quibusdam officiis accusamus dolorum alias mollitia aliquam doloremque a?"/>
      </div>
    </div>

  </section>
  <section class=" flex flex-col py-16 px-2 min-h-screen gap-10 ">
    <h2 class="tracking-wide font-medium text-white text-center xl:text-[2.2rem]"> Trade Finance Providers</h2>
    <div class="flex flex-col justify-center gap-8 lg:gap-20 lg:flex-row-reverse items-center">
      <img src="/our-product/blockchain-finance.svg" class="max-w-xl"/>
      <div class="flex flex-col px-4 gap-4 justify-end">
          <Article
          picture_src='./our-product/block-finance.png' 
        title="Blockchain-based Financing Options "
        paragr="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque odit voluptatum quod iusto placeat eligendi expedita ullam, sapiente rem aliquid impedit quibusdam officiis accusamus dolorum alias mollitia aliquam doloremque a?"
          />
          <Article
          picture_src='./our-product/transp.png' 
        title="Transparency"
        paragr="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque odit voluptatum quod iusto placeat eligendi expedita ullam, sapiente rem aliquid impedit quibusdam officiis accusamus dolorum alias mollitia aliquam doloremque a?"
          />
          <Article
          picture_src='./our-product/risk.png' 
        title="Risk Management"
        paragr="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque odit voluptatum quod iusto placeat eligendi expedita ullam, sapiente rem aliquid impedit quibusdam officiis accusamus dolorum alias mollitia aliquam doloremque a?"
          />
      </div>
      
    </div>
  </section>

</template>

<style scoped>
.glassEff{
  background: rgba(0, 78, 212, 0.11);
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(8.1px);
-webkit-backdrop-filter: blur(8.1px);
border: 1px solid rgba(3, 58, 153, 0.27);
}
.glassEff:hover{
  background: rgba(0, 29, 78, 0.11);
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(8.1px);
-webkit-backdrop-filter: blur(8.1px);
border: 1px solid rgba(3, 58, 153, 0.27);
}
.expand-hover{
  transition: transform .5s ease;
}
.expand-hover:hover {
  transform: scale(1.1);
  cursor: pointer;
}
@keyframes appear{
  from {
    opacity: 0;
    scale: 0.5;
  }
  to {
    opacity: 1;
    scale: 1;
  }
}
.blockani{
  animation: appear linear;
  animation-timeline: view();
  animation-range: entry 0% cover 40%;
}

</style>