<template>
    <div id="choice_top_box">
        <div class="choice_box_content">
            <div class="choice_title">
                精选文章123
            </div>

            <div class="choice_show">

                <div class="choice_once">

                </div>

                <div class="choice_list">

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

    background-color: red;
}
.choice_list{
    width: 65%;
    height: 400px;

    background-color: green;
}
</style>
