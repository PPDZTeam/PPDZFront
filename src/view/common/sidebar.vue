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
      <div class="sidebar_data" id="top_button">
          回到顶部
      </div>
  </div>
</template>

<script>
export default {
    name: "sidebar",

}
</script>

<style scoped>
#sidebar_left_box {
    background-color: white;
    border-radius: 5px;

    user-select: none;

    width: 70px;
    height: 400px;
    position: fixed;
    right: 10px;
    top: 25%;

    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;

    font-size: 15px;
    border-radius: 10px;
}
.sidebar_data {
    width: 100%;
    height: calc(100% / 6);
    margin-top: 1px;
    line-height: 40px;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
}
.sidebar_data:hover{
    background-color: #adadad;
    font-weight: 600;
    color: white;
}
.sidebar_data:first-of-type{
    border-radius: 10px 10px 0px 0px;
}
.sidebar_data:last-of-type{
    border-radius: 0px 0px 10px 10px;
}
</style>
