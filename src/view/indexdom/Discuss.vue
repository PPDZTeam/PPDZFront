<template>
    <div id="discuss_top_box">
        <div class="discuss_box_content">
            <div class="discuss_title">
                热门讨论
            </div>
            <div class="discuss_show">
                123
            </div>
        </div>
    </div>
</template>

<script>
</script>

<style>
    #discuss_top_box{
        width: 100%;
        height: 200px;

        display: flex;
        align-items: center;
        justify-content: center;

        margin-top: 10px;
    }

    .discuss_box_content{
        width: calc(90% - 20px);
        height: calc(100% - 20px);

        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: column;

        padding: 10px;

        background-color: white;
    }

    .discuss_box_content >div{
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
    }

    .discuss_title{
        width: 100%;
        height: 40px;
        
        align-items: center !important;

        background-color: red;
    }

    .discuss_show{
        width: 100%;
        height: 100%;

        background-color: green;
    }
</style>
