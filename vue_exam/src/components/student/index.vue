<template>
    <div id="student">
        <el-row class="header">
            <el-col :span='24'>
                <ul class="list">
                    <li class="logo"><i class="iconfont icon-kaoshi"></i><span>Exam-Online</span></li>
                    <li><a href="javascript:;" @click="exam()">我的试卷</li>
                    <li><a>我的练习</a></li>
                    <li><a>我的分数</a></li>
                    <li><a>给我留言</a></li>
                    <li><a>待定</a></li>
                    <li class="right" @mouseenter="flag = !flag" @mouseleave="flag = !flag">
                        <a href="javascript:;"><i class="iconfont icon-Userselect icon"></i></a>
                        <div class="msg" v-if="flag">
                            <p>管理中心</p>
                            <p class="exit">退出</p>
                        </div>
                    </li>
                </ul>
            </el-col>
        </el-row>
    <!--路由区域-->
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
            this.$store.commit("practice", isPractice)
            this.$router.push({path:'/student'})
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
</style>

