<script setup>
import { ref, onMounted, onUpdated } from "vue"
import { useRouter } from "vue-router"
import { ElMessage } from "element-plus"
import 'element-plus/theme-chalk/el-message.css'
import { regUserAPI, genCaptchaAPI } from "@/apis/user"
import { useUserStore } from "@/stores/useUserStore"
import { v4 as uuidv4 } from 'uuid'
import { encryptFn } from '@/utils/crypto-js-CBC'

const userStore = useUserStore()
const router = useRouter()
// 表单数据
const formData = ref({
  username: 'zex126',
  password: 'Ab123456',
  repwd: '',
  captcha: '',
  uuid: '',
  agree: true
})

// 表单验证
const reguname = /^[a-zA-Z][\w_-]{3,15}$/
const regpwd = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/
const formRef = ref(null)
const verifyRepwd = (rules, val, callback) => {
  if (val !== formData.value.password) return callback(new Error('密码不一致'))
  callback()
}
const rules = {
  username: [
    { required: true, message: '必填项不能为空', trigger: 'blur' },
    { pattern: reguname, message: '用户名必须以字母开头且长度为4-15位', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '必填项不能为空', trigger: 'blur' },
    { pattern: regpwd, message: '密码必须包含大、小写字母、数字，长度为6-15位', trigger: 'blur' }
  ],
  repwd: [
    { validator: verifyRepwd, trigger: 'blur' }
  ],
  agree: [
    {
      validator: (rules, val, callback) => {
        if (val === false) return callback(new Error('请先同意协议'))
        callback()
      }
    }
  ],
  captcha: [
    { required: true, message: '必填项不能为空', trigger: 'blur' },
    {
      validator: (rules, val, callback) => {
        if (val.toLowerCase() != svgText.value.toLowerCase()) return callback(new Error('验证码不正确'))
        callback()
      },
      trigger: 'blur'
    }
  ]
}

// 登录
const submitForm = (formE1) => {
  formE1.validate(async (valid) => {
    let { username, password, captcha, uuid } = formData.value
    password = encryptFn(password)
    if (valid) {
      await userStore.login(username, password, captcha, uuid)
      ElMessage({ type: 'success', message: 'welcome' })
      router.replace('/')
    }
  })
}

// 注册
const isLoginVisible = ref(true)
const formReg = ref(null)
const regUser = (formEl) => {
  formEl.validate(async (valid) => {
    if (valid) {
      let { username, password, repwd, captcha, uuid } = formData.value
      password = encryptFn(password)
      repwd=encryptFn(repwd)
      await regUserAPI(username, password, repwd, captcha, uuid)
      isLoginVisible.value = true
      ElMessage({ type: 'success', message: '注册成功，请登录。' })
    }
  })
}

// 图形验证
const svgStr = ref(''), svgText = ref('')
const genCaptcha = async () => {
  formData.value.uuid = uuidv4()
  const { data: res } = await genCaptchaAPI(formData.value.uuid)
  svgStr.value = res.data.svg
  svgText.value = res.data.text
}

onMounted(() => {
  genCaptcha()
  // console.log('onMounted')
})
onUpdated(() => { genCaptcha() })
// onBeforeMount(() => { console.log('onBeforeMount') })
// onBeforeUpdate(() => { console.log('onbeforeUpdate') })
// onUpdated(() => { console.log('onUpdated') })
// onBeforeMount(() => { console.log('onBeforeMount') })
// onUnmounted(() => { console.log('onUnmounted') })
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

    <section class="login-section section" key="login" v-if="isLoginVisible">
      <div class="wrapper">
        <nav>
          <a href="javascript:;">用户登录</a>
        </nav>
        <div class="account-box">
          <div class="form">
            <el-form ref="formRef" :model="formData" :rules="rules" label-position="right" label-width="86px" status-icon>
              <el-form-item prop="username" label="账户">
                <el-input v-model="formData.username" />
              </el-form-item>
              <el-form-item prop="password" label="密码">
                <el-input type="password" v-model="formData.password" />
              </el-form-item>
              <!-- captcha -->
              <el-form-item prop="captcha" label="验证码">
                <el-input v-model="formData.captcha" style="width: 100px;margin-right: 20px;" />
                <div href="javascript:;" class="svg" v-html="svgStr"></div><a href="javascript:;" @click="genCaptcha()"
                  style="margin-left: 20px;">换一张</a>
              </el-form-item>

              <el-form-item label-width="22px" prop="agree">
                <el-checkbox size="large" v-model="formData.agree">
                  我已同意隐私条款和服务条款
                </el-checkbox>
              </el-form-item>
              <div class="btn-group">
                <el-link type="primary" @click="isLoginVisible = !isLoginVisible">注册</el-link>
                <el-button size="large" type="primary" class="subbtn" @click="submitForm(formRef)">点击登录</el-button>
              </div>
            </el-form>
          </div>
        </div>
      </div>
    </section>

    <section class="login-section section" key="reguser" v-else>
      <div class="wrapper">
        <nav>
          <a href="javascript:;">用户注册</a>
        </nav>
        <div class="account-box">
          <div class="form">
            <el-form ref="formReg" :model="formData" :rules="rules" label-position="right" label-width="86px" status-icon>
              <el-form-item prop="username" label="用户名">
                <el-input v-model="formData.username" />
              </el-form-item>
              <el-form-item prop="password" label="密码">
                <el-input type="password" v-model="formData.password" />
              </el-form-item>
              <el-form-item prop="repwd" label="确认密码">
                <el-input type="password" v-model="formData.repwd" />
              </el-form-item>
              <!-- captcha -->
              <el-form-item prop="captcha" label="验证码">
                <el-input v-model="formData.captcha" style="width: 100px;margin-right: 20px;" />
                <div href="javascript:;" class="svg" v-html="svgStr"></div>
                <a href="javascript:;" @click="genCaptcha()" style="margin-left: 20px;">换一张</a>
              </el-form-item>
              <!-- <el-button size="large" class="regbtn" @click="regUser(formReg)">注册</el-button> -->
              <div class="btn-group">
                <el-link @click="isLoginVisible = !isLoginVisible">返回</el-link>
                <el-button size="large" type="primary" class="subbtn" @click="regUser(formReg)">点击注册</el-button>
              </div>
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
      text-indent: -9999px;
      background: url('@/assets/images/return-sd-logo1.png') no-repeat center 18px/contain;
    }
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

.section {
  background: url('@/assets/images/login-bg2.png') no-repeat center/cover;
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

    .svg {
      display: inline-block;
      width: 100px;
      height: 40px;
      background-color: #ffd700;
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

.btn-group {
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
}

.regbtn {
  width: 100%;
  background-color: skyblue;

}
</style>