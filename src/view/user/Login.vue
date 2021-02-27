<template>
    <div id="user_login_box">
        <!--通用头部-->
        <HeaderDom></HeaderDom>

        <div class="user_login_content">
            <div class="login_box" v-show="showLogin">
                <span style="margin: 20px 0px;display: inline-block;font-size: 25px;">登 录</span>
                <div class="login_input_box">

                    <el-form :model="LoginForm" ref="LoginForm" :rules="LoginRules">
                        <el-form-item prop="username" style="margin-bottom: 40px;">
                            <el-input placeholder="请输入用户名" v-model="LoginForm.username">
                                <template slot="prepend">登录名称</template>
                            </el-input>
                        </el-form-item>
                        <el-form-item style="margin-bottom: 40px;" prop="password">
                            <el-input placeholder="请输入密码" v-model="LoginForm.password">
                                <template slot="prepend">用户密码</template>
                            </el-input>
                        </el-form-item>
                    </el-form>

                    <div style="display: flex;justify-content: space-between;margin-bottom: 10px;">
                        <el-checkbox label="记住我" name="type"></el-checkbox>
                        <a><i class="el-icon-warning-outline"></i> 忘记密码</a>
                    </div>

                    <el-button style="width: 100%;margin-bottom: 10px;" type="primary" @click="Login">登录</el-button>
                    <el-button style="width: 100%;margin: 0;margin-bottom: 40px" @click="showLogin = false;resetForm('RegFrom')">注册</el-button>

                    <span class="agree_box">
                        登录即代表您同意<a>用户协议</a>和<a>隐私政策</a>
                    </span>
                </div>
            </div>

            <div class="reg_box" v-show="!showLogin">
                <span style="margin: 20px 0px;display: inline-block;font-size: 25px;">注册</span>
                <div class="reg_input_box">

                    <el-form :model="RegForm" ref="RegForm" :rules="RegRules">
                        <el-form-item prop="username" style="margin-bottom: 40px;">
                            <el-input placeholder="请输入用户名" v-model="RegForm.username">
                                <template slot="prepend">登录名称</template>
                            </el-input>
                        </el-form-item>
                        <el-form-item style="margin-bottom: 40px;" prop="password">
                            <el-input placeholder="请输入密码" v-model="RegForm.password">
                                <template slot="prepend">用户密码</template>
                            </el-input>
                        </el-form-item>
                    </el-form>

                    <el-button style="width: 100%;margin-bottom: 10px;" type="primary" @click="Register">注册账号</el-button>
                    <el-button style="width: 100%;margin: 0;margin-bottom: 40px" @click="showLogin = true;resetForm('LoginForm')">已有账号</el-button>

                    <span class="agree_box">
                        注册即代表您同意<a>用户协议</a>和<a>隐私政策</a>
                    </span>
                </div>
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
        data(){
            return{
                showLogin: true,

                LoginForm:{
                    username: '',
                    password: '',
                },

                RegForm:{
                    username: '',
                    password: '',
                },

                LoginRules:{
                    username:[
                        { required: true, message: '请输入用户名称', trigger: 'blur' },
                        { min: 4, max: 16, message: '长度在 4 到 16 个字符', trigger: 'blur' }
                    ],
                    password:[
                        { required: true, message: '请输入用户密码', trigger: 'blur' },
                        { min: 4, max: 16, message: '长度在 4 到 16 个字符', trigger: 'blur' }
                    ]
                },

                RegRules:{
                    username:[
                        { required: true, message: '请输入用户名称', trigger: 'blur' },
                        { min: 4, max: 16, message: '长度在 4 到 16 个字符', trigger: 'blur' }
                    ],
                    password:[
                        { required: true, message: '请输入用户密码', trigger: 'blur' },
                        { min: 4, max: 16, message: '长度在 4 到 16 个字符', trigger: 'blur' }
                    ]
                }
            }
        },
        components:{
            Footer,
            HeaderDom,
        },
        methods:{
            Login(){
                this.$refs['LoginForm'].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        return false;
                    }
                });
            },
            Register(){
                this.$refs['RegForm'].validate((valid) => {
                    if (valid) {
                        this.$axios({
                            url: '/api/user/reguser',
                            method: 'post',
                            data: this.RegForm
                        }).then((res)=>{
                            let resultData = res.data;
                            if(resultData.status == 0){
                                this.$alert('注册成功！', '消息', {
                                    confirmButtonText: '确定',
                                    callback: action => {
                                        this.showLogin = true;
                                    }
                                });
                            }else{
                                if(resultData.status == 1){
                                    this.$alert('注册失败！用户名称已存在！', '消息', {
                                        confirmButtonText: '确定'
                                    });
                                }else{
                                    this.$alert('注册失败！请联系管理员！', '消息', {
                                        confirmButtonText: '确定'
                                    });
                                }
                            }
                        })
                    } else {
                        return false;
                    }
                });
            },
            resetForm(formname){
                switch(formname){
                    case 'LoginForm':
                        this.$refs['LoginForm'].resetFields();
                        break;
                    case 'RegFrom':
                        this.$refs['RegForm'].resetFields();
                        break;
                    default:
                        break;
                }
            }
        }
    }
</script>

<style>
    #user_login_box{
        height: 100%;
    }

    .user_login_content{
        width: 100%;
        height: calc(100% - 130px);

        display: flex;
        align-items: center;
        justify-content: flex-end;

        background-image: url(../../../static/index.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center top;
    }
    .login_box,.reg_box{
        color: black;

        width: 450px;
        height: 480px;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -270px;
        margin-left: 300px;
        border-radius: 10px;
        box-shadow: 0 10px 20px rgba(0,0,0,0.5);
        overflow: hidden;
        z-index: 2;
        padding: 20px;
        box-sizing: border-box;
    }
    .login_box::after,.reg_box::after{
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

        background: rgba(255, 255, 255);

        /*ackground-image: url(../../../static/index.jpg);
        background-position: center top;
        background-size: cover;
        background-attachment: fixed; */
    }

    .agree_box a{
        color: #ff3538;
    }
</style>
