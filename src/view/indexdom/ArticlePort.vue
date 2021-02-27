<template>
    <div id="ap_top_box">
        <div class="ap_box_content">
            <div class="ap_logo">
                这里是PPDZ的Logo
            </div>
            <div class="ap_sort">
                <!--这里放筛选后的标签-->
                <SortList></SortList>
            </div>
        </div>
    </div>
</template>

<script>
import SortList from "./ArticlePort/SortList";

export default {
    components: {SortList}
}
</script>

<style>
#ap_top_box {
    width: 100%;
    height: 120px;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 10px;
    
    background-color: #f7f7f7;
}

.ap_box_content {
    width: calc(1300px - 20px);
    height: calc(100% - 20px);

    display: flex;
    align-items: center;
    justify-content: flex-start;

    padding: 10px;

    background-color: white;
}

.ap_box_content > div {
    height: 100%;

    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
}

.ap_logo {
    width: 250px;

    /*下面引用了VUE自带的一张logo图片*/
    background: deepskyblue url("../../assets/logo.png") no-repeat center;
}

.ap_sort {
    width: calc(100% - 250px);
}
</style>
