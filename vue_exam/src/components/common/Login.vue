<!-- 用户登录界面 -->
<template>
  <div id="login">
    <div class="bg"></div>
    <el-row class="main-container">
      <el-col :lg="8" :xs="16" :md="10" :span="10">
        <div class="top">
          <i class="iconfont icon-kaoshi"></i><span class="title">在线考试系统</span>
        </div>
        <div class="bottom">
          <div class="container">
            <p class="title">账号登录</p>
            <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
              <!-- <el-form-item label="用户名">
                <el-input v-model.number="formLabelAlign.username" placeholder="请输入用户名"></el-input>
              </el-form-item>-->
          <!-- 拍照 -->
            <video id="video" width="320" height="320" v-show="!logins"></video>   
            <div id="photo" v-show='logins'></div>          
       
            <canvas id="canvas" style="display:none" width="320" height="320"></canvas> 

  <el-form-item label="用户Id">
                <el-input v-model="formLabelAlign.student_ID" placeholder="请输入用户Id" ></el-input>
              </el-form-item> 

              <div class="submit">
                <el-button id="snap" type="primary" class="row-login" v-show="!logins" @click="toggle">拍照</el-button>
                <el-button type="primary" class="row-login" @click="login()" v-show='logins'>登录</el-button>
              </div>
              <div class="options">
                <p class="find"><a href="javascript:;">找回密码</a></p>
                <div class="register">
                  <span>没有账号?</span>
                  <span><a href="javascript:;" @click="registers()">去注册</a></span>
                </div>
              </div>
            </el-form>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row class="footer">
      <el-col>
        <p class="msg2">版权所有 ©2019 </p>
      </el-col>
    </el-row>
    <section class="remind">
      <span>管理员账号：9527</span>
      <span>教师账号：20081001</span>
      <span>密码都是：123456</span>
    </section>
  </div>
</template>

<script>
import store from '@/vuex/store'
import {mapState} from 'vuex'
export default {
  store,
  name: "login",
  data() {
    return {
      logins:false,
      role: 2,
      labelPosition: 'left',
      // formLabelAlign: {
      //   username: '20154084',
      //   password: '123456'
      // }
      formLabelAlign:{
        imageBase:"",
        student_ID:0
      }
    }
  },
  methods: {
    toggle() {
      this.logins=!this.logins;
    },
    //用户登录请求后台处理
    login() {
      console.log(...this.formLabelAlign)
      console.log("登录操作执行-------");
      this.$axios({
        url: `/api/user/manager/searchFace`,
        method: 'post',
        data: {
          ...this.formLabelAlign
        }
        
      }).then(res=>{
       console.log(res)
        let resData = res.data.data
        
        if(resData == null) { //错误提示
          this.$message({
            showClose: true,
            type: 'error',
            message: '用户名或者密码错误'
          })
        }
      })
    },
    clickTag(key) {
      this.role = key
    },
    takePhotos() {
     
      //这段代 主要是获取摄像头的视频流并显示在Video 签中
      var canvas = document.getElementById("canvas"),
      context = canvas.getContext("2d"),
      video = document.getElementById("video");
      function successCallback(stream) {
        // Set the source of the video element with the stream from the camera
        if (video.mozSrcObject !== undefined) {
          video.mozSrcObject = stream;
        } else {
          video.srcObject = stream;
        }
        video.play();
      }
    
      function errorCallback(error) {
         alert('错误代码: [CODE ' + error.code + ']');
        // Display a friendly "sorry" message to the user
      }
     
      navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
      window.URL = window.URL || window.webkitURL || window.mozURL || window.msURL;
     
      // Call the getUserMedia method with our callback functions
      if (navigator.getUserMedia) {
        navigator.getUserMedia({video: true}, successCallback, errorCallback);
      } else {
        alert('浏览器不支持getUserMedia.');
        // Display a friendly "sorry" message to the user
      }
      //这个是拍照按钮的事件，  
       let that = this
      document.getElementById("snap").onclick = function(){
       
      context.drawImage(video, 0, 0, 320, 320);     
      //获取浏览器页面的画布对象
      var canvans = document.getElementById("canvas");
      //以下开始编 数据   
      var imgData = canvans.toDataURL(); 
      //将图像转换为base64数据
      var base64Data = imgData.substr(22); 
      //将获得的base64数据设置为photo的背景图
      // 此处传值有问题
      // that.$set(that.formLabelAlign,JSON.parse("str"))
      that.formLabelAlign.imageBase=base64Data
      document.getElementById("photo").style.backgroundImage="url(data:image/png;base64,"+base64Data+")";
      // document.getElementById("text").innerHTML=base64Data;
      }
    },
    registers() {
      this.$router.push({path:'/register'})
    }
  },

  computed: mapState(["userInfo"]),
  mounted() {
    this.takePhotos();
  }
}
</script>

<style lang="scss" scoped>
#photo {
  width:320px;
  height: 320px;
  // border-radius: 50%;
}
.remind {
  border-radius: 4px;
  padding: 10px 20px;
  display: flex;
  position: fixed;
  right: 20px;
  bottom: 50%;
  flex-direction: column;
  color: #606266;
  background-color: #fff;
  border-left: 4px solid #409eff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)
}
.container {
  margin-bottom: 32px;
}
.container .el-radio-group {
  margin: 30px 0px;
}
a:link {
  color:#ff962a;
  text-decoration:none;
}
#login {
  font-size: 14px;
  color: #000;
  background-color: #fff;
}
#login .bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  overflow-y: auto;
  height: 100%;
  background: url('../../assets/img/loginbg.png')center top / cover no-repeat;
  background-color: #b6bccdd1 !important;
}
#login .main-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
#login .main-container .top {
  margin-top: 100px;
  font-size: 30px;
  color: #ff962a;
  display: flex;
  justify-content: center;
}
#login .top .icon-kaoshi {
  font-size: 80px;
}
#login .top .title {
  margin-top: 20px;
}
#login .bottom {
  display:flex;
  justify-content: center;
  background-color:#fff;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
#login .bottom .title {
  text-align: center;
  font-size: 30px;
}
.bottom .container .title {
  margin: 30px 0px;;
}
.bottom .submit .row-login {
  width: 100%;
  background-color: #04468b;
  border-color: #04468b;
  margin: 20px 0px 10px 0px;
  padding: 15px 20px;
}
.bottom .submit {
  display: flex;
  justify-content: center;
}
.footer {
  margin-top: 50px;
  text-align: center;
}
.footer .msg1 {
  font-size: 18px;
  color: #fff;
  margin-bottom: 15px;
}
.footer .msg2 {
  font-size: 14px;
  color: #e3e3e3;
  margin-top: 70px;
}
.bottom .options {
  margin-bottom: 40px;
  color: #ff962a;
  display: flex;
  justify-content: space-between;
}
.bottom .options > a {
  color: #ff962a;
}
.bottom .options .register span:nth-child(1) {
  color: #8C8C8C;
}
</style>
