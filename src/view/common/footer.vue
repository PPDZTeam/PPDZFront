<template>
<div id="footer_box">
    <div id="footer_content">
        <div id="footer_content_up">
            <a href="https://space.bilibili.com/5782326">关于我们</a>
            <a href="https://space.bilibili.com/5782326">招纳贤士</a>
            <a href="https://space.bilibili.com/5782326">广告服务</a>
            <a href="https://space.bilibili.com/5782326">开发助手</a>
            <a href="https://space.bilibili.com/5782326">关于我们</a>
            <a href="https://space.bilibili.com/5782326">关于我们</a>
            <a href="https://space.bilibili.com/5782326">关于我们</a>
        </div>
        <div id="footer_content_down">
            <a href="https://space.bilibili.com/5782326">公安备案号11010502030143</a>
            <a href="https://space.bilibili.com/5782326">京ICP备19004658号</a>
            <a href="https://space.bilibili.com/5782326">经营性网站备案信息</a>
            <a href="https://space.bilibili.com/5782326">北京互联网违法和不良信息举报中心</a>
            <a href="https://space.bilibili.com/5782326">帅逼华乐</a>
        </div>
    </div>
</div>
</template>

<script>
export default {
name: "footer"
}
</script>

<style scoped>
#footer_box{
    width: 100%;
    height: 70px;

    display: flex;
    align-items: center;
    flex-direction:column;
    justify-content: center;
    background-color: white;

    margin-top: 10px;


}

#footer_content{
    width: 100%;
    font-size: 10px;

}
#footer_content_up{
    display: flex;
    justify-content:center;
    flex-wrap: wrap;

    width: 80%;
    margin-left: 10%;

}

#footer_content_up a{
    margin-left: 10px;
    margin-right: 10px;
}
#footer_content_down{
    display: flex;
    justify-content:center;
    flex-wrap: wrap;

    width: 80%;
    margin-left: 10%;

}
#footer_content_down a{
    margin-left: 10px;
    margin-right: 10px;
}
</style>
