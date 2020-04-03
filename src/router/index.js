import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Kotlin from '@/components/Kotlin'
import Java from '@/components/Java'
import JavaScript from '@/components/JavaScript'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/Java/:id/:age/:weight',
      name: 'Java',
      props: true,
      component: Java
    },
    {
      path: '/Kotlin',
      name: 'Kotlin',
      component: Kotlin
    },
    {
      path: '/JavaScript',
      name: 'JavaScript',
      component: JavaScript
    }
  ]
})
