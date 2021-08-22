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
        <el-menu-item index="4">数据社区</el-menu-item>
        <div class="box">
          <div class="child">
            <el-avatar class="avatar" :size="40" src="https://picsum.photos/id/1005/100/100"></el-avatar>
          </div>
        </div>
      </el-menu>
    </div>
  </div>
</template>

<script>
// import { createNamespacedHelpers } from "vuex";
// const { mapState, mapMutations, mapActions } = createNamespacedHelpers("login");

export default {
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
  background-color: #272834;
  // border-bottom: 1px solid #e6e6e6;
  // background-color: rgb(84, 92, 100);
}

.container {
  max-width: 80em !important;
  margin: auto !important;
}

::v-deep .el-menu-item.is-active {
  color: #fff !important;
  border-bottom-color: #409eff !important;
}

::v-deep .el-menu-item:hover {
  outline: 0 !important;
  color: #f4f7f9 !important;
}

::v-deep .el-menu,
.el-menu-item {
  background-color: #272834 !important;
}

::v-deep .el-menu.el-menu--horizontal {
  border-bottom: none !important;
}
//加以下两个伪类  .box高就变成20px; 否则只有 6px
.box {
  float: right;
}
.box:before{
	content:"";
	display:table;
}
.box:after{
	content:"";
	display:table;
	clear:both;
}
.child{
	height:6px;
	margin: 7px 0;
}

</style>