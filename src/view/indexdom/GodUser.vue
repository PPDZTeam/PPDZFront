<template>
    <div id="goduser_top_box">
        <div class="goduser_box_content">

            <div class="goduser_title">
                大神用户
            </div>

            <div class="goduser_show">
                123
            </div>

        </div>
    </div>
</template>

<script>
</script>

<style>
#goduser_top_box {
    width: 100%;
    height: 300px;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 10px;

    background-color: #f7f7f7;
}

.goduser_box_content {
    width: calc(1300px - 20px);
    height: calc(100% - 20px);

    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;

    padding: 10px;

    background-color: white;
}

.goduser_title {
    width: 100%;
    height: 40px;

    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
}

.goduser_show{
    width: 100%;
    height: 100%;
    background-color: red;
}
</style>
