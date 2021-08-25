<template>
  <div id="app" class="app">
    <el-container>
      <el-aside width="200px">
        <!-- logo框 -->
        <div class="logo-box">
          <div class="logo">数据园</div>
        </div>
        <!-- 分类栏 -->
        <app-asider></app-asider>
      </el-aside>
      <el-container>
        <el-header>
          <!-- 头部 -->
          <app-header></app-header>
        </el-header>
        <el-main>
          <router-view>
            <!-- Main -->
            <Main />
          </router-view>
        </el-main>
        <!-- Footer -->
        <el-footer>
          <app-footer></app-footer>
        </el-footer>
      </el-container>
    </el-container>
    <!-- <app-header></app-header> -->
  </div>
</template>

<script>
// 在header中并不需要export name:'AppHeader',只需在使用该组件的时候为它命名即可
// 在Vue中,驼峰式命名在template中用小写+'-'的方式连接,Vue中是不区分大小写的
import AppHeader from "./components/head/header.vue";
import AppAsider from "./components/Aside/Asider.vue";
import AppFooter from "./components/Footer/footer.vue"
// 测试引入Main
import Main from "./pages/Main.vue";
export default {
  name: "App",
  components: {
    AppHeader,
    AppAsider,
    AppFooter,
    Main,
  },
};
</script>

<style lang="scss">
@import "../src/style/common";
@import "../src/style/mixin";
//用于调式页面布局,调好后将删除
::v-deep .el-main {
  border-left: none !important;
}
.el-container {
  // border-left: 1px solid !important;
}
.el-header {
  padding-left: 0px !important;
  padding-right: 0px !important;
  position: sticky !important;
  top: 0;
  z-index: 1;
  margin-left: 200px;
  // margin-bottom:40px;
  // border-left:  #d3dce6 1px solid;
}
.el-aside {
  position: fixed !important;
  // overflow: hidden !important;
  height: 100%;
  z-index: 1;
  width: 200px;
  // overflow:hidden;
  border-right:  #d3dce6 1px solid;
}
// 隐藏侧边栏的滚动条
.el-aside::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}
.el-main {
  margin-left: 200px;
}
.el-footer {
  margin-left: 200px;
}
/* 让box里的div左右居中 */
.logo-box {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}
/* 让logo里的文字上下左右居中 */
.logo {
  width: 60px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
}
.el-footer {
  background-color: #f5f7f9;
}
</style>
