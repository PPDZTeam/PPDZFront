import Vue from 'vue'
import Router from 'vue-router'
import index from '@/view/index.vue'

Vue.use(Router)

const router = new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    }
  ]
})

export default router;

router.beforeEach((to,from,next)=>{
    if(to.meta.title){
        document.title = to.meta.title
    }else{
        document.title = '碰碰点子'
    }
    next();
})
