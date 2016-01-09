const Vue = require("vue")
const VueRouter = require("vue-router")
Vue.use(VueRouter)

const router = new VueRouter({
  history: false,
  saveScrollPosition: true
})

router.map({
  "/": {
    component: require("./template/home.vue"),
    title: "HOME"
  },
  "/about": {
    component: require("./template/index.vue"),
    title: "ABOUT"
  },
  "/area": {
    component: require("./template/archive.vue"),
    title: "AREA",
    subRoutes: {
      "/:id": {
        component: require("./template/modal.vue")
      }
    }
  },
  "/contact": {
    component: require("./template/article.vue"),
    title: "CONTACT"
  }
})

const App = Vue.extend({})

router.start(App, "#app")

// debug
window.router = router
