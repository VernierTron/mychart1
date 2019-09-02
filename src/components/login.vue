<template>
<!--    <div id="viewList" class="viewList">
        <router-link to="/bar" class="linkClass"><div class="chooseButton2"><p class="pClass">环形图</p></div></router-link>
        <router-link to="/foo" class="linkClass"><div class="chooseButton1"><p class="pClass">折线图</p></div></router-link>
        <router-link to="/gee" class="linkClass"><div class="chooseButton3"><p class="pClass">父子组件传值</p></div></router-link>
    <div id="showView" class="showView"></div>
         <router-view/> 
</div>-->

<!-- <div id="plat"> -->
    <div id="loginBody" class="loginBodyClass">
    <div class="loginBodyTitleClass"><font class="fontClass">服务台登录</font></div>
    <div id="form" class="formClass">
        <div id="loginMessage">
            <div class="userNameClass">
                <span>用户名：</span>
                <input type="text" v-model="email" placeholder="请输入用户名" class="login-name" />
                <span>*</span>
                <span v-if="errorEmail">内容不能为空</span>
            </div>
            <div class="userPassClass">
                <span>密码：</span>
                <input type="text" v-model="password" placeholder="请输入密码" class="login-name" />
                <span>*</span>
                <span v-if="errorPassword">内容不能为空</span>
            </div>
        </div>
        <div id="loginButton" class="loginButtonClass">
            <button class="button" @click="handleLogin">登 录</button >
        </div>
    </div>
    <!-- <router-view></router-view> -->
</div>
<!-- </div> -->
</template>
<script>
import axios from 'axios'
import Vuex from 'vuex'
import store from 'vuex'
export default {
  name: 'App',
    data(){
        return{
            errorEmail:false,
            errorPassword:false,
            email:'',
            password:''
        }
    },
    computed:{
    form:function(){
        return {
            email:this.email,
            password:this.password
            }
        }
    },
    methods:{
    handleLogin:function(){
        if(this.email === '' || this.password === ''){
            if(this.email === '') this.errorEmail = true;
            if(this.password === '') this.errorPassword = true;
        }else{
            this.errorEmail = false;
            this.errorPassWord = false;
            // console.log(this.form);
            this.$ajax.post('/login',this.form).then((res) => {
                // console.log(res.data.status);
                if(res.data.status == 0){
                     console.log(res);
                     alert("登陆成功");
                     console.log(res.data.data.name);
                    // console.log(JSON.stringify(res.data));
                    // localStorage.setItem('form',JSON.stringify(this.form));
                    //this.$store.dispatch("userLogin", true);
                    // this.$store.dispatch('getLoginMess',this.form.email)
                    this.$router.push({path:'/indexMain'});
                    // console.log(JSON.parse(localStorage.getItem('form')));
                    // this.$router.push({path:'/index',query:{email:this.email}});
                }else{
                    this.$message.warning(res.data.error);
                    //alert(res.data.error);
                }
            })
            .catch((error) => {
                console.log(error);
            })
        }
    }
  }
}
</script>
<style>
html, body{
    padding:0;
    margin:0;
    width: 100%;
    height: 100%;
    background-image: url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564979890320&di=0f3cfc681cd5b7c2e2f0dbb776ff96d5&imgtype=0&src=http%3A%2F%2Fwww.uimaker.com%2Fuploads%2Fuserup%2F0%2F1413012235-43G.png);
    background-size: 100%, 100%;
}
/* #plat{
    margin: 0;
    padding: 0;
    width: 1500px;
    height: 700px;
    background-image: url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564979890320&di=0f3cfc681cd5b7c2e2f0dbb776ff96d5&imgtype=0&src=http%3A%2F%2Fwww.uimaker.com%2Fuploads%2Fuserup%2F0%2F1413012235-43G.png);
    background-size: 100%, 100%;

} */
.loginBodyClass{
    width: 700px;
    height: 400px;
    left: 50%;
    top: 50%;
    margin-top: -200px;
    margin-left: -350px;
    border-radius: 10px;
    border: 0.5px solid rgba(59, 187, 247,0.5);
    position: absolute;
    background-color: rgba(131, 179, 235,0.4);
}
.loginBodyTitleClass{
    padding:0px;
    width: 200px;
    height: 80px;
    margin-top: 20px;
    left: 50%;
    margin-left: -100px;
    /*background-color: black;*/
    position: absolute;
    text-align: center;
}
.fontClass{
    font-size: 40px;
    white-space: nowrap;
    color:rgb(247, 247, 247);
    font-family:"微软雅黑";
}
.formClass{
    position: absolute;
    width: 600px;
    height: 200px;
    left: 50%;
    margin-top: 130px;
    margin-left: -300px;
}
#loginMessage{
    padding-left: 50px;
}
.userNameClass{
    margin-left: 50px;
    color: rgba(255, 255, 255,0.8);
}
.userPassClass{
    margin-top: 10px;
    margin-left: 66px;
    color: rgba(255, 255, 255,0.8);
}
.loginButtonClass{
    text-align: center;
    margin-top: 30px;
}
.button {
    display: inline-block;
    cursor: pointer;
    border-radius: 4px;
    color: #fff;
    background: rgba(59, 187, 247,0.5);
    margin-top: 20px;
    padding: 8px 80px;
}
.button:hover{
        background:#5cadff;
}
.login-name {
    width: 250px;
    height: 40px;
    padding: 0 18px;
    border: 1px solid #d7dde4;
    border-radius: 4px;
    color: #657180;
    outline: none;
    font-size: 18px;
}
</style>
