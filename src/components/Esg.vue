<template>
    <section class="flex flex-col md:w-[100%] md:justify-center items-center">
    <div class="flex flex-col gap-4 md:flex-row items-stretch ">
        <article class="flex flex-col gap-4   px-6 py-4 w-full rounded-lg relative shadow-lg md:max-w-sm glassEff">
            <img src="/our-product/plant.svg" alt="green plant icon" class="w-8 absolute right-7 top-4">
            <h3 class="text-white font-semibold tracking-wide">Environmental</h3>
            <ul class="flex flex-col list-disc pl-4 gap-1">
                <li class="text-white">Climate change impact</li>
                <li class="text-white">Energy efficiency</li>
                <li class="text-white">Waste management</li>
                <li class="text-white">Natural resource conservation</li>
                <li class="text-white">Biodiversity</li>
            </ul>
        </article>
        <article class="flex flex-col gap-4 glassEff px-6 py-4 w-full rounded-lg relative shadow-lg md:max-w-sm ">
            <img src="/our-product/people.svg" alt="blue icon of three people" class="w-8 absolute right-7 top-4">
            <h3 class="text-white  font-semibold tracking-wide">Social</h3>
            <ul class="flex flex-col  list-disc pl-4 gap-1">
                <li class="text-white">Labor practices</li>
                <li class="text-white">Human rights</li>
                <li class="text-white">Community engagement</li>
                <li class="text-white">Customer satisfaction</li>
                <li class="text-white">Employee health and safety</li>
            </ul>
        </article>
        <article class="flex flex-col gap-4  glassEff px-6 py-4 w-full rounded-lg relative shadow-lg md:max-w-sm ">
            <img src="/our-product/govern.svg" alt="orange building icon" class="w-8 absolute right-7 top-4">
            <h3 class="text-white font-semibold tracking-wide">Governance</h3>
            <ul class="flex flex-col list-disc pl-4 gap-1">
                <li class="text-white">Boarder diversity and structure</li>
                <li class="text-white">Executive compensation</li>
                <li class="text-white">Transparency and accountability</li>
                <li class="text-white">Corrution and bribery</li>
                <li class="text-white">Sharehodler</li>
            </ul>
        </article>
    </div>

</section>
</template>
<style scoped>
.glassEff{
  background: rgba(2, 92, 247, 0.11);
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(8.1px);
-webkit-backdrop-filter: blur(8.1px);
border: 1px solid rgba(3, 58, 153, 0.27);
}
#expand1{
  transition: transform .5s ease;
  
}
#expand1:hover {

  transform: translate(-5%, -5%) scale(1.1);
  cursor: pointer;
}
#expand2{
  transition: transform .5s ease;
  
}
#expand2:hover {

  transform: translate(-5%, -5%) scale(1.1);
  cursor: pointer;
}
#expand3{
  transition: transform .5s ease;
  
}
#expand3:hover {

  transform: translate(-5%, -5%) scale(1.1);
  cursor: pointer;
}
</style>