// import { from } from 'core-js/core/array'
import { createRouter, createWebHistory } from 'vue-router'
import {users} from '../assets/users'
import store from '../store'
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
  const user= store.state.User.user;

  if(!user) {
    await store.dispatch('User/setUser',users[0])
  }

  const isAdmin = false;
  const requiresAdmin = to.matched.some(record => record.meta.requiresAdmin);

  if(requiresAdmin && !isAdmin) next({name:'Home'}) ;
  else next();
})

export default router
