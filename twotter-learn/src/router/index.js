// import { from } from 'core-js/core/array'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserProfile from "../views/UserProfile"
import AdminView from "../views/AdminView";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path:'/user/:userId',
    name:'UserProfile',
    component:UserProfile
  },

  {
    path:'/admin',
    name:'AdminView',
    component:AdminView,
    meta:{
      requiresAdmin:true
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(async (to,from,next)=>{
  const isAdmin = false;
  const requiresAdmin = to.matched.some(record => record.meta.requiresAdmin);

  if(requiresAdmin && !isAdmin) next({name:'Home'}) ;
  else next();
})

export default router
