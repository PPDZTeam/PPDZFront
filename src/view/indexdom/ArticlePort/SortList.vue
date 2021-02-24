<template>
    <div id="Sort_List">
        <div class="sl_Data" v-for="item in SortList"><a>{{ item }}</a></div>
    </div>
</template>

<script>
export default {
    name: "SortList",
    data: function () {
        return {
            //用于查存放热点标签的列表
            SortList: ['语文', '数学', '英语', '语文', '数学', '英语', '语文', '数学', '英语', '语文',
                '语文', '哈皮森叶', '英语', '语文', '数学', '英语', '语文', '数学', '英语',]
        }
    },
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
    width: 10%;
    height: 30%;

    text-align: center;

    cursor: pointer;

    font-size: 15px;
}
</style>
