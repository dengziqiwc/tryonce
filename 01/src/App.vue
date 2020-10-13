<template>
  <el-container>
  <el-header style="height:100px">物联网管理平台</el-header>
  <el-container>
    <el-aside width="200px">
      <Aside></Aside>
    </el-aside>
    <el-container>
      <el-main>Main</el-main>
      <el-footer style="height:30px">Footer</el-footer>
    </el-container>
  </el-container>
</el-container>
</template>

<script>
import Aside from './components/aside'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    Aside
  }
}
</script>

<style>
  html,body,#app,.el-container{
    margin: 0px;
    padding:0px;
    height: 100%;
}

  .el-header{
    background-color: #B3C0D1;
    color: #333;
    text-align: left;
    line-height: 80px;
    font-size:20px;
    fonr-weight:bold;
  }
  .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 30px;
  }
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
