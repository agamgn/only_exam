import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/student',
      component: () => import('@/components/student/index'),
      children: [
        {path:"/",component: ()=> import('@/components/student/testpaper/Testpaper')},
        {path:"/practice",component: ()=> import('@/components/student/practice/Practice')},
        {path:"/record",component: ()=> import('@/components/student/record/Record')},
        {path:"/message",component: ()=> import('@/components/student/message/Message')},
        {path: '/manager', component: () => import('@/components/student/manager/Manager')},
      ]
    }
  ]
})
