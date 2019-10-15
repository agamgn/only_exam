<template>
    <div id="student">
        <el-row class="header">
            <el-col :span='24'>
                <ul class="list">
                    <li class="logo"><i class="iconfont icon-kaoshi"></i><span>Exam-Online</span></li>
                    <li><a href="javascript:;" @click="exam()">我的试卷</a></li>
                    <li><a href="javascript:;" @click="practice()">我的练习</a></li>
                    <li><a href="javascript:;" @click="record()">我的分数</a></li>
                    <li><a href="javascript:;" @click="message()">给我留言</a></li>
                    <li><a>待定</a></li>
                    <li class="right" @mouseenter="flag = !flag" @mouseleave="flag = !flag">
                        <a href="javascript:;"><i class="iconfont icon-Userselect icon"></i></a>
                        <div class="msg" v-if="flag">
                            <p @click="manage()">管理中心</p>
                            <p class="exit" @click="exit()">退出</p>
                        </div>
                    </li>
                </ul>
            </el-col>
        </el-row>
    <!-- 路由区域-->
    <div class="main">
      <router-view></router-view>
    </div>

    <v-footer></v-footer>

    </div>
</template>



<script>
import myFooter from "@/components/student/footer/Myfooter"
import {mapState} from 'vuex'
export default {
  components: {
    "v-footer": myFooter
  },
    data() {
        return {
            flag:false,
            user:[]
        }
    },
    methods: {
      exam() {
        let isPractice = false
            // this.$store.commit("practice", isPractice)
            this.$router.push({path:'/student'})
      },
      
      practice() {
        let isPractice = true
       // this.$store.commit("practice", isPractice)
        this.$router.push({path:'/practice'})
      },
      record() {
         let isPractice = true
       // this.$store.commit("practice", isPractice)
        this.$router.push({path:'/record'})
      },
      message() {
         let isPractice = true
       // this.$store.commit("practice", isPractice)
        this.$router.push({path:'/message'})
      },
       manage() {  //跳转到修改密码页面
        this.$router.push({path: '/manager'})
        },
         exit() {  //退出登录
      this.$router.push({path:"/"}) //跳转到登录页面
      this.$cookies.remove("cname") //清除cookie
      this.$cookies.remove("cid")
    }
    },
    computed:mapState(["isPractice"])
}
</script>


<style scoped>
#student .header {
  margin: 0 auto;
  padding: 0 50px;
  box-shadow: 0 0 10px 4px rgba(1,149,255,0.1);
  background-color: #fff;
}
#student .list {
    display: flex;
}
#student .list a {
  text-decoration: none;
  color: #334046;
}
#student .list li {
    list-style: none;
    line-height: 60px;
    height: 60px;
    padding: 0 20px;
    cursor: pointer;
}
#student .list li:hover {
    background-color: #0195ff;
    transition: all 2s ease;
}
#student .list li:hover a {
  color: #fff;
}

#student .list .right {
    margin-left: auto;
    position: relative;
}
#student .list li.right :hover a {
  color: #000;
}
.right .icon {
  margin-right: 6px;
}



#student .list .logo {
  display: flex;
  font-weight: bold;
  color: #2f6c9f;
}
#student .list .logo i {
  font-size: 50px;
}
.right .msg {
  text-align: center;
  position: absolute;
  top: 60px;
  left: 0px;
  display: flex;
  flex-direction: column;
  border-radius: 2px;
  border-bottom: 3px solid #0195ff;
  background-color: #fff;
}
.right .msg p {
  height: 40px;
  line-height: 40px;
  width: 105px;
}
.right .msg p:hover {
  background-color: #0195ff;
}
</style>

