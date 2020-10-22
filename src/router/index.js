import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/Home'
import lazy from '@/components/evaluateList'


Vue.use(Router)
let routes = [
  {
    path: '/',
    name: 'HelloWorld',
    redirect: "/index",
    children: [{
      path: 'index',
      name: '养生咨询',
      hidden: false,
      meta: {
        title: '养生咨询',
      },
      component: HelloWorld

    }]
  },
  {
    path: '/lazy',
    name: 'lazy',
    component: lazy
  }
]

let Index = () =>
  import('@/components/Index1')
routes = routes.map(item => {
  if (!item.component) {
    item.component = Index
  }
  return item
})
export default new Router({
  routes: routes
})
