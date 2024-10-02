<template>
  <header>
    <div id="heroText" class="h-full flex justify-center flex-col">
      <h1 class="text-neutral-50 font-medium pb-5">Contact</h1>
      <p class="px-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
  </header>
  <div class="flex flex-col items-center py-12 gap-7 md:flex-row md:items-start md:justify-center md:py-24 lg:gap-12">
    <section id="contactInfo" class="flex flex-col justify-between max-w-[15rem] min-h-[25rem] content-center self-center gap-7 py-1 lg:self-stretch">
      <article class="flex flex-col items-center text-center lg:flex-row lg:text-left">
        <PhoneIcon/>
        <div class="flex flex-col justify-center pt-3 lg:ml-3 lg:pt-0">
          <p class="font-bold text-lg">Phone Number</p>
          <p>0123-456-789</p>
        </div>
      </article>

      <article class="flex flex-col items-center text-center lg:flex-row lg:text-left">
        <MailIcon/>
        <div class="flex flex-col justify-center pt-3 lg:ml-3  lg:pt-0">
          <p class="font-bold text-lg">Email Adress</p>
          <p>traibox@info.com</p>
        </div>
      </article>

      <article class="flex flex-col items-center text-center lg:flex-row lg:text-left">
        <LocationIcon/>
        <div class="flex flex-col justify-center pt-3 lg:ml-3 lg:pt-0">
          <p class="font-bold text-lg">Location</p>
          <p>Something 12, 123 45,<br/>
            Lisbon, Portugal</p>
        </div>
      </article>
      <section id="socials" class="flex flex-row justify-center h-min col-start-9 col-span-4 gap-6">
      <div><svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24">

  <path fill="white" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z" />
</svg>
</div>
      <div><svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24">
  
  <path fill="white" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95" />
</svg>
</div>
      <div><svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24">
  <path fill="white" d="M18.205 2.25h3.308l-7.227 8.26l8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z" />
</svg>
</div>
</section>
    </section>
    <section id="form" class="w-full md:w-fit" >
      <form class="bg-neutral-800 flex flex-col w-[90%] md:w-[32rem] items-center gap-8 py-8 px-4 sm:grid sm:grid-cols-2 sm:gap-y-7 sm:gap-x-3 ">
        <h3 class="sm:col-span-2">Send Us A Message</h3>
          <FloatLabel class="w-full">
            <InputText id="name" class="w-full"/>
            <label for="name">Name</label>
          </FloatLabel>
          <FloatLabel class="w-full">
            <InputText id="mail" class="w-full"/>
            <label for="mail">E-mail</label>
          </FloatLabel>
          <FloatLabel class="w-full">
            <InputText id="country" class="w-full"/>
            <label for="country">Country</label>
          </FloatLabel> 
          <FloatLabel class="w-full">
            <InputText id="number" class="w-full"/>
            <label for="number">Number</label>
          </FloatLabel>        
          <FloatLabel class="sm:col-span-2 w-full">
            <InputText id="subject" class="sm:col-span-2 w-full"/>
            <label for="subject">Subject</label>
          </FloatLabel>
        <textarea placeholder="Write your message here :)" class="sm:col-span-2 w-full"></textarea>
        <button type="submit" class="w-36 py-2">Send</button>
      </form>
    </section>
  </div>
  <section id="maps" class="flex flex-col pt-9 pb-5">
    <h2 class="text-center font-semibold pb-6">Find Us on Google Maps</h2>
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
  import PhoneIcon from "../components/PhoneIcon.vue";
  import MailIcon from "../components/MailIcon.vue";
  import LocationIcon from "../components/LocationIcon.vue";
  import InputText from 'primevue/inputtext';
  import FloatLabel from 'primevue/floatlabel';
  
</script>
<style scoped>
header{
  background: linear-gradient(to right, rgb(0, 153, 180),rgb(5, 0, 49)); 
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
  background-color: #121212;
  height: 2rem;
  border-radius: 10px;
  padding: 0 1rem;
  color: white;
  border-style: none;
}
textarea{
  resize: none;
  padding: 1rem;
  border-radius: 10px;
  background-color: #121212;
}
textarea::-webkit-scrollbar {
  width: 10px;
}

textarea::-webkit-scrollbar-thumb {
  background-color: rgb(116, 116, 116);
}

button{
  background-color: rgb(53, 53, 53);
  border-radius: 10px;
}

header h1,
header p{
  text-align: center;
}

</style>