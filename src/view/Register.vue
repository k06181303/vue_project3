<template>
  <div class="register">
    <div class="bgp"></div>
    <div class="register_container">
      <h1>小滴课程管理系统</h1>
      <el-form class="register_form" :model="userInfo" :rules="rules" @keyup.enter="onRegister" ref="ref_form">
        <el-form-item prop="userName">
          <el-input placeholder="Please Enter Your Username" v-model.trim="userInfo.userName">
            <template #prepend>
              <el-icon>
                <avatar />
              </el-icon>
            </template>
          </el-input>
        </el-form-item>

        <el-form-item prop="password">
          <el-input placeholder="Please Enter Your Password" show-password v-model.trim="userInfo.password">
            <template #prepend>
              <el-icon>
                <key />
              </el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-button type="primary" class="register_submit" @click="onRegister">register</el-button>
        <div class="register_register" @click="toGo">Already have Account ? Sign in Now !</div>
      </el-form>
    </div>
  </div>
</template>
<script setup>
import router from '../router/index';
import { reactive, ref } from 'vue'
import { getRegister } from '../api/index';
/**
 * 初始的ref
 */
const ref_form = ref(null)
/**
 * 表單數據
 */
const userInfo = reactive({
  userName: '',
  password: ''
})
/**
 * 表單數據規則
 */
const rules = {
  userName: [{ required: 'true', trigger: 'blur', message: 'Username Cannot Be Empty' }],
  password: [{ required: 'true', trigger: 'blur', message: 'Password Cannot Be Empty' }],
}
/**
 * 註冊方法
 */
const onRegister = () => {
  ref_form.value.validate((val) => {
    if (val) {
      getRegisterData()
    }
  })
}
/**
 * 註冊的接口
 */
const getRegisterData = async() => {
  //接口處理
const res= await getRegister({userName: userInfo.userName, password: userInfo.password})
//如果註冊成功 
if(res.message) {
  ElMessage({
    message: 'register success！！！',
    type: 'success',
  })
  router.push('/login')
  }
}
/**
 * 跳轉到註冊頁面
 */
const toGo = () => {
  router.push('/login')
}




</script>
  
  <style lang='less' scoped>
@-webkit-keyframes fadenum {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.register {
  height: 100%;

  .bgp {
    height: 100%;
    background-image: url("../assets/bj.jpeg");
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 50% 50%;
  }

  .el-icon {
    height: 30px !important;
  }

  .register_container {
    animation: fadenum 1s ease;
    position: absolute;
    z-index: 1;
    width: 400px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all 1s;
    min-height: 273px;
    text-align: center;
    background-color: #fff;
    border-radius: 10px;
    padding: 20px;

    h1 {
      font-size: 24px;
      transition: all 1s;
      font-weight: bold;
      margin-bottom: 36px;
    }

    .el-card {
      border-radius: 20px;
    }

    .register_form {
      .register_submit {
        width: 100%;
        height: 50px;
        border-radius: 20px;
        margin-bottom: 10px;
      }

      .register_register {
        width: 6.25rem;
        font-size: 0.875rem;
        margin: 0 auto;
      }

      :deep(.el-input-group__prepend) {
        padding: 0 10px;
      }
    }
  }
}
</style>