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
          // {
          //   path: '/', //首页默认路由
          //   component: () => import('@/components/common/hello')
          // },
          // {
          //   path:'/grade', //学生成绩
          //   component: () => import('@/components/charts/grade')
          // },
          // {
          //   path: '/selectExamToPart', //学生分数段
          //   component: () => import('@/components/teacher/selectExamToPart')
          // },
          // {
          //   path: '/scorePart',
          //   component: () => import('@/components/charts/scorePart')
          // },
          // {
          //   path: '/allStudentsGrade', //所有学生成绩统计
          //   component: () => import('@/components/teacher/allStudentsGrade')
          // },
          {
            path: '/examdescription', //考试管理功能描述
            component: () => import('@/components/teacher/examdescription/ExamDescription')
          },
          {
            path: '/queryexam', //查询所有考试
            component: () => import('@/components/teacher/queryexam/QueryExam')
          },
          // {
          //   path: '/addExam', //添加考试
          //   component: () => import('@/components/teacher/addExam')
          // },
          {
            path: '/answerDescription', //题库管理功能介绍
            component: ()=> import('@/components/teacher/Answerdescription/AnswerDescription')
          },
          // {
          //   path: '/selectAnswer', //查询所有题库
          //   component: () => import('@/components/teacher/selectAnswer')
          // },
          // {
          //   path: '/addAnswer', //增加题库主界面
          //   component: () => import('@/components/teacher/addAnswer')
          // },
          // {
          //   path: '/addAnswerChildren', //点击试卷跳转到添加题库页面
          //   component: () => import('@/components/teacher/addAnswerChildren')
          // },
          // {
          //   path: '/studentManage', //学生管理界面
          //   component: () => import('@/components/teacher/studentManage')
          // },
          // {
          //   path: '/addStudent', //添加学生
          //   component: () => import('@/components/teacher/addStudent')
          // },
          // {
          //   path: '/teacherManage',
          //   component: () => import('@/components/admin/tacherManage')
          // },
          // {
          //   path: '/addTeacher',
          //   component: () => import ('@/components/admin/addTeacher')
          // }
      ]
    }
  ]
})
