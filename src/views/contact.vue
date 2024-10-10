<template>
  <header class="bg-gradient-to-br from-[#04052e] to-60% to-[#010108] ">
    <div id="heroText" class="h-full flex justify-center flex-col">
      <h1 class="text-neutral-50 font-medium pb-5">Contact</h1>
      <p class="px-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
  </header>
  <div class="flex flex-col items-center py-12 gap-7 md:flex-row md:items-start md:justify-center md:py-24 lg:gap-12">
    <section id="contactInfo" class="flex flex-col justify-between max-w-[18rem] min-h-[25rem] content-center self-center gap-7 py-1 lg:self-stretch">
      <article class="flex flex-col items-center text-center lg:flex-row lg:text-left">
        <PhoneIcon/>
        <div class="flex flex-col justify-center pt-3 lg:ml-3 lg:pt-0">
          <p class="font-bold text-lg text-[#eee]">Phone Number</p>
          <p>0123-456-789</p>
        </div>
      </article>

      <article class="flex flex-col items-center text-center lg:flex-row lg:text-left">
        <MailIcon/>
        <div class="flex flex-col justify-center pt-3 lg:ml-3  lg:pt-0">
          <p class="font-bold text-lg text-[#eee]">Email Adress</p>
          <p>traibox@info.com</p>
        </div>
      </article>

      <article class="flex flex-col items-center text-center lg:flex-row lg:text-left">
        <LocationIcon/>
        <div class="flex flex-col justify-center pt-3 lg:ml-3 lg:pt-0">
          <p class="font-bold text-lg text-[#eee]">Location</p>
          <p>Edifício Central,<br/>Via do Conhecimento,<br/>3830-352 Ílhavo,<br/>Portugal</p>
        </div>
      </article>
      <section id="socials" class="flex flex-row justify-center h-min col-start-9 col-span-4 gap-6">
        <LinkedInIcon/>
        <FbIcon/>
        <TwitterIcon/>
      </section>
    </section>
    <section id="form" class="w-full md:w-fit" >
      <form 
        class="glassEff flex flex-col w-[90%] md:w-[32rem] items-center gap-8 py-8 px-4 sm:grid sm:grid-cols-2 sm:gap-y-7 sm:gap-x-3 "
      >
        <h3 class="sm:col-span-2 text-center text-[#eee] text-3xl">Send Us A Message</h3>
          <FloatLabel class="w-full">
            <InputText id="name" class="w-full" type="text" required/>
            <label for="name">Name</label>
          </FloatLabel>
          <FloatLabel class="w-full">
            <InputText id="email" class="w-full" type="email" required maxlength="40"/>
            <label for="email">E-mail</label>
          </FloatLabel>
          <FloatLabel class="w-full">
            <InputText id="country" class="w-full" />
            <label for="country">Country</label>
          </FloatLabel> 
          <FloatLabel class="w-full">
            <InputText id="number" class="w-full" type="text" pattern="(\+?(\d\s?-?){11}|(\d\s?-?){10})" required/>
            <label for="number">Phone</label>
          </FloatLabel>        
          <FloatLabel class="sm:col-span-2 w-full">
            <InputText id="subject" class="sm:col-span-2 w-full" required/>
            <label for="subject">Subject</label>
          </FloatLabel>
        <textarea placeholder="Write your message here :)" class="sm:col-span-2 w-full" maxlength="500" required></textarea>
        <TraiButton2 type="submit" text="Submit" />
      </form>
    </section>
  </div>
  <section id="maps" class="flex flex-col pt-9 pb-5">
    <h2 class="text-center font-medium text-[#eee] pb-6">Find Us on Google Maps</h2>
    <iframe
            height="400"
            frameborder="0" style="border:0"
            referrerpolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCnnK5kFOhV4bXc6ZkRDkTJKeUpVLIs52w&q=Creative+Science+Park,Via+do+Conhecimento,Aveiro"
            allowfullscreen >
          </iframe>

  </section>
</template>
<script setup>
  import LinkedInIcon from "../components/LinkedInIcon.vue";
  import FbIcon from "../components/FbIcon.vue";
  import TwitterIcon from "../components/TwitterIcon.vue";
  import AutoComplete from 'primevue/autocomplete';
  import PhoneIcon from "../components/PhoneIcon.vue";
  import MailIcon from "../components/MailIcon.vue";
  import LocationIcon from "../components/LocationIcon.vue";
  import InputText from 'primevue/inputtext';
  import FloatLabel from 'primevue/floatlabel';
  import { ref, onMounted } from 'vue';
import TraiButton2 from '../components/TraiButton2.vue';
  
onMounted(() => {
  fetch('https://countryapi.io/api/all?apikey=m21hZ8EUN98I2qFUxz0URuqH1VQYQswTd7x9mSkD')
  .then((response) => response.json())
    .then((result) => {
      countries.value = result
      console.log(countries.value)
    })
  .catch(function (error){
    console.log(error)
  })
});

const countries = ref();
const selectedCountry = ref();
const filteredCountries = ref();

const search = (event) => {
    setTimeout(() => {
        if (!event.query.trim().length) {
            filteredCountries.value = [...countries.value];
        } else {
            filteredCountries.value = countries.value.filter((country) => {
                return country.name.toLowerCase().startsWith(event.query.toLowerCase());
            });
        }
    }, 250);
}

</script>
<style scoped>
header{
  height: 60vh;

}
#form{
display: flex;
justify-content: center;
}
iframe{
    filter: invert() hue-rotate(180deg) brightness(105%) contrast(105%);
  }
form{
  border-radius: 10px;
}
input{
  background-color: #02010a;
  height: 2rem;
  border-radius: 10px;
  padding: 0 1rem;
  color: rgba(3, 58, 153, 0.5);
  border-style: none;
}
textarea{
  resize: none;
  padding: 1rem;
  border-radius: 10px;
  background-color: #02010a;
}
textarea::-webkit-scrollbar {
  width: 10px;
}

textarea::-webkit-scrollbar-thumb {
  background-color: rgb(116, 116, 116);
}

header h1,
header p{
  text-align: center;
}
.glassEff{
  /* From https://css.glass */
background: rgba(3, 58, 153, 0.15);
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(8.1px);
-webkit-backdrop-filter: blur(8.1px);
border: 1px solid rgba(3, 58, 153, 0.5);
}

</style>