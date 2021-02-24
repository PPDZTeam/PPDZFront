<template>
    <div id="index_top_box">
        <!--通用头部-->
        <HeaderDom></HeaderDom>

        <!--侧边导航栏-->
        <Sidebar></Sidebar>

        <!--帖子分类组件-->
        <ArticleProtDom></ArticleProtDom>

        <!--热门讨论组件-->
        <DiscussDom></DiscussDom>

<<<<<<< HEAD
        <!--精选文章组件-->
        <ChoiceDom></ChoiceDom>

        <!--大神用户组件-->
        <GodUserDom></GodUserDom>
=======
        <!--通用尾部-->
        <Footer></Footer>
>>>>>>> bc2aa8c997ad6510cc605bd0e51d03a3845f73b1
    </div>
</template>

<script>
    import HeaderDom from '@/view/common/header.vue';
    import ArticleProtDom from '@/view/indexdom/ArticlePort.vue';
    import DiscussDom from '@/view/indexdom/Discuss.vue';
    import ChoiceDom from '@/view/indexdom/Choice.vue';
    import GodUserDom from '@/view/indexdom/GodUser.vue';
    import Sidebar from "@/view/common/sidebar";
    import Footer from "./common/footer";

    export default{
        components:{
            Footer,
            Sidebar,
            HeaderDom,
            ArticleProtDom,
            DiscussDom,
            ChoiceDom,
            GodUserDom,
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
