<template>
    <div id="ap_top_box">
        <div class="ap_box_content">
            <div class="ap_logo">
                123
            </div>
            <div class="ap_sort">
                123
            </div>
        </div>
    </div>
</template>

<script>
</script>

<style>
    #ap_top_box{
        width: 100%;
        height: 120px;

        display: flex;
        align-items: center;
        justify-content: center;

        margin-top: 10px;
    }

    .ap_box_content{
        width: calc(90% - 20px);
        height: calc(100% - 20px);

        display: flex;
        align-items: center;
        justify-content: flex-start;

        padding: 10px;

        background-color: white;
    }

    .ap_box_content >div{
        height: 100%;

        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
    }

    .ap_logo{
        width: 250px;

        background-color: red;
    }

    .ap_sort{
        width: calc(100% - 250px);

        background-color: green;
    }
</style>
