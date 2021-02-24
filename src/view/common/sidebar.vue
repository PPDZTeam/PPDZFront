<template>
  <div id="sidebar_left_box">
      <div class="sidebar_data">
          导航
      </div>
      <div class="sidebar_data">
          热门讨论
      </div>
      <div class="sidebar_data">
          精选文章
      </div>
      <div class="sidebar_data">
          大神用户
      </div>
      <div class="sidebar_data">
          热门专区
      </div>
      <div class="sidebar_data">
          相关专区
      </div>
  </div>
</template>

<script>
export default {
    name: "sidebar"
}
</script>

<style scoped>
  #sidebar_left_box {
      background-color: white;
      border: 1px solid red;
      border-radius: 5px;

      user-select: none;

      width: 70px;
      height: 400px;
      position: fixed;
      right: 10px;
      top: 150px;

      display: flex;
      align-items: center;
      flex-direction: column;

      font-size: 15px;
}
  .sidebar_data {
      width: 100%;
      height: 50px;
      margin-top: 1px;
      line-height: 40px;
      cursor: pointer;


}
</style>
