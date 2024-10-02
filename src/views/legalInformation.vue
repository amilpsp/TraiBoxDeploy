<template>
  <div class="flex items-baseline justify-evenly gap-5 text-center py-16 md:py-32 min-h-screen">

    <section id="side-menu" class="text-left">
      <ol v-for="node in treeNodes">
        <li :key="node.title">{{node.title}}</li>
        <ol v-for="item in node.content">
          <li :key="item">
            {{item.title}}
          </li>
        </ol>
      </ol>
    </section>

    <section class="flex flex-col text-left max-w-[60vw] gap-24">
      
      <div v-for="node in treeNodes" :key="node.title">
        <article class="flex flex-col gap-5">
          <h1 :id="node.id" class="leading-tight">{{ node.title }}</h1>

          <div v-for="child in node.content" :key="child.title || child">
            
            <h2 v-if="child.title">{{ child.title }}</h2>
            <p v-if="typeof child === 'string'" class="childIsString">{{ child }}</p>
            
            <div v-if="Array.isArray(child)">
              <p v-for="grandchild in child" class="grandchild pl-2">{{grandchild}}</p>
            </div>


            <div v-if="Array.isArray(child.content)">

              <div v-for="subContent in child.content" :key="subContent" >

                <h3 v-if="subContent.title">{{subContent.title}}</h3>
                <div v-if="Array.isArray(subContent.content)">
                  <p v-for="item in subContent.content" class="sub-content-item">{{item}}</p>
                </div>
                
                <p v-if="typeof subContent==='string'" class="subContent" >{{ subContent }}</p>
                <div v-else-if="Array.isArray(subContent)">
                  <p v-for="subItem in subContent" class="subItem pl-4">{{subItem}}</p>
                </div>
                
              </div>

            </div>

            <p class="child-content-string" v-if="typeof child.content === 'string'">{{ child.content }}</p>


          </div>
        </article>
      </div>
    </section>
  </div>
  <!-- end of router-view-container -->
</template>
<script setup>

const treeNodes=[
  {
    id:'data',
    title:'Data Protection Policy',
    content:[
      'At TRAIBOX TECHNOLOGIES, LDA, we are committed to protecting the privacy and personal data of our customers and website visitors. This policy explains how we collect, use, and protect your personal information in accordance with the General Data Protection Regulation (GDPR) and other applicable laws.',
      {
        title:"Why we Collect your Data",
        content:[
          'Your personal data may be used for the following purposes:',
          [
            '- To respond to inquiries',
            '- To improve our services and website functionality',
            '- To send marketing materials, if consented to'
          ]
        ]
      },
      {
        title:"What Data We Collect",
        content:[
          'We may collect the following personal data:', 
          [
            '- Name',
            '- Email address',
            '- IP address',
            '- Usage data and cookies'
          ]
        ],
      },
      {
        title:"Data Retention",
        content:[
          'We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected or as required by law.',
          {
            title:'Your Rights:',
            content:[
              'You have the right to access, correct, or delete your personal data. You may also object to or restrict our processing of your data.For any concerns or questions regarding data protection, please contact us at:',
              'info@traibox.com'
            ]
        },
        ]
      },
      {
        title:"Data Controler",
        content:[
          'TRAIBOX TECHNOLOGIES,',
          'LDANIPC: 518206521',
          'Sede: PCI - Creative Science Park,',
          'Via do Conhecimento, Aveiro'
        ]
      },
    ]
  },
  {
    id:'cookies',
    title:'Cookie Management',
    content:[
      'This website uses cookies to enhance the user experience and ensure optimal functionality. By continuing to browse our site, you consent to the use of cookies in accordance with this policy.',
      {
        title:'What are Cookies?',
        content:'Cookies are small data files that are stored in your device when you visit our website. They help us analyze website traffic, personalize content, and improve site performance.'
      },
      {
        title:'Types of Cookies we use',
        content:
        [
          '- Essential Cookies: Necessary for the functioning of the website.',
          '- Analytical Cookies: Help us track usage to improve user experience.',
          '- Marketing Cookies: Used to personalize advertisements and measure their effectiveness.'
        ],
      },
      'You can control or delete cookies via your browser settings; however, disabling cookies may affect your experience on our website. For more information on cookes, please email: cookies@traibox.com'
    ],  
  },
  {
    id:'terms',
    title:'Terms of Service',
    content:[
      {
        title:'Acceptance of Terms',
        content:'By using this website and the services provided by TRAIBOX TECHNOLOGIES, LDA, you agree to comply with these Terms of Service. If you do not agree,you should refrain from using our website.',
      },
      {
        title:'Use of Services',
        content:'Our services are intended for users interested in ESG solutions for international trade. All information provided on the website is for informational purposes only and does not constitute a legally binding offer.',
      },
      {
        title:'User Obligations',
        content:'You agree to use our website in compliance with applicable laws and not to engage in any unlawful or harmful activities. We reserve the right to suspend or terminate your access if you violate these terms.',
      },
      {
        title:'Limitation of Liability',
        content:'TRAIBOX TECHNOLOGIES, LDA will not be held liable for any direct, indirect, incidental or consequential damages arising from the use or inability to use the website or our services.',
      },
      {
        title:'Ammendments',
        content:'We reserve the right to modify these Terms of Services at any time. The updated version will be posted on this page with the new effective date. If you have any questions regarding these terms, please contact us at: info@traibox.com',
      },
    ]
  },
  {
    id:'legal',
    title:'Legal Information',
    content:[
      'This website (www.traibox.com) is owned and operated by TRAIBOX TECHNOLOGIES, LDA, a company incorporated in Portugal with the following registered details:',
      [
        '- Company Name: TRAIBOX TECHNOLOGIES, LDA',
        '- NIPC: 518206521',
        '- Legal Form: SOCIEDADE POR QUOTAS',
        '- Head Office Address: PCI - Creative Science Park, Via do Conhecimento, Aveiro, Portugal'
      ]
    ]
  }
]
</script>
<style scoped>

ol>ol{
  padding-left: 1rem;
}
</style>