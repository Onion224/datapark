<template>
  <el-tabs>
    <el-tab-pane index="1" label="综合" name="first">综合</el-tab-pane>
    <el-tab-pane index="2" label="最新" name="second">最新</el-tab-pane>
    <el-tab-pane index="3" label="最热" name="third">最热</el-tab-pane>
    <el-tab-pane index="4" label="数据集大小" name="fourth">数据集大小</el-tab-pane>
  </el-tabs>
</template>
<script>
  export default {
    data() {
      return {
        activeIndex: '1'
      };
    }
  };
</script>

<style scoped>
/* 将tabs栏移动到右侧 */
/* ::v-deep .el-tabs {
    transform: translateX(1000px);
} */
</style>