
<template>
  <section class="flex flex-col md:flex-row md:flex-wrap md:justify-center md:items-center py-16 px-2 min-h-screen gap-10 md:gap-x-10 xl:py-24 2xl:py-36 ">

    <h1 class="text-center leading-tight w-full">Solutions that fit your needs</h1>
    <article class="flex flex-col items-center gap-3 md:justify-end md:w-[27%] 2xl:w-[20%]">
      <h2 class="md:text-center">Large Enterprises</h2>
      <div class="bg-midLightBg h-[15vh] w-[30vh]">.</div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque odit voluptatum quod iusto placeat eligendi expedita ullam.</p>
    </article>
    <article class="flex flex-col items-center gap-3 md:justify-end md:w-[27%] 2xl:w-[20%]">
      <h2 class="md:text-center">SMEs</h2>
      <div class="bg-midLightBg h-[15vh] w-[30vh]">.</div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque odit voluptatum quod iusto placeat eligendi expedita ullam.</p>
    </article>
    <article class="flex flex-col items-center gap-3 md:justify-end md:w-[27%] 2xl:w-[20%]">
      <h2 class="lg:text-center">Trade Finance Providers</h2>
      <div class="bg-midLightBg h-[15vh] w-[30vh]">.</div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque odit voluptatum quod iusto placeat eligendi expedita ullam.</p>
    </article>
  </section>
  
  <section class="flex flex-col bg-midToneBg py-16 px-2 min-h-screen gap-10">
    <h2 class="lg:pl-16 xl:pl-36 2xl:pl-[20%]">For Small and Medium Enterprises</h2>
    <Article :header="header1" :text-content="text1" :img-left="true"/>

    <article class="flex flex-col items-center gap-3">
      <h3>ESG Performance Improvements</h3>
      <div class="bg-midLightBg h-[15vh] w-[30vh]">.</div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque odit voluptatum quod iusto placeat eligendi expedita ullam, sapiente rem aliquid impedit quibusdam officiis accusamus dolorum alias mollitia aliquam doloremque a?</p>
    </article>
    <Article :header="header2" :text-content="text1" :img-left="true"/>

    
  </section>
  <section class="flex flex-col py-16 px-2 min-h-screen gap-10">
    <h2 class="lg:pl-16 xl:pl-36 2xl:pl-[20%]">For Large Enterprises</h2>
    
    <Article :header="header3" :text-content="text1" :img-src="imgSrc1" :alt="imgAlt1" :img-left="true"/>
    <Article :header="header4" :text-content="text1" :img-src="imgSrc1" :alt="imgAlt1" :img-left="false"/>
    
  </section>

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
const imgSrc1="sponsor-logos/bgi-logo.png"
const imgAlt1="sponsor-logos/bgi-logo.png"

</script>
<style scoped>

/*
div.p-tab-list-tab-list{
  background-color: rgba(var(--darkest)) !important;
}
*/
</style>