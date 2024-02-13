import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import i18n from "@/plugins/VueI18n";
import InfoFedTemporary from "../views/InfoFedTemporary.vue";

Vue.use(VueRouter);

const federation = localStorage.getItem("federation");

const routes = [
  {
    path: "/",
    redirect: `/${i18n.locale}`,
  },
  {
    path: `/${i18n.locale}`,
    component: () => import("../views/parentRoute.vue"),

    children: [
      {
        path: "",
        name: "home",
        component: federation ? InfoFedTemporary : HomeView,
      },
      {
        path: "federations",
        name: "federations",
        component: () => import("../views/FederationView.vue"),
      },
      {
        path: "page/:alt",
        name: "defaultPage",
        component: () => import("../views/DefaultLandView.vue"),
      },
      {
        path: "news",
        component: () => import("../views/parentRoute.vue"),
        children: [
          {
            path: "",
            name: "news",
            component: () => import("../views/NewsView.vue"),
            meta: { breadcrumb: "Товар" },
          },
          {
            path: ":id",
            name: "news-detail",
            component: () => import("../views/NewsDetailView.vue"),
            meta: { breadcrumb: "Товар" },
          },
        ],
      },
      // {
      //   path: "news/:id",
      //   name: "newsDetail",
      //   component: () => import("../views/NewsDetailView.vue"),
      // },
      {
        path: "athletes",
        name: "athletes",
        component: () => import("../views/AthletesView.vue"),
      },
      {
        path: "search",
        name: "search",
        component: () => import("../views/SearchView.vue"),
      },
      {
        path: "athletes/:id",
        name: "athletes-detail",
        component: () => import("../views/AthleteDetailView.vue"),
      },
      {
        path: "games",
        name: "games",
        component: () => import("../views/GamesView.vue"),
      },
      {
        path: "games-detail/:id",
        name: "games-detail",
        component: () => import("../views/GamesDetailView.vue"),
      },
      {
        path: "videos",
        name: "videos",
        component: () => import("../views/VideosView.vue"),
      },
      {
        path: "videos/:id",
        name: "videosDetail",
        component: () => import("../views/VideosDetailView.vue"),
      },
      {
        path: "accreditation",
        name: "accreditation",
        component: () => import("../views/AccreditationView.vue"),
      },
      {
        path: "accreditation/:id",
        name: "accreditationDetail",
        component: () => import("../views/AccreditationDetailView.vue"),
      },
      {
        path: "about/:alt",
        name: "about",
        component: () => import("../views/AboutView.vue"),
      },
      {
        path: "photos",
        name: "photos",
        component: () => import("../views/PhotosView.vue"),
      },
      {
        path: "photos/:id",
        name: "photosDetail",
        component: () => import("../views/PhotosDetailView.vue"),
      },
      {
        path: "page/:alt",
        name: "page",
        component: () => import("../views/InformationAboutOlympicView.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      if (document.querySelector(to.hash).getBoundingClientRect()) {
        const y =
          document.querySelector(to.hash).getBoundingClientRect().top +
          window.pageYOffset +
          -70;

        window.scrollTo({ top: y, behavior: "smooth" });
      }
    } else {
      return document
        .getElementById("app")
        .scrollIntoView({ behavior: "smooth" });
    }
  },
});

export default router;
