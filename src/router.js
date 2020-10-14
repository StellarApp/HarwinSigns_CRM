import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import RegisterProject from "./views/RegisterProject.vue";
import Projects from "./views/Projects.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    }, 
    {
      path:"/login",
      name: "login",
      component: Login
    },
    {
      path:"/register-project",
      name:"RegisterProjectt",
      component: RegisterProject
    },
    {
      path:"/projects",
      name:"projects",
      component: Projects
    },
    {
      path:"*",
      redirect: "/"
    }
  ]
});