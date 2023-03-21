<template>
  <div style="position: fixed;top: 0;left: 0;" class="img"  >



    <div style="width: 800px;height: 600px;position: absolute; position: relative;" class="box">
      <img src="http://static.iub88.com/jindou/admin/login_bg.png" alt="" style="width: 100%;height: 100%;">

      <div style="position: absolute; right: 100px;top: 175px;padding: 20px;">
        <el-card class="box-card" shadow="hover" style="border: none;">
          <template #header>
            <div >
              <span><span class=" icon iconfont">&#xe731;</span> 欢迎登录</span>
            </div>
          </template>
          <div>

            <el-form-item style="position: relative;width: 100%;">

              <input v-model="uno" />
              <span class="fontcon icon iconfont" style="position: absolute;">&#xe607;</span>
            </el-form-item>
            <el-form-item style="position: relative;">
              <input v-model="password" type="password" />
              <span class="fontcon icon iconfont" style="position: absolute;">&#xe638;</span>
            </el-form-item>
            <el-form-item style="position: relative;">
              <input v-model="verifyCode" />
              <span class="fontcon icon iconfont" style="position: absolute;">&#xe61c;</span>
              <a href="" style="position: absolute;right: 0;top: 2px;display: inline-block;"><img
                  src="http://111.lvge8.cn/common/showCaptcha?v=001" style="height:28px" /></a>
            </el-form-item>
            <!-- <input ref="uno" /><br>
            <input ref="password" /><br>
            <input ref="verifyCode" /><br> -->

            <el-button type="primary" @click="login" >登录</el-button>
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios'
import { get } from 'lodash';
import { ref, onMounted } from 'vue'


onMounted(()=>{
	window.document.onkeydown = disableRefresh;
	function disableRefresh(evt){
		evt = (evt) ? evt : window.event;
		if (evt.keyCode) {
			if(evt.keyCode == 13){
        login()
			}
		}
	}


})
var login = () => {



axios.post("/login/login", {
  password: password.value,
  uno: uno.value,
  verifyCode: verifyCode.value
})
  .then((res) => {
    if (res.data.m == "登录成功") {
      location.href = "/#/menu";
    } else {
      alert('登陆失败请重新登录')

    }
  });

}

let uno = ref();
let password = ref();
let verifyCode = ref();



</script>

<style scoped>
input {
  padding-left: 31px;
  height: 30px;
  outline: none;
  border: 1px solid #dddee1;
  border-radius: 5px;
  width: 200px;
}

.fontcon {
  height: 30px;
  width: 30px;
  font-size: inherit;
  font-weight: 400;
  line-height: 30px;
  color: #495060;
  text-align: center;
  border-right: 0px solid #dddee1;
  border: 1px solid #dddee1;
  border-radius: 5px 0 0 5px;
}

.img {
  width: 100%;
  height: 100%;
  background-image: url(http://static.iub88.com/jindou/admin/login.jpg);
  background-size: cover;
  background-position: center;
  text-align: center;
}

.box {
  width: 800px;
  height: 600px;
  left: 50%;
  top: 50%;
  margin-left: -350px;
  margin-top: -300px;
}
</style>