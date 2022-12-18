import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  // {
  //   path: "/landscape",
  //   name: "Landscape",
  //   component: () => import("@/views/Landscape/index.vue"),
  // },
  // {
  //   path: "/landscape/:ScenicSpotID",
  //   name: "LandscapeId",
  //   component: () => import("@/views/Landscape/_id.vue"),
  // },
  // {
  //   path: "/foods",
  //   name: "Foods",
  //   component: () => import("@/views/Foods/index.vue"),
  // },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/",  // 若是找不到對應的頁面，就自動導到首頁。
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;