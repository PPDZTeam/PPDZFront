<template>
    <div id="user_login_box">
        <!--通用头部-->
        <HeaderDom></HeaderDom>

        <div class="user_login_content">
            <div class="login_box">
                123
            </div>
        </div>

        <!--通用尾部-->
        <Footer></Footer>
    </div>
</template>

<script>
    import HeaderDom from '@/view/common/header.vue';
    import Footer from "@/view/common/footer";

    export default{
        components:{
            Footer,
            HeaderDom,
        },
    }
</script>

<style>
    #user_login_box{
        height: 100%;
    }

    .user_login_content{
        width: 100%;
        height: calc(100% - 140px);

        display: flex;
        align-items: center;
        justify-content: flex-end;

        background-image: url(../../../static/index.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center top;
    }
    .login_box{
        background-color: white;
        color: white;

        width: 800px;
        height: 400px;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -200px;
        margin-left: -400px;
        border-radius: 8px;
        box-shadow: 0 10px 20px rgba(0,0,0,0.5);
        overflow: hidden;
        z-index: 2;
        padding: 20px;
        box-sizing: border-box;
    }
    .login_box::after{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        -webkit-filter: blur(20px);
        -moz-filter: blur(20px);
        -ms-filter: blur(20px);
        -o-filter: blur(20px);
        filter: blur(20px);
        z-index: -3;
        margin: -30px;
        background-image: url(../../../static/index.jpg);
        background-position: center top;
        background-size: cover;
        background-attachment: fixed;
    }
</style>
