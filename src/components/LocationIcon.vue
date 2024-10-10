<template>
      <div class="glassEff w-fit p-4 h-min rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" 
        width="2rem" 
        height="2rem"       
        viewBox="0 0 28 28">
	      <path fill="url(#gradient)" d="M14 2.25A9.75 9.75 0 0 1 23.75 12c0 4.12-2.895 8.61-8.61 13.518a1.75 1.75 0 0 1-2.283-.002l-.378-.328C7.017 20.408 4.25 16.028 4.25 12A9.75 9.75 0 0 1 14 2.25m0 6a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5" />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#4785FF;" />
            <stop offset="100%" style="stop-color:#033a99;" />
          </linearGradient>
        </defs>
      </svg>
    </div>
</template>
<style lang="css" scoped>
.glassEff{
  /* From https://css.glass */
background: rgba(3, 58, 153, 0.17);
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(8.1px);
-webkit-backdrop-filter: blur(8.1px);
border: 1px solid rgba(3, 58, 153, 0.7);
}</style>