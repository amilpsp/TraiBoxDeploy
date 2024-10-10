<template>
   <section class="flex flex-row flex-wrap justify-center md:items-center py-20 px-4 xl:py-24 2xl:py-36 bg-gradient-to-br from-[#04052e] to-60% to-[#010108] ">
    <div class=" flex flex-row flex-wrap justify-center gap-4 md:gap-8 xl:gap-12 ">
      <h1 class="text-center font-medium leading-tight w-full text-white my-9">For Investors</h1>
    
    </div>
  </section>


  <div id="charts-and-join" class="flex flex-col justify-between text-center pb-10 ">

    <section id="market-analysis" class="flex flex-col justify-center px-2 h-screen gap-8 items-center md:grid md:gap-x-10 md:gap-y-5 lg:gap-x-10 xl:gap-x-20 2xl:gap-x-32 grid-cols-12 md:h-min md:p-16 lg:px-24 xl:px-36 2xl:py-[10vh] 2xl:px-80">

      <h2 class="col-span-5 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500 font-medium">Market Analysis</h2>
      

      <Chart id="chart-1" type="bar" :data="chart1Data" :options="barChartOptions" class="h-[35vh] w-[95vw] sm:h-[50vh] sm:w-[80vw] md:w-auto md:h-[20rem] xl:h-[40vh] 2xl:h-[35vh] row-span-2 col-start-6 col-span-7  p-6 rounded-lg glassEffect"/>
      
      <p class="w-[85vw] md:w-auto row-start-2 col-start-1 col-span-5 md:text-lg xl:text-xl 2xl:text-2xl text-blue-200/90">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam accusantium unde ullam dolorum earum saepe maxime dolore omnis, natus dolor autem consequatur ipsam illo.</p>
    
    </section>
    <!-- end of #market-analysis section -->



    <section id="blockchain" class="flex flex-row flex-wrap content-center justify-center px-2 h-screen gap-6 items-center md:grid md:gap-x-5 md:gap-y-10 lg:gap-x-10 xl:gap-x-20 2xl:gap-x-32 grid-cols-12 md:h-min md:p-10 lg:px-24 xl:px-36 2xl:py-[10vh] 2xl:px-80">

      <h2 class="w-full col-span-12 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500 font-medium">BSV Blockchain: scalability and <br class="lg:hidden"> low transaction costs</h2>  
      
      <p class="w-[85vw] md:w-auto row-start-2 col-start-4 col-span-6 lg:col-start-5 lg:col-span-4 2xl:col-start-4 2xl:col-span-6 md:text-lg xl:text-xl 2xl:text-2xl text-blue-200/90">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque inventore, aperiam sint error necessitatibus odit quibusdam voluptatum velit rem temporibus esse impedit delectus at! </p>
      
      <Chart id="chart-2" type="doughnut" :data="chart2Data" :options="donughtChartOptions" :canvasProps="{'role': 'img', 'aria-label': 'Data'}" class="w-[40vw] row-start-2 col-start-1 col-span-3 lg:col-span-4 2xl:col-span-3 md:w-full" />
        
      <Chart id="chart-3" type="doughnut" :data="chart3Data" :options="donughtChartOptions" :canvasProps="{'role': 'img', 'aria-label': 'Data'}" class="w-[40vw] row-start-2 col-start-10 col-span-3 lg:col-start-9 lg:col-span-4 2xl:col-start-10 2xl:col-span-3 md:w-full" />
      
    </section>
<!-- End of #blockchain section -->



    <section id="revenue-projections" class="flex flex-col justify-center px-2 h-screen gap-8 items-center md:grid md:gap-x-10 md:gap-y-5 lg:gap-x-10 xl:gap-x-20 2xl:gap-x-32 grid-cols-12 md:h-min md:p-16 lg:px-24 xl:px-36 2xl:py-[10vh] 2xl:px-80">

      <h2 class="col-start-7 col-span-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500 font-medium">Revenue <br class="sm:hidden">Projections</h2>
      
      <Chart id="chart-4" type="line" :data="chart4Data" :options="lineChartOptions" class="h-[35vh] w-[95vw] sm:h-[50vh] sm:w-[80vw] md:w-auto md:h-[20rem] xl:h-[33vh] 2xl:h-[35vh] row-start-1 row-span-2 col-start-1 col-span-6 p-6 rounded-lg glassEffect" />
      
      <p class="w-[85vw] md:w-auto row-start-2 col-start-7 col-span-6 md:text-lg xl:text-xl 2xl:text-2xl text-blue-200/90">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate illo facilis iusto quia placeat alias ab sed! Saepe eius cupiditate provident consequuntur quo nihil, repellendus porro! Cum voluptatibus aspernatur quis aliquam. </p>
    </section>
    <!-- end of #revenue-projections section -->
    
    <section id="sponsors-and-join-the-team" class="flex flex-col px-2 h-[70vh] justify-center items-center gap-8 2xl:gap-14">
      <article class="flex flex-wrap justify-center align-middle gap-x-8 gap-y-2 ">
        <img class="w-[9.5rem] grayscale"src="/sponsor-logos/MIT-logo.png" alt="MIT logo">
        <img class="w-[9.5rem] grayscale object-contain brightness-75"src="/sponsor-logos/universidade-logo.png" alt="Universidade de aveiro logo">
        <img class="w-[9.5rem] grayscale brightness-50"src="/sponsor-logos/fintech-logo.png" alt="Fintech logo">
        <img class="w-[9.5rem] grayscale brightness-50"src="/sponsor-logos/logo-ua-incubator.png" alt="Universidade de aveiro incubator logo">
      </article>
      
      <article id="join-the-team" class="flex flex-col h-min gap-6">
        <h2 class="font-medium text-[#eee]">Join the team</h2>
        <div class="flex flex-wrap justify-center gap-3">
          <TraiButton2 text=" Download our brochure"/>
          <TraiButton text=" Get in touch"/>
        </div>
      </article>

      <article class="flex flex-wrap justify-center align-middle items-center gap-x-8 gap-y-2 ">
        <img class="w-[10rem] grayscale"src="/sponsor-logos/eit-logo.png" alt="EIT logo">
        <img class="w-[9.5rem] grayscale brightness-75"src="/sponsor-logos/bgi-logo.png" alt="BGI logo">
        <img class="w-[9.5rem] grayscale"src="/sponsor-logos/ibm-logo.png" alt="IBM logo">
        
      </article>
    </section>
  </div>
    <!-- end of #sponsors-and-join-the-team section -->
</template>


<!-----------------------  SCRIPT -------------------------->
<script setup>
import Chart from 'primevue/chart';
import { ref, onMounted } from "vue";
import TraiButton from "../components/TraiButton.vue";
import TraiButton2 from "../components/TraiButton2.vue";

onMounted(() => {
  chart1Data.value = setChart1Data();
  chart2Data.value = setChart2Data();
  chart3Data.value = setChart3Data();
  chart4Data.value = setChart4Data();
  barChartOptions.value = setBarChartOptions();
  donughtChartOptions.value = setDonughtChartOptions();
  lineChartOptions.value = setLineChartOptions();
});

const chart1Data = ref();
const chart2Data = ref();
const chart3Data = ref();
const chart4Data = ref();
const barChartOptions = ref();
const donughtChartOptions = ref();
const lineChartOptions=ref();

const setChart1Data = () => {
  const documentStyle = getComputedStyle(document.documentElement);

  return {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: documentStyle.getPropertyValue('--p-blue-800'),
        borderColor: documentStyle.getPropertyValue('--p-indigo-500'),
        data: [65, 59, 80, 81, 56, 55, 40]
      },
      {
        label: 'My Second dataset',
        backgroundColor: documentStyle.getPropertyValue('--p-cyan-500'),
        borderColor: documentStyle.getPropertyValue('--p-gray-500'),
        data: [28, 48, 40, 19, 86, 27, 90]
      }
    ]
  };
};
const setChart2Data = () => {
  const documentStyle = getComputedStyle(document.body);

  return {
      datasets: [
          {
              data: [540, 325, 702],
              backgroundColor: [
              documentStyle.getPropertyValue('--p-indigo-500'), 
              documentStyle.getPropertyValue('--p-teal-500'), 
              documentStyle.getPropertyValue('--p-zinc-800')
            ],
              hoverBackgroundColor: [
              documentStyle.getPropertyValue('--p-indigo-400'), 
              documentStyle.getPropertyValue('--p-teal-400'), 
              documentStyle.getPropertyValue('--p-zinc-600')
            ]
          }
      ]
  };
};
const setChart3Data = () => {
  const documentStyle = getComputedStyle(document.body);

  return {
     
      datasets: [
          {
              data: [540, 325, 702],
              backgroundColor: [
              documentStyle.getPropertyValue('--p-blue-700'), 
              documentStyle.getPropertyValue('--p-indigo-900'), 
              documentStyle.getPropertyValue('--p-gray-900')
            ],
              hoverBackgroundColor: [
                documentStyle.getPropertyValue('--p-blue-400'), 
                documentStyle.getPropertyValue('--p-indigo-400'), 
                documentStyle.getPropertyValue('--p-gray-400')]
          }
      ]
  };
};
const setChart4Data = () => {
    const documentStyle = getComputedStyle(document.documentElement);

    return {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Dataset 1',
                fill: false,
                borderColor: documentStyle.getPropertyValue('--p-cyan-500'),
                yAxisID: 'y',
                tension: 0.4,
                data: [65, 59, 80, 81, 56, 55, 10]
            },
            {
                label: 'Dataset 2',
                fill: false,
                borderColor: documentStyle.getPropertyValue('--p-blue-700'),
                yAxisID: 'y1',
                tension: 0.4,
                data: [28, 48, 40, 19, 86, 27, 90]
            }
        ]
    };
};
const setBarChartOptions = () => {
  const documentStyle = getComputedStyle(document.documentElement);
  const textColor = documentStyle.getPropertyValue('--p-zinc-100');
  const textColorSecondary = documentStyle.getPropertyValue('--p-blue-500');
  const surfaceBorder = documentStyle.getPropertyValue('--p-border-zinc-900');

  return {
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
          legend: {
              labels: {
                  color: textColor
              }
          }
      },
      scales: {
          x: {
              ticks: {
                  color: textColorSecondary,
                  font: {
                      weight: 500
                  }
              },
              grid: {
                  display: false,
                  drawBorder: false
              }
          },
          y: {
              ticks: {
                  color: textColorSecondary
              },
              grid: {
                  color: surfaceBorder,
                  drawBorder: false
              }
          }
      }
  };
}
const setDonughtChartOptions = () => {
  const documentStyle = getComputedStyle(document.documentElement);
  const textColor = documentStyle.getPropertyValue('--p-text-color');

  return {
    plugins: {
      legend: {
        labels: {
          cutout: '60%',
          color: textColor
        }
      }
    }
  };
};
const setLineChartOptions = () => {
  const documentStyle = getComputedStyle(document.documentElement);
  const textColor = documentStyle.getPropertyValue('--p-text-color');
  const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
  const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');

  return {
    stacked: false,
    maintainAspectRatio: false,
    aspectRatio: 0.6,
    plugins: {
      legend: {
        labels: {
          color: textColor
        }
      }
    },
    scales: {
      x: {
        ticks: {
          color: textColorSecondary
        },
        grid: {
          color: surfaceBorder
        }
      },
      y: {
        type: 'linear',
        display: true,
        position: 'left',
        ticks: {
          color: textColorSecondary
        },
        grid: {
          color: surfaceBorder
        }
      },
      y1: {
        type: 'linear',
        display: true,
        position: 'right',
        ticks: {
          color: textColorSecondary
        },
        grid: {
          drawOnChartArea: false,
          color: surfaceBorder
        }
      }
    }
  };
}
</script>

<!----------------------------- STYLE SCOPED ------------------------------>
<style scoped>
.glassEffect{
  background: rgba(0, 78, 212, 0.11);
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(8.1px);
-webkit-backdrop-filter: blur(8.1px);
border: 1px solid rgba(3, 58, 153, 0.27);
}

</style>