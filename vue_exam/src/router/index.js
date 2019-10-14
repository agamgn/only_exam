import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/student',
      component: () => import('@/components/student/index'),
      // children: [
      //   {path:"/",component: ()=> import('@/components/student/myExam')}
      // ]
    }
  ]
})
