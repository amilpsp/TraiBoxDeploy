<script setup>
import DropdownItem from '../components/DropdownItem.vue';

</script>
<template>
  <header class="h-[60vh] bg-gradient-to-br from-[#04052e] to-50% to-[#010108] flex flex-col justify-center items-center gap-5">
    <h1 class="text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-800 text-5xl">FAQ</h1>
    <p class="text-lg text-zinc-300">Frequenty asked questions</p>
  </header>
  <section class=" self-center mb-32 md:px-24 w-[90%] md:w-[95%] lg: max-w-4xl">
  <DropdownItem>
    <template #header>Q1. How can TraiBox integrate sustainability measures? </template>
    <span class="font-bold text-white">TraiBox</span> can integrate sustainability measures by incorporating features that help 
    businesses track, manage, and improve their environmental, social, and 
    governance (ESG) performance. Here's how TraiBox could implement these 
    measures:
    <ol class=" py-6 list-decimal font-semibold flex flex-col gap-9">
      <li>
        <span class="text-lg text-white">Carbon Footprint Tracking</span>
        <ul class="list-disc pl-6 pr-2 font-normal flex flex-col gap-8 py-6 glassEffect rounded-md mt-4">
          <li>
            <span class="font-bold text-white">How it Works:</span> TraiBox can offer tools that automatically calculate the carbon footprint of shipments, transportation, and supply chain activities. This data can be pulled from logistics providers, energy usage, and production records.
          </li>
          <li>
            <span class="font-bold text-white">Benefit:</span> Businesses can identify high-emission areas and take steps to reduce their environmental impact, ensuring compliance with international regulations and contributing to sustainability goals.
          </li>
        </ul>
      </li>
      <li>
        <span class="text-lg text-white">Sustainable Supply Chain Management</span>
        <ul class="list-disc pl-6 pr-2 font-normal flex flex-col gap-8 py-6 glassEffect rounded-md mt-4">
          <li>
            <span class="font-bold text-white">How it Works:</span> TraiBox can integrate sustainability metrics into the supply chain management process by tracking suppliers' sustainability practices and certifications (e.g., fair trade, renewable energy usage).
          </li>
          <li>
            <span class="font-bold text-white">Benefit:</span> Companies can ensure that their suppliers meet environmental standards, promoting ethical sourcing and reducing the risk of unsustainable practices within their supply chain. 
          </li>
        </ul>
      </li>
      <li>
        <span class="text-lg text-white">ESG Reporting Tools</span>
        <ul class="list-disc pl-6 pr-2 font-normal flex flex-col gap-8 py-6 glassEffect rounded-md mt-4">
          <li>
            <span class="font-bold text-white">How it Works:</span> Automated reporting tools can be built into TraiBox, generating detailed ESG reports for internal management and external stakeholders. These reports would align with global standards like GRI (Global Reporting Initiative) or SASB (Sustainability Accounting Standards Board).
          </li>
          <li>
            <span class="font-bold text-white">Benefit:</span> Businesses can efficiently communicate their sustainability efforts, making compliance with investor and regulatory demands easier and more transparent. 
          </li>
        </ul>
      </li>
      <li>
        <span class="text-lg text-white">Circular Economy Features</span>
        <ul class="list-disc pl-6 pr-2 font-normal flex flex-col gap-8 py-6 glassEffect rounded-md mt-4">
          <li>
            <span class="font-bold text-white">How it Works:</span> TraiBox could offer functionalities that encourage recycling and reusing materials within supply chains. For instance, users can track and optimize product life cycles and integrate reverse logistics solutions to return and recycle goods.
          </li>
          <li>
            <span class="font-bold text-white">Benefit:</span> Promotes a circular economy, reduces waste, and enhances long-term sustainability of the business. 
          </li>
        </ul>
      </li>
      <li>
        <span class="text-lg text-white">Sustainable Financing and Incentives</span>
        <ul class="list-disc pl-6 pr-2 font-normal flex flex-col gap-8 py-6 glassEffect rounded-md mt-4">
          <li>
            <span class="font-bold text-white">How it Works:</span> By integrating blockchain and AI, TraiBox can help businesses access green financing options. Companies meeting sustainability targets can be rewarded with better financing rates or receive tax incentives.
          </li>
          <li>
            <span class="font-bold text-white">Benefit:</span> Encourages companies to pursue sustainable operations while benefiting from financial advantages. 
          </li>
        </ul>
      </li>
      <li>
        <span class="text-lg text-white">Real-Time Sustainability Monitoring</span> 
        <ul class="list-disc pl-6 pr-2 font-normal flex flex-col gap-8 py-6 glassEffect rounded-md mt-4">
          <li>
            <span class="font-bold text-white">How it Works:</span> AI-powered dashboards can provide real-time data on a company's environmental performance, including emissions, resource usage, and compliance with sustainability targets.
          </li>
          <li>
            <span class="font-bold text-white">Benefit:</span> Offers immediate insights into sustainability metrics, allowing businesses to make timely adjustments and remain aligned with sustainability goals. 
          </li>
        </ul>
      </li>
    </ol>
    By integrating these sustainability measures, TraiBox can help businesses not only meet regulatory demands but also align with the growing expectations of environmentally-conscious consumers and investors. 
  </DropdownItem>
  <DropdownItem>
    <template #header>Q2. Can TraiBox help with regulatory compliance? </template>
    Yes, <span class="font-bold text-white">TraiBox</span>  can play a vital role in helping businesses achieve and maintain regulatory compliance across multiple markets. Here's how:
    <ol class="py-5 list-decimal font-semibold flex flex-col gap-9">
      <li>
        <span class="text-lg text-white">Automated Compliance Management</span>
        <ul class="list-disc pl-6 pr-2 font-normal flex flex-col gap-8 py-6 glassEffect rounded-md mt-4">
          <li>
            <span class="font-bold text-white">How it Works:</span> TraiBox can automatically track and update businesses on global trade regulations, tariffs, customs requirments, and export/import restrictions. The platform would continuoulsy monitor changes in legislation and update relevant compliance protocols.
          </li>
          <li>
            <span class="font-bold text-white">Benefit:</span> This reduces the risk of non-compliance, saving businesses from costly fines and delays. Automation ensures businesses always operate in line with the latest regulations.
          </li>
        </ul>
      </li>
      <li>
        <span class="text-lg text-white">Customs and Tariff Compliance</span>
        <ul class="list-disc pl-6 pr-2 font-normal flex flex-col gap-8 py-6 glassEffect rounded-md mt-4">
          <li>
            <span class="font-bold text-white">How it Works:</span> TraiBox can integrate with customs databases and provide businesses with accurate tariff codes, duties, and taxes for various countries. This helps companies calculate the correct fees for shipments.
          </li>
          <li>
            <span class="font-bold text-white">Benefit:</span>  Prevents issues with customs authorities and streamlines international shipments by ensuring the correct fees are paid upfront.
          </li>
        </ul>
      </li>
      <li>
        <span class="text-lg text-white">Trade Documentation</span>
        <ul class="list-disc pl-6 pr-2 font-normal flex flex-col gap-8 py-6 glassEffect rounded-md mt-4">
          <li>
            <span class="font-bold text-white">How it Works:</span> TraiBox can generate and manage all necessary trade documents, including bills of lading, certificates of origin, and shipping manifests. The platform could also offer e-signature functionality to 
            streamline documentation processes.
          </li>
          <li>
            <span class="font-bold text-white">Benefit:</span>  Automated generation and storage of trade documents reduces paperwork errors, improves record-keeping, and ensures businesses always have the correct documentation for audits or legal purposes.
          </li>
        </ul>
      </li>
      <li>
        <span class="text-lg text-white">GDPR and Data Protection</span>
        <ul class="list-disc pl-6 pr-2 font-normal flex flex-col gap-8 py-6 glassEffect rounded-md mt-4">
          <li>
            <span class="font-bold text-white">How it Works:</span> For businesses operating in Europe, TraiBox can help with <span class="font-bold">GDPR</span> (General Data Protection Regulation) compliance by securely handling customer and transactional data in accordance with the latest privacy laws.
          </li>
          <li>
            <span class="font-bold text-white">Benefit:</span>Ensures businesses avoid costly fines associated with data breaches and mishandling of personal data. TraiBox can help protect sensitive information through encryption and secure data management practices.
          </li>
        </ul>
      </li>
      <li>
        <span class="text-lg text-white"> ESG and Sustainability Compliance</span>
        <ul class="list-disc pl-6 pr-2 font-normal flex flex-col gap-8 py-6 glassEffect rounded-md mt-4">
          <li>
            <span class="font-bold text-white">How it Works:</span> TraiBox can track a company's sustainability efforts and compliance with <span class="font-bold">ESG</span> (Environmental, Social, and Governance) standards. The platform could monitor carbon emissions, supplier sustainability practices, and ethical labor practices.
          </li>
          <li>
            <span class="font-bold text-white">Benefit:</span> Companies can stay compliant with regional and international ESG regulations, report on their sustainability efforts, and avoid penalties for non-compliance.
          </li>
        </ul>
      </li>
      <li>
        <span class="text-lg text-white"> Sanctions and Trade Restrictions Monitoring</span> 
        <ul class="list-disc pl-6 pr-2 font-normal flex flex-col gap-8 py-6 glassEffect rounded-md mt-4">
          <li>
            <span class="font-bold text-white">How it Works:</span> TraiBox can flag potential violations by monitoring international sanctions and trade restrictions (e.g., embargoes) in real-time. It can alert businesses to risky transactions or partners that could lead to legal issues.
          </li>
          <li>
            <span class="font-bold text-white">Benefit:</span> Helps businesses avoid engaging in restricted or sanctioned trade activities, minimizing exposure to legal risks.
          </li>
        </ul>
      </li>
      <li>
        <span class="text-lg text-white">Audit-Ready Reports</span> 
        <ul class="list-disc pl-6 pr-2 font-normal flex flex-col gap-8 py-6 glassEffect rounded-md mt-4">
          <li>
            <span class="font-bold text-white">How it Works:</span>  TraiBox can generate audit-ready reports with detailed records of trade transactions, compliance steps, and documentation history. These can be shared with regulators during inspections or audits.
          </li>
          <li>
            <span class="font-bold text-white">Benefit:</span>  Streamlines the auditing process, making it easier for businesses to prove compliance and maintain their good standing with regulatory bodies.
          </li>
        </ul>
      </li>
    </ol>
    Incorporating these compliance tools, TraiBox helps businesses navigate complex trade regulations, reduce operational risks, and focus on expanding their global reach without worrying about regulatory barriers.
  </DropdownItem>
  <DropdownItem>
    <template #header>Q4. How does TraiBox handle data security?</template>
    <span class="font-bold text-white">TraiBox</span> takes data security very seriously and implements several robust measures to protect sensitive information. Here's how it handles data security:
    <ol class="pl-7 pr-2 pt-6 list-decimal font-semibold flex flex-col gap-10 py-6 glassEffect rounded-md my-5">
   
          <li>
            <span class="text-lg text-white">Technical and Organizational Measures:</span><br/><span class="font-normal"> TraiBox applies strong technical safeguards to protect personal data from unauthorized access, alteration, or disclosure. This includes encryption, secure data storage, and regular system audits to ensure the integrity of the data.</span>
          </li>
          <li>
            <span class="text-lg text-white">Compliance with Regulations:</span><br/> <span class="font-normal">TraiBox complies with global data protection standards such as GDPR. It guarantees the right to data rectification, deletion, or blocking of inaccurate or outdated data, ensuring that personal information is up-to-date and secure.</span>
          </li>
          <li>
            <span class="text-lg text-white">Automation and Centralization:</span ><br/><span class="font-normal"> The platform consolidates global trade data into a centralized system, which allows for automated monitoring of data compliance and security protocols. This reduces human error and ensures that data is consistently protected.</span>
          </li>
        </ol>
        Through these measures, TraiBox ensures that all personal and trade-related data is handled with the highest level of security and compliance.
  </DropdownItem>
  <DropdownItem>
    <template #header>Q5. Can TraiBox assist with trade finance?</template>
    Yes, <span class="font-bold text-white">TraiBox</span> is designed to assist businesses with trade finance, making the 
    process more efficient, secure, and transparent. Here's how it supports trade 
    finance:
    <ol class="py-5 list-decimal font-semibold flex flex-col gap-9">
      <li>
        <span class="text-lg text-white">Blockchain-Enabled Trade Finance</span>
        <ul class="list-disc pl-6 pr-2 font-normal flex flex-col gap-8 py-6 glassEffect rounded-md mt-4">
          <li>
            <span class="font-bold text-white">How it Works:</span> TraiBox integrates blockchain technology to provide secure, transparent, and tamper-proof transactions. Smart contracts can automate and verify financing agreements, reducing the need for intermediaries.
          </li>
          <li>
            <span class="font-bold text-white">Benefit:</span> This results in faster processing times, reduced paperwork, and lower transaction costs, making financing more accessible, especially for SMEs.
          </li>
        </ul>
      </li>
      <li>
        <span class="text-lg text-white">Real-Time Financial Tracking</span>
        <ul class="list-disc pl-6 pr-2 font-normal flex flex-col gap-8 py-6 glassEffect rounded-md mt-4">
          <li>
            <span class="font-bold text-white">How it Works:</span> TraiBox offers real-time tracking of financial transactions and trade operations, ensuring that companies and trade finance providers have up-to-date insights into cash flows and risk exposure.
          </li>
          <li>
            <span class="font-bold text-white">Benefit:</span>  This increases financial transparency and allows for better management of trade risks, improving trust between financiers and businesses.
          </li>
        </ul>
      </li>
      <li>
        <span class="text-lg text-white">Risk Management</span>
        <ul class="list-disc pl-6 pr-2 font-normal flex flex-col gap-8 py-6 glassEffect rounded-md mt-4">
          <li>
            <span class="font-bold text-white">How it Works:</span> TraiBox provides tools to assess the creditworthiness of trading partners and suppliers, ensuring that finance providers can make informed decisions and reduce the risk of defaults.
          </li>
          <li>
            <span class="font-bold text-white">Benefit:</span> Reduces risk for trade finance providers and creates more secure trading environments for businesses. 
          </li>
        </ul>
      </li>
      <li>
        <span class="text-lg text-white">Financing Options</span>
        <ul class="list-disc pl-6 pr-2 font-normal flex flex-col gap-8 py-6 glassEffect rounded-md mt-4">
          <li>
            <span class="font-bold text-white">How it Works:</span>  TraiBox can connect businesses with various financing solutions, such as letters of credit, supply chain financing, and invoice factoring.
          </li>
          <li>
            <span class="font-bold text-white">Benefit:</span> Offers flexible financing options to support the needs of different businesses, ensuring liquidity and capital flow throughout the supply chain.
          </li>
        </ul>
      </li>
    </ol>
    Through these features, TraiBox enhances the efficiencyy, security, and flexibility of trade finance operations, helping businesses manage cash flow and access funding more easily.
  </DropdownItem>
  <DropdownItem>
    <template #header>Q7. Can TraiBox integrate with other business software?</template>
    Yes, <span class="font-bold text-white">TraiBox</span>  is designed to integrate seamlessly with other business software, making it a flexible solution for global trade management. Here's how it can integrate with various systems:
    <ol class="py-5 list-decimal font-semibold flex flex-col gap-9">
      <li>
        <span class="text-lg text-white">ERP Integration (Enterprise Resource Planning)</span>
        <ul class="list-disc pl-6 pr-2 font-normal flex flex-col gap-8 py-6 glassEffect rounded-md mt-4">
          <li>
            <span class="font-bold text-white">How it Works:</span> TraiBox can connect with ERP systems like SAP, Oracle, or Microsoft Dynamics to sync critical business processes such as inventory management, procurement, and finance.
          </li>
          <li>
            <span class="font-bold text-white">Benefit:</span> This ensures smooth data flow across departments, reducing duplication of efforts and improving operational efficiency.
          </li>
        </ul>
      </li>
      <li>
        <span class="text-lg text-white">CRM Integration (Customer Relationship Management)</span>
        <ul class="list-disc pl-6 pr-2 font-normal flex flex-col gap-8 py-6 glassEffect rounded-md mt-4">
          <li>
            <span class="font-bold text-white">How it Works:</span> TraiBox integrates with CRMs like Salesforce or HubSpot to synchronize customer and trade data. This allows businesses to manage client relationships while overseeing trade operations from one platform.
          </li>
          <li>
            <span class="font-bold text-white">Benefit:</span> Improved customer insights, enabling personalized service and better trade management.
          </li>
        </ul>
      </li>
      <li>
        <span class="text-lg text-white">Supply Chain Management (SCM) Integration</span>
        <ul class="list-disc pl-6 pr-2 font-normal flex flex-col gap-8 py-6 glassEffect rounded-md mt-4">
          <li>
            <span class="font-bold text-white">How it Works:</span> TraiBox integrates with SCM platforms to streamline logistics, procurement, and supplier management. Data such as shipment status, inventory levels, and supplier performance can be synced across platforms.
          </li>
          <li>
            <span class="font-bold text-white">Benefit:</span> Enhances supply chain visibility and decision-making, ensuring timely deliveries and optimized logistics.
          </li>
        </ul>
      </li>
      <li>
        <span class="text-lg text-white">Accounting and Finance Software</span>
        <ul class="list-disc pl-6 pr-2 font-normal flex flex-col gap-8 py-6 glassEffect rounded-md mt-4">
          <li>
            <span class="font-bold text-white">How it Works:</span> TraiBox can integrate with accounting systems like QuickBooks or Xero to handle financial transactions, invoicing, and trade finance operations.
          </li>
          <li>
            <span class="font-bold text-white">Benefit:</span>  Facilitates accurate financial reporting and better cash flow management by linking trade transactions with accounting records.
          </li>
        </ul>
      </li>
      <li>
        <span class="text-lg text-white">Custom API Integration</span>
        <ul class="list-disc pl-6 pr-2 font-normal flex flex-col gap-8 py-6 glassEffect rounded-md mt-4">
          <li>
            <span class="font-bold text-white">How it Works:</span> TraiBox offers API access, allowing businesses to create custom integrations with specific software tailored to their operational needs.
          </li>
          <li>
            <span class="font-bold text-white">Benefit:</span> Provides flexibility to integrate TraiBox into unique workflows or 
            proprietary systems.
          </li>
        </ul>
      </li>
    </ol>
    By integrating with a variety of business software, TraiBox enhances operational efficiency and provides businesses with a comprehensive view of their trade operations, ensuring a smooth workflow across all departments.
  </DropdownItem>
  <DropdownItem>
    <template #header>Q8. Can TraiBox provide real-time trade analytics?</template>
    Yes, <span class="font-bold text-white">TraiBox</span>   provides real-time trade analytics through its advanced platform. Here's how it offers this functionality:
    <ol class="py-5 list-decimal font-semibold flex flex-col gap-9">
      <li>
        <span class="text-lg text-white"> AI-Powered Analytics</span>
        <ul class="list-disc pl-6 pr-2 font-normal flex flex-col gap-8 py-6 glassEffect rounded-md mt-4">
          <li>
            <span class="font-bold text-white">How it Works:</span>  TraiBox uses AI to analyze large volumes of trade data in real-time, delivering actionable insights and forecasts. This includes analyzing trends, identifying patterns, and providing recommendations to optimize trade operations.
          </li>
          <li>
            <span class="font-bold text-white">Benefit:</span>  Businesses can make data-driven decisions instantly, improving operational efficiency and profitability while minimizing risks.
          </li>
        </ul>
      </li>
      <li>
        <span class="text-lg text-white">Real-Time Dashboards</span>
        <ul class="list-disc pl-6 pr-2 font-normal flex flex-col gap-8 py-6 glassEffect rounded-md mt-4">
          <li>
            <span class="font-bold text-white">How it Works:</span> TraiBox offers customizable dashboards that display real-time metrics such as shipment tracking, trade volumes, financial transactions, and compliance statuses. These dashboards are accessible via desktop or mobile devices.
          </li>
          <li>
            <span class="font-bold text-white">Benefit:</span> Users get instant visibility into their global trade operations, enabling faster responses to any disruptions or opportunities.
          </li>
        </ul>
      </li>
      <li>
        <span class="text-lg text-white">Supply Chain Visibility</span>
        <ul class="list-disc pl-6 pr-2 font-normal flex flex-col gap-8 py-6 glassEffect rounded-md mt-4">
          <li>
            <span class="font-bold text-white">How it Works:</span> TraiBox provides real-time visibility into supply chain activities, from procurement to delivery, allowing businesses to track inventory levels, shipments, and supplier performance.
          </li>
          <li>
            <span class="font-bold text-white">Benefit:</span>  Businesses can reduce delays, avoid stockouts, and ensure smooth logistics by having up-to-date information on every stage of their supply chain.
          </li>
        </ul>
      </li>
      <li>
        <span class="text-lg text-white">Predictive Analytics</span>
        <ul class="list-disc pl-6 pr-2 font-normal flex flex-col gap-8 py-6 glassEffect rounded-md mt-4">
          <li>
            <span class="font-bold text-white">How it Works:</span> The platform can predict future trends in trade volumes, market demands, or potential disruptions using historical data and machine learning algorithms.
          </li>
          <li>
            <span class="font-bold text-white">Benefit:</span> Helps businesses prepare for market fluctuations, mitigate risks, and capitalize on emerging opportunities.
          </li>
        </ul>
      </li>
      <li>
        <span class="text-lg text-white">Compliance Monitoring</span>
        <ul class="list-disc pl-6 pr-2 font-normal flex flex-col gap-8 py-6 glassEffect rounded-md mt-4">
          <li>
            <span class="font-bold text-white">How it Works:</span> TraiBox continuously monitors compliance with global trade regulations in real-time, alerting businesses of potential issues before they arise.
          </li>
          <li>
            <span class="font-bold text-white">Benefit:</span> Reduces the risk of non-compliance, fines, or shipment delays, allowing businesses to operate smoothly across borders.
          </li>
        </ul>
      </li>
    </ol>
    With<span class="font-bold"> TraiBox's real-time trade analytics</span>, businesses can stay ahead of market changes, optimize their global trade operations, and improve overall decision-making.
  </DropdownItem>
</section>
</template>
<style scoped>
.glassEffect{
  background: rgba(0, 78, 212, 0.027);
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(8.1px);
-webkit-backdrop-filter: blur(8.1px);
border: 1px solid rgba(3, 58, 153, 0.27);
}
</style>