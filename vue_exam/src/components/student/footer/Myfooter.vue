<template>
 <footer id="footer">
    <ul>
      <li><a href="javascript:;">关于我们</a></li>
      <li><a href="javascript:;">免责声明</a></li>
      <li><a href="javascript:;">使用协议</a></li>
      <li>备案号*******号</li>
      <li>@Copyright 2019. ALL Rights Reserved</li>
    </ul>
  </footer>
</template>


<script>
export default {
    name: "myFooter"
}
</script>

<style scoped>
#footer {
    background-color: #eee;
}
#footer ul {
     display: flex;
     border-top: 1px solid #d5d5d5;
     margin-top: 50px;
     justify-content: center;
  height: 80px;
  line-height: 80px;
     
}
#footer ul li {
margin-right: 20px;
  color: #919698;
  font-size: 14px;

}
#footer a {
  color: #919698;
  font-size: 14px;
}
</style>