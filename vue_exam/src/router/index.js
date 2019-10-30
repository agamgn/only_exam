import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login', //登录界面
      component: () => import('@/components/common/Login')
    },
    {
      path: '/student',
      component: () => import('@/components/student/Index'),
      children: [
        {path:"/",component: ()=> import('@/components/student/testpaper/Testpaper')},
        {path:"/practice",component: ()=> import('@/components/student/practice/Practice')},
        {path:"/record",component: ()=> import('@/components/student/record/Record')},
        {path:"/message",component: ()=> import('@/components/student/message/Message')},
        {path: '/manager', component: () => import('@/components/student/manager/Manager')},
      ]
    },
    {
      path: '/index', //教师主页
      component: () => import('@/components/admin/Index'),
      children: [
        
      ]
    }
  ]
})
