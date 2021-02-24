<template>
    <div id="index_top_box">
        <!--通用头部-->
        <HeaderDom></HeaderDom>

        <!--分类组件-->
        <ArticleProtDom></ArticleProtDom>

        <!--讨论组件-->
        <DiscussDom></DiscussDom>
    </div>
</template>

<script>
    import HeaderDom from '@/view/common/header.vue'
    import ArticleProtDom from '@/view/indexdom/ArticlePort.vue'
    import DiscussDom from '@/view/indexdom/Discuss.vue'

    export default{
        components:{
            HeaderDom,
            ArticleProtDom,
            DiscussDom
        }
    }
</script>

<style>
    #index_top_box{
        width: 100%;
        height: 100%;
        background-color: #f7f7f7;
    }
</style>
