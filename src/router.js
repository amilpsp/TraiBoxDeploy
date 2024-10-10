import { createRouter, createWebHashHistory } from "vue-router";

import HomeView from "./views/home.vue";
import AboutView from "./views/about.vue";
import OurProductView from "./views/ourProduct.vue"
import ContactView from "./views/contact.vue";
import FAQView from "./views/faq.vue";
import InvestorsView from "./views/investors.vue";
import LegalInformationView from "./views/legalInformation.vue";
export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: HomeView,
      path: "/",
    },
    {
      component: AboutView,
      path: "/about-us",
    },
    {
      component: OurProductView,
      path: "/our-product",
    },
    {
      component: InvestorsView,
      path: "/investors",
    },
    {
      component: ContactView,
      path: "/contact",
    },
    {
      component: FAQView,
      path: "/faq",
    },
    {
      component: LegalInformationView,
      path: "/legal-information",
    },
  ],
});
