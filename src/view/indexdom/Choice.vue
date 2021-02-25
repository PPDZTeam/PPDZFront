<template>
    <div id="choice_top_box">
        <div class="choice_box_content">
            <div class="choice_title">
                精选文章
            </div>

            <div class="choice_show">

                <div class="choice_once">
                    <el-image
                          style="width: 100%;height: 250px;"
                          :src="url"
                          :fit="fit">
                    </el-image>
                    <div class="c_once_text">
                        123
                    </div>
                </div>

                <div class="choice_list">
                    <div v-for="item in 6">
                        <el-image
                              style="width: 100px;height: 100%;"
                              :src="url"
                              :fit="fit">
                        </el-image>
                        123
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
</script>

<style>
#choice_top_box {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 10px;

    background-color: #f7f7f7;
}

.choice_box_content {
    width: calc(1300px - 20px);

    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;

    padding: 10px;

    background-color: white;
}

.choice_title {
    width: 100%;
    height: 40px;

    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
}

.choice_show{
    width: 100%;

    display: flex;
    justify-content: space-between;
}

.choice_once{
    width: 35%;
    height: 400px;
}
.c_once_text{
    text-align: left;
}

.choice_list{
    width: calc(65% - 10px);
    height: 400px;

    display: flex;
    justify-content: space-between;
    align-content: flex-start;
    flex-wrap: wrap;
}
.choice_list > div{
    width: calc(50% - 5px);
    height: 100px;

    margin-bottom: 10px;
    display: flex;
    align-items: flex-start;

    background-color: green;
}
</style>
