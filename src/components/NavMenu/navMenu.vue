<template>
  <div class="nav-menu">
    <div class="container">
      <!-- <h1>hello</h1> -->
      <!-- <div class="blur-bg"></div> -->
      <!-- 使用element-ui的导航栏组件 -->
      <el-menu
        :default-active="activeIndex2"
        class="el-menu"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item index="1">主页</el-menu-item>
        <el-menu-item index="2">我的数据集</el-menu-item>
        <el-menu-item index="3">公开数据集</el-menu-item>
        <!-- <el-menu-item index="4">收藏夹</el-menu-item> -->
        <el-menu-item index="4">社区</el-menu-item>
        <!-- 搜索框 -->
        <div class="search-box">
          <div class="child">
            <el-input
              placeholder="请输入内容"
              v-model="input3"
              class="input-with-select"
            >
              <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
          </div>
        </div>
        <!-- <el-menu-item index="5">
        </el-menu-item> -->
        <div class="right-box">
          <div class="child">
            <!-- <el-avatar class="avatar" :size="40" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar> -->
            <a href="">
              <el-avatar class="avatar" :size="40" src="">user</el-avatar>
            </a>
          </div>
        </div>
        <div class="right-box">
          <div class="child">
            <el-button round class="el-right">发布数据集</el-button>
          </div>
        </div>
        <el-menu-item index="6" class="el-right">收藏夹</el-menu-item>
        <el-menu-item index="7" class="el-right"
          >消息<i class="el-icon-message-solid"></i
        ></el-menu-item>
        <el-menu-item index="8" class="el-right">会员中心</el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
// import { createNamespacedHelpers } from "vuex";
// const { mapState, mapMutations, mapActions } = createNamespacedHelpers("login");
// import Search from "../search/Search.vue";
export default {
  components: {
    // Search,
  },
  data() {
    return {
      activeIndex2: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../style/mixin";

.nav-menu {
  background-color: #fff;
  border-bottom: 1px solid rgba(229, 229, 234, 0.3);
  // border-bottom: 1px solid #e6e6e6;
  // background-color: rgb(84, 92, 100);
}
// 让导航栏的内容整体位于网页中间,不过在element-ui的Container容器布局时会失效
.container {
  max-width: 80em !important;
  margin: auto !important;
}

.el-button {
  border: 1px solid #409eff;
}
.el-input {
  width: 450px !important;
  height: 20px !important;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
::v-deep .el-right {
  float: right !important;
}

::v-deep .el-menu-item.is-active {
  color: #409eff !important;
  border-bottom-color: #409eff !important;
}

::v-deep .el-menu-item:hover {
  outline: 0 !important;
  color: #409eff !important;
}

::v-deep .el-menu-item {
  margin: 0 12px !important;
  padding: 0 2px !important;
  color: #2f3035 !important;
}
::v-deep .el-menu,
.el-menu-item {
  background-color: #fff !important;
}

::v-deep .el-menu.el-menu--horizontal {
  border-bottom: none !important;
}
//加以下两个伪类  .box高就变成20px; 否则只有 6px
.right-box {
  float: right;
  margin-left: 20px;
}
.search-box {
  float: left;
  margin-left: 45px;
}
.right-box:before {
  content: "";
  display: table;
}
.right-box:after {
  content: "";
  display: table;
  clear: both;
}
.child {
  height: 6px;
  margin: 10px 0;
}
</style>