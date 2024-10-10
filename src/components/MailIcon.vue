<template>
      <div class="glassEff w-fit p-4 h-min rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" aria-label="Mail icon" width="2rem" height="2rem" viewBox="0 0 20 20">
	      <path fill="url(#gradient)" fill-rule="evenodd" d="m7.172 11.334l2.83 1.935l2.728-1.882l6.115 6.033q-.242.079-.512.08H1.667c-.22 0-.43-.043-.623-.12zM20 6.376v9.457c0 .247-.054.481-.15.692l-5.994-5.914zM0 6.429l6.042 4.132l-5.936 5.858A1.7 1.7 0 0 1 0 15.833zM18.333 2.5c.92 0 1.667.746 1.667 1.667v.586L9.998 11.648L0 4.81v-.643C0 3.247.746 2.5 1.667 2.5z" />
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