<script setup>
import { ref } from "vue"
import { useRouter } from "vue-router"
import { ElMessage } from "element-plus"
import 'element-plus/theme-chalk/el-message.css'

const router = useRouter()
const formData = ref({
  username: 'admin',
  password: '111111',
  agree: false
})
const formRef = ref(null)
const rules = {
  username: [
    { required: true, message: '必填项不能为空', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '必填项不能为空', trigger: 'blur' }
  ],
  agree: [
    {
      validator: (rules, val, callback) => {
        if (val === false) callback(new Error('请先同意协议'))
        else callback()
      }
    }
  ]
}
const submitForm = (formE1) => {
  formE1.validate((valid) => {
    if (valid) {
      router.replace('/')
      ElMessage({ type: 'success', message: '登录成功' })
    } else {
      ElMessage({ type: 'warning', message: '登录失败' })
      return false
    }
  })
}
</script>

<template>
  <div>
    <header class="login-header">
      <div class="container m-top-20">
        <h1 class="logo">
          <RouterLink to="/">小兔鲜</RouterLink>
        </h1>
        <RouterLink class="entry" to="/">
          进入网站首页
          <i class="iconfont icon-arrow_right"></i>
          <i class="iconfont icon-arrow_right"></i>
        </RouterLink>
      </div>
    </header>

    <section class="login-section">
      <div class="wrapper">
        <nav>
          <a href="javascript:;">账户登录</a>
        </nav>
        <div class="account-box">
          <div class="form">
            <el-form ref="formRef" :model="formData" :rules="rules" label-position="right" label-width="60px" status-icon>
              <el-form-item prop="username" label="账户">
                <el-input v-model="formData.username" />
              </el-form-item>
              <el-form-item prop="password" label="密码">
                <el-input type="password" v-model="formData.password" />
              </el-form-item>
              <el-form-item label-width="22px" prop="agree">
                <el-checkbox size="large" v-model="formData.agree">
                  我已同意隐私条款和服务条款
                </el-checkbox>
              </el-form-item>
              <el-button size="large" class="subbtn" @click="submitForm(formRef)">点击登录</el-button>
            </el-form>
          </div>
        </div>
      </div>
    </section>
    <footer class="login-footer">
      <div class="container">
        <p>
          <a href="javascript:;">关于我们</a>
          <a href="javascript:;">经验交流</a>
          <a href="javascript:;">网站开发</a>
          <a href="javascript:;">全栈技术</a>
          <a href="javascript:;">项目维护</a>
        </p>
        <p>CopyRight &copy;return-sd</p>
      </div>
    </footer>

  </div>
</template>

<style scoped lang="scss">
.login-header {
  background-color: #fff;
  border-bottom: 1px solid #e4e4e4;

  .container {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }

  .logo {
    width: 200px;

    a {
      display: block;
      height: 132px;
      width: 100%;
      background-color: red;
      text-indent: -9999px;
      background: url('@/assets/images/logo.png') no-repeat center 18px/contain;
    }
  }

  .sub {
    // 什么东西
    flex: 1;
    font-size: 24px;
    font-weight: normal;
    margin-bottom: 38px;
    margin-left: 20px;
    color: #666;
  }

  .entry {
    width: 120px;
    margin-bottom: 38px;
    font-size: 16px;

    i {
      font-size: 14px;
      color: $defColor;
      letter-spacing: -5px;
    }
  }
}

.login-section {
  background: url('@/assets/images/login-bg.png') no-repeat center/cover;
  height: 488px;
  position: relative;

  .wrapper {
    width: 448px;
    background-color: rgba($color: #fff, $alpha: 0.95);
    position: absolute;
    left: 50%;
    top: 54px;
    transform: translate3d(100px, 0, 0);
    box-shadow: 0 0 10px rgba($color: #000000, $alpha: 0.55);
    border-radius: 3px;

    nav {
      font-size: 14px;
      height: 55px;
      margin-bottom: 20px;
      border-bottom: 1px solid #f5f5f5;
      display: flex;
      padding: 0 40px;
      text-align: right;
      align-items: center;

      a {
        flex: 1;
        line-height: 1;
        display: inline-block;
        position: relative;
        text-align: center;
        font-size: 18px;
      }
    }
  }
}

.login-footer {
  padding: 30px 0 50px;
  background-color: #fff;

  p {
    text-align: center;
    color: #999;
    padding-top: 20px;

    a {
      line-height: 1;
      padding: 0 10px;
      color: #999;
      display: inline-block;

      ~a {
        border-left: 1px solid #ccc;
        // background-color: pink;
        // ~指的是除了第一个，原来是这样。
      }
    }
  }
}

.account-box {

  // 删除了.toggle和&-item等不知名的样式
  .form {
    padding: 0 20px 20px 20px;
  }
}



.subbtn {
  background: $defColor;
  width: 100%;
  color: #fff;
}
</style>