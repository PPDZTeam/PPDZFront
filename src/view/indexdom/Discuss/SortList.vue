<template>
    <div id="Sort_List">
        <!--总共放五个内容框-->
        <div class="sl_Data" v-for="i in 5">
            <div class="sl_Data_Title">震惊!丧尽天良</div>
            <div class="sl_Data_Content">2021年2月24日晚，嫌疑人森某......</div>
            <div class="sl_Data_More">查看更多></div>
        </div>

    </div>
</template>

<script>
export default {
    name: "SortList",
    data: function () {
        return {}
    }
}
</script>

<style scoped>
#Sort_List {
    width: 100%;
    height: 100%;

    display: flex;
    flex-wrap: wrap;
    align-items: center;

}

.sl_Data {
    margin-left: 4%;
    width: 15%;
    height: 80%;
    border: solid 1px red;
    border-radius: 10px;
    display: flex;
    flex-direction: column;

}

.sl_Data div {
    margin-left: 5%;
    margin-right: 5%;
    width: 90%;
    overflow: hidden;
}

.sl_Data_Title {
    margin-top: 5%;
    height: 20%;
    font-size: 20px;
    text-align: left;
    /*background: deepskyblue;*/
}

.sl_Data_Content {
    height: 50%;
    font-size: 15px;
    text-align: left;
}

.sl_Data_More {
    text-align: right;
    cursor: pointer;
}
</style>
