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
        {path: '/examMsg', component: () => import('@/components/student/exammsg/ExamMsg')},
      ]
    },
    {path: '/answer',component: () => import('@/components/student/answer/Answer')},
    {
      path: '/index', //教师主页
      component: () => import('@/components/admin/Index'),
      children: [
          // {
          //   path: '/', //首页默认路由
          //   component: () => import('@/components/common/hello')
          // },
          {
            path:'/grade', //学生成绩
            component: () => import('@/components/charts/grade')
          },
          {
            path: '/selectExamToPart', //学生分数段
            component: () => import('@/components/teacher/selectexamtopart/SelectExamToPart')
          },
          {
            path: '/scorePart',
            component: () => import('@/components/charts/scorePart')
          },
          {
            path: '/allstudentsgrade', //所有学生成绩统计
            component: () => import('@/components/teacher/allstudentsgrade/AllStudentsGrade')
          },
          {
            path: '/examdescription', //考试管理功能描述
            component: () => import('@/components/teacher/examdescription/ExamDescription')
          },
          {
            path: '/queryexam', //查询所有考试
            component: () => import('@/components/teacher/queryexam/QueryExam')
          },
          {
            path: '/addExam', //添加考试
            component: () => import('@/components/teacher/addexam/AddExam')
          },
          {
            path: '/answerdescription', //题库管理功能介绍
            component: ()=> import('@/components/teacher/Answerdescription/AnswerDescription')
          },
          {
            path: '/queryanswer', //查询所有题库
            component: () => import('@/components/teacher/queryanswer/QueryAnswer')
          },
          {
            path: '/addanswer', //增加题库主界面
            component: () => import('@/components/teacher/addanswer/AddAnswer')
          },
          {
            path: '/addanswerchildren', //点击试卷跳转到添加题库页面
            component: () => import('@/components/teacher/addanswerchildren/AddAnswerChildren')
          },
          {
            path: '/studentmanage', //学生管理界面
            component: () => import('@/components/teacher/studentmanage/StudentManage')
          },
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
