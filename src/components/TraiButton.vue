
<template>
<button class=" text-white font-semibold tracking-wide py-2 px-4 rounded-full shadow-lg ">
    {{ text }}
</button>
</template>
<script setup>
const props = defineProps({text: String})
  

</script>
<style scoped>
button{
    background: linear-gradient(-45deg, #d84f00, #e7a900, #d84f00);
    width:fit-content;
    align-self: center;
    font-size: 1.2rem;
    background-size: 200%;
}


</style>