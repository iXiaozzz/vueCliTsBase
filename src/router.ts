import Vue from "vue";
import Router from "vue-router";

const TestCenter = () => import("@/views/testCenter/Index.vue");
const Learn = () => import("@/views/learn/Index.vue");
const VueEmit = () => import("@/views/learn/VueEmit.vue");
const Vuex = () => import("@/views/learn/Vuex.vue");
const VueApi = () => import("@/views/learn/VueApi.vue");

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "learn",
      component: Learn
    },
    {
      path: "/testCenter",
      name: "TestCenter",
      component: TestCenter,
      meta: {
        title: "typescript base项目"
      }
    },
    {
      path: "/learn",
      name: "Learn",
      component: Learn,
      meta: {
        title: "typescript base项目"
      },
      children: [
        {
          path: "/learn/vueApi",
          name: "VueApi",
          component: VueApi,
          meta: {
            title: "vue的api"
          }
        },
        {
          path: "/learn/vueEmit",
          name: "VueEmit",
          component: VueEmit
        },
        {
          path: "/learn/Vuex",
          name: "Vuex",
          component: Vuex
        }
      ]
    }
  ]
});
