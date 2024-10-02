
<template>
<button class=" text-white font-semibold tracking-wide py-2 px-5 rounded-full">
    {{ text }}
</button>
</template>
<script setup>
const props = defineProps({text: String})
  

</script>
<style scoped>
button{
    background: linear-gradient(-45deg, #23BDB4, #051B68, #000d46, #2ead90);
    width:fit-content;
    align-self: center;
    font-size: 1.2rem;
    background-size: 500%;
  /*   box-shadow: 0px 0px 15px #006977; */
}

</style>