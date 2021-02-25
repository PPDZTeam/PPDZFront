<template>
    <div id="goduser_top_box">
        <div class="goduser_box_content">

            <div class="goduser_title">
                大神用户
            </div>

            <div class="goduser_show">
                <div v-for="item in 8">
                    <div class="g_show_user">
                        <el-image
                              style="width: 80px;height: 80px;border-radius: 50%;"
                              :src="url"
                              :fit="fit">
                        </el-image>
                        <div class="g_show_user_info">
                            <span style="margin-bottom: 15px;">用户姓名</span>
                            <span>信息</span>
                        </div>
                    </div>
                    <div class="g_show_card">
                        帖子
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
</script>

<style>
#goduser_top_box {
    width: 100%;

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

    display: flex;
    align-content: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
}

.goduser_show > div{
    width: calc(50% - 15px);
    height: 80px;

    margin-bottom: 10px;
    display: flex;
}
.g_show_user{
    width: 250px;
    height: 100%;

    display: flex;
    align-items: flex-start;
}
.g_show_user_info{
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    margin-left: 5px;
    padding: 10px 0px;
}

.g_show_card{
    width: calc(100% - 250px);
    height: 100%;

    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
}
</style>
