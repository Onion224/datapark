<template>
  <div class="datasets-box">
    <!-- 二级导航栏 -->
    <!-- <Tabs/> -->
    <!-- 第一行 -->
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="grid-content dataset">
          <a href="">
            <div class="dataset-img"><img class="datasetimg" src="https://tensorbay-dataset-prod.oss-cn-shanghai.aliyuncs.com/coverImages%2Fd984afcf439bf3d8e87124573bd944ee%2F3f68e2bd-8bc8-4839-95ff-f6f183a9d723%2Fcover-nuScenes.jpg" alt=""></div>
            <div class="dataset-details">中间部分</div>
          </a>
          <div class="dataset-sharebox">下部分</div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content dataset">
          <a href="">
            <div class="dataset-img"><img class="datasetimg" src="https://tensorbay-dataset-prod.oss-cn-shanghai.aliyuncs.com/coverImages%2Fd984afcf439bf3d8e87124573bd944ee%2Fa1cc8cac-4060-482f-9cce-88428ab9b878%2Fcover-BDD100K.jpg" alt=""></div>
            <div class="dataset-details">中间部分</div>
          </a>
          <div class="dataset-sharebox">下部分</div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content dataset">
          <a href="">
            <div class="dataset-img"><img class="datasetimg" src="https://tensorbay-dataset-prod.oss-cn-shanghai.aliyuncs.com/1737a1818fbad4ba044f0648d36aab75/4ef6f51465344563afa28a6b04afe4ba/0/1629522028357" alt=""></div>
            <div class="dataset-details">中间部分</div>
          </a>
          <div class="dataset-sharebox">下部分</div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content dataset">
          <a href="">
            <div class="dataset-img"><img class="datasetimg" src="https://tensorbay-dataset-prod.oss-cn-shanghai.aliyuncs.com/coverImages%2Fd984afcf439bf3d8e87124573bd944ee%2F752f9c9a-e650-4082-8956-2c75a423a486%2Fcover-MNIST.png" alt=""></div>
            <div class="dataset-details">中间部分</div>
          </a>
          <div class="dataset-sharebox">下部分</div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// 导入二级导航栏
// import Tabs from '../components/Tabs/Tabs.vue'
export default {
  components: {
    // Tabs
  }
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: #000;
}

.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 20px;
  // min-height: 200px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.dataset {
  background-color: #99a9bf;
  // height: 150px !important;
}
.dataset-img {
  height: 100px;
  // 用于调式的边框
  // border-top: 1px solid #000;
  border-bottom: 1px solid #000;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}
.dataset-details {
  // border-bottom-left-radius: 10px;
  // border-bottom-right-radius: 10px;
  border-bottom: 1px solid #000;
  height: 75px;
}
.dataset-sharebox {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-bottom: 1px solid #000;
  height: 40px;
}
.datasetimg {
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
::v-deep .grid-content {
  min-height: 170px !important;
  // height: 150px !important;
}
</style>