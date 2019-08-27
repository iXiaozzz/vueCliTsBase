import Vue from "vue";
import Router from "vue-router";

const Home = () => import("@/views/Home.vue");
const TestCenter = () => import("@/views/testCenter/Index.vue");
const About = () => import("@/views/About.vue");
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: About
    },
    {
      path: "/testCenter",
      name: "TestCenter",
      component: TestCenter,
      meta: {
        title: "typescript base项目"
      }
    }
  ]
});
