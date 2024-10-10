<template>
    <button class=" text-white font-medium tracking-wide py-2 px-4 rounded-full shadow-lg ">
        {{ text }}
    </button>
    </template>
    <script setup>
    const props = defineProps({text: String})
      
    
    </script>
    <style scoped>
    button{
        background: linear-gradient(-45deg, #000146, #083fd8);
        width:fit-content;
        align-self: center;
        font-size: 1.2rem;
        background-size: 200%;
    }
    button:hover{
        background: linear-gradient(-45deg, #010464, #052fa3);
    
    }
    
    </style>