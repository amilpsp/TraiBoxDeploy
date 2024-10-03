import { createRouter, createWebHashHistory } from "vue-router";

import HomeView from "./views/home.vue";
import AboutView from "./views/about.vue";
import OurProductView from "./views/ourProduct.vue"
import ContactView from "./views/contact.vue";
import BlogView from "./views/blog.vue";
import TermsOfServiceView from "./views/termsOfService.vue";
import PrivacyPolicyView from "./views/privacyPolicy.vue"
import ComplianceCertificationsView from "./views/complianceCertifications.vue"
import GetStartedView from "./views/getStarted.vue";

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
      component: ContactView,
      path: "/contact",
    },
    {
      component: BlogView,
      path: "/blog",
    },
    {
      component: TermsOfServiceView,
      path: "/terms-of-service",
    },
    {
      component: PrivacyPolicyView,
      path: "/privacy-policy",
    },
    {
      component: ComplianceCertificationsView,
      path: "/compliance-certifications",
    },
    {
      component: GetStartedView,
      path: "/get-started",
    },
  ],
});
