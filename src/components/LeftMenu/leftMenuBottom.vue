<template>
  <!-- 历史浏览 -->
  <div class="recently-view">
    <div class="title">
      <span class="list-title">历史浏览</span>
    </div>
    <div class="list">
      <li class="view-list">
        <div class="list-box">
          <a href="">
            <div class="box-content">
              <img
                class="datasetscover"
                src="https://storage.googleapis.com/kaggle-datasets-images/new-version-temp-images/default-backgrounds-15.png-1953180/dataset-thumbnail.png"
                alt=""
              />
              <p class="datasetsname">muril-base-cased1</p>
            </div>
          </a>
        </div>
      </li>
      <li class="view-list">
        <div class="list-box">
          <a href="">
            <div class="box-content">
              <img
                class="datasetscover"
                src="https://storage.googleapis.com/kaggle-datasets-images/new-version-temp-images/default-backgrounds-15.png-1953180/dataset-thumbnail.png"
                alt=""
              />
              <p class="datasetsname">muril-base-cased2</p>
            </div>
          </a>
        </div>
      </li>
      <li class="view-list">
        <div class="list-box">
          <a href="">
            <div class="box-content">
              <img
                class="datasetscover"
                src="https://storage.googleapis.com/kaggle-datasets-images/new-version-temp-images/default-backgrounds-15.png-1953180/dataset-thumbnail.png"
                alt=""
              />
              <p class="datasetsname">muril-base-cased3</p>
            </div>
          </a>
        </div>
      </li>
      <li class="view-list">
        <div class="list-box">
          <a href="">
            <div class="box-content">
              <img
                class="datasetscover"
                src="https://storage.googleapis.com/kaggle-datasets-images/new-version-temp-images/default-backgrounds-15.png-1953180/dataset-thumbnail.png"
                alt=""
              />
              <p class="datasetsname">muril-base-cased4</p>
            </div>
          </a>
        </div>
      </li>
      <li class="view-list">
        <div class="list-box">
          <a href="">
            <div class="box-content">
              <img
                class="datasetscover"
                src="https://storage.googleapis.com/kaggle-datasets-images/new-version-temp-images/default-backgrounds-15.png-1953180/dataset-thumbnail.png"
                alt=""
              />
              <p class="datasetsname">muril-base-cased5</p>
            </div>
          </a>
        </div>
      </li>
      <li class="view-list">
        <div class="list-box">
          <a href="">
            <div class="box-content">
              <img
                class="datasetscover"
                src="https://storage.googleapis.com/kaggle-datasets-images/new-version-temp-images/default-backgrounds-15.png-1953180/dataset-thumbnail.png"
                alt=""
              />
              <p class="datasetsname">muril-base-cased6</p>
            </div>
          </a>
        </div>
      </li>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
li {
  list-style: none;
}
a {
  text-decoration: none;
  margin-left: 25px;
  color: rgb(95, 99, 104);
  font-size: 12px;
  line-height: 20px;
  font-weight: 550;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.title {
  margin-top: 10px;
  margin-bottom: 10px;
}
.list-title {
  color: rgb(95, 99, 104);
  font-size: 12px;
  line-height: 16px;
  width: 100%;
  height: 30px;
  margin: 25px;
}
.recently-view {
  /* 用于调式,之后将删除该样式 */
  border-top: #d3dce6 1px solid;
}
.datasetscover {
  width: 17px;
  height: 17px;
  float: left;
  margin-right: 8px;
}
.box-content {
  width: 150px;
}
.list-box {
  height: 40px;
  width: 100%;
  display: flex;
  /* 上下居中 */
  align-items: center;
  /* 左右居中 */
  /* justify-content: center;  */
}
.list-box:hover {
  background-color: #ecf5ff;
}
</style>
