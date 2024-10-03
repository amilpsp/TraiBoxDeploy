
<template>
  <section class="flex flex-row flex-wrap justify-center md:items-center py-20 px-4 xl:py-24 2xl:py-36 bg-gradient-to-br from-indigo-800/30 to-zinc-900/50 ">
    <div class=" flex flex-row flex-wrap justify-center gap-4 md:gap-8 xl:gap-12 ">
      <h1 class="text-center leading-tight w-full bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-violet-400 my-9">Solutions that fit your needs</h1>
      <article class="expand-hover bg-zinc-800/80 hover:bg-zinc-800/60  w-40 rounded-lg py-4 px-2 flex flex-col items-center gap-3 justify-center lg:py-6 lg:w-60">
        <h2 class="text-lg text-center text-white font-semibold lg:text-2xl">Large Enterprises</h2>
        <div class="p-3 w-[5rem] lg:w-[7rem]">
          <img src="/our-product/LE.png"/>
      
        </div>
      </article>

      <article class="expand-hover bg-zinc-800/80 hover:bg-zinc-800/70 w-40 rounded-lg py-4 flex flex-col items-center gap-3 justify-center lg:py-6 lg:w-60">
        <h2 class="text-lg text-center text-white font-semibold lg:text-2xl">SMEs</h2>
        <div class="p-3 w-[5rem] lg:w-[7rem]">
          <img src="/our-product/SMEs2.png"/>
        </div>
      </article>

      <article class="expand-hover bg-zinc-800/80 hover:bg-zinc-800/70 w-40 rounded-lg py-4 flex flex-col items-center gap-3 justify-center lg:py-6 lg:w-60">
        <h2 class="text-lg text-center text-white font-semibold lg:text-2xl">Trade Finance Providers</h2>
        <div class=" p-3 w-[5rem] lg:w-[7rem]">
          <img src="/our-product/TFP.png"/>
        </div>
      </article>
    </div>
  </section>
  
  <section class="flex flex-col bg-indigo-900/10 py-16 px-2 min-h-screen gap-10">
    <h2 class="lg:pl-16 xl:pl-36 2xl:pl-[20%] font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-700 xl:text-[2.2rem]">For Small and Medium Enterprises</h2>
<div class="flex flex-row flex-wrap justify-center gap-4 sm:gap-6 xl:gap-10">
<Articletest
picture_src='/our-product/quick.png' 
title="Quick and Easy Financing Access"
paragr="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque odit voluptatum quod iusto placeat eligendi expedita ullam, sapiente rem aliquid impedit quibusdam officiis accusamus dolorum alias mollitia aliquam doloremque a?"/>

<Articletest
picture_src='/our-product/integ.png' 
title="Integration with Existing Systems"
paragr="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque odit voluptatum quod iusto placeat eligendi expedita ullam, sapiente rem aliquid impedit quibusdam officiis accusamus dolorum alias mollitia aliquam doloremque a?"/>
<Articletest
picture_src='/our-product/overview.png' 
title="Full Process and Actor Operations Overview"
paragr="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque odit voluptatum quod iusto placeat eligendi expedita ullam, sapiente rem aliquid impedit quibusdam officiis accusamus dolorum alias mollitia aliquam doloremque a?"/>
</div>
    <article class="flex flex-col items-center gap-3 mt-12">
      <h3  class="font-semibold text-center text-3xl text-zinc-200 tracking-wide pb-8">ESG Performance Improvements</h3>
      <Esg/>
    </article>
  </section>
  <section class="flex flex-col py-16 px-2 min-h-screen gap-10 bg-indigo-900/10">
    <h2 class="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-700 font-bold tracking-wide lg:pl-16 xl:pl-36 2xl:pl-[20%] xl:text-[2.2rem]">For Large Enterprises</h2>
    <!-- 
    <Article :header="header3" :text-content="text1" :img-src="imgSrc1" :alt="imgAlt1" :img-left="true"/>
    <Article :header="header4" :text-content="text1" :img-src="imgSrc1" :alt="imgAlt1" :img-left="false"/> -->
    <div class="flex flex-row flex-wrap justify-center gap-4 sm:gap-6 xl:gap-10">
      <Articletest
      picture_src='/our-product/tradesphere.png' 
      title="Integration with Existing Systems"
      paragr="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque odit voluptatum quod iusto placeat eligendi expedita ullam, sapiente rem aliquid impedit quibusdam officiis accusamus dolorum alias mollitia aliquam doloremque a?"/>

      <Articletest
        picture_src='/our-product/gear.png' 
        title="Advance Features"
        paragr="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque odit voluptatum quod iusto placeat eligendi expedita ullam, sapiente rem aliquid impedit quibusdam officiis accusamus dolorum alias mollitia aliquam doloremque a?"/>
    </div>
  </section>
<!--   <section class=" bg-blue-800/20">
    <h2>Trade Finance Providers</h2>
<img src="/our-product/blockchain-finance.svg" class="w-[50vw]"/>
  </section>
 -->
    <!-- <Tabs value="0" class="flex flex-col justify-center items-center content-center">
      <TabList as="div" class="">
          <Tab value="1">Large <br class="md:hidden">Enterprises</Tab>
          <Tab value="2">SMEs</Tab>
          <Tab value="3">Trade Finance <br class="md:hidden"> Providers</Tab>
      </TabList>
      <TabPanels>
        <TabPanel value="1">
          <p class="m-0 px-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </TabPanel>
        <TabPanel value="2">
          <p class="m-0 px-10">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
              ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
          </p>
        </TabPanel>
        <TabPanel value="3">
          <p class="m-0 px-10">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa
              qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
          </p>
        </TabPanel>
      </TabPanels>
    </Tabs> -->
</template>
<script setup>
import Article from '../components/Article.vue';
import Articletest from '../components/Articletest.vue';
import Esg from '../components/Esg.vue';
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';

const header1="Quick and Easy Financing Access"
const header2="Full Process and Actor Operations Overview"
const header3="Integration with Existing Systems"
const header4="Advanced Features"
const text1="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque odit voluptatum quod iusto placeat eligendi expedita ullam, sapiente rem aliquid impedit quibusdam officiis accusamus dolorum alias mollitia aliquam doloremque a?"
const imgSrc1="our-product/finance-Acc.png"
const imgAlt1="sponsor-logos/bgi-logo.png"

</script>
<style scoped>
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

/*
div.p-tab-list-tab-list{
  background-color: rgba(var(--darkest)) !important;
}
*/
</style>