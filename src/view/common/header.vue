<template>
    <div id="header_top_box">
        <div class="header_box_content">
            <div class="left_box">
                <a>碰碰点子</a>
            </div>

            <div class="search_box">
                <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
                    <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
            </div>

            <div class="right_box">
                <a>碰碰点子</a>
            </div>
        </div>
    </div>
</template>

<script>
</script>

<style>
    #header_top_box{
        width: 100%;
        height: 40px;

        display: flex;
        align-items: center;
        justify-content: center;

        background-color: white;
    }

    .header_box_content{
        height: 100%;
        width: 90%;

        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .header_box_content > div{
        height: 100%;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    #header_top_box .left_box{
        width: 30%;
        height: 100%;

        padding-right: 20px;
    }

    #header_top_box .search_box{
        width: 40%;
    }
    /*搜索框B*/
    #header_top_box .el-input__inner{
        height: 30px;
        background-color: #f7f7f7;

        border: 1;
        border-radius: 0;
    }
    #header_top_box .el-select .el-input{
        width: 120px;
    }
    #header_top_box .el-input-group__append{
        border: 1px solid red;
        background-color: red;
    }
    #header_top_box .el-button{
        height: 100%;

        color: white;
        font-weight: 600;
        font-size: 20px;

        border-radius: 0px 15px 15px 0px;
    }
    /*搜索框E*/

    #header_top_box .right_box{
        width: 30%;
        height: 100%;

        padding-left: 20px;
    }
</style>
