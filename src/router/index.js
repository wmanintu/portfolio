import Vue from 'vue'
import Router from 'vue-router'
import About from '@/views/About.vue'
import Project from '@/views/Project.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'about',
      component: About
    },
    {
      path: '/project',
      name: 'project',
      component: Project
    }
  ]
})
