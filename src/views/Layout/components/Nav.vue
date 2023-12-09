<script setup>
import { useUserStore } from "@/stores/useUserStore"
const userStroe = useUserStore()
</script>

<template>
  <nav class="layout-nav">
    <div class="container">
      <ul class="login" v-if="userStroe.userInfo.result?.token">
        <li>
          <a href="javascript:;">
            <i class="iconfont icon-userCenter"></i>
            欢迎您! {{ userStroe.userInfo.result.data.username }}
          </a>
        </li>
        <li>
          <a href="javascript:;"><i class="iconfont icon-shezhi"></i>个人设置</a>
        </li>
        <li>
          <a href="javascript:;" @click="userStroe.cleanStore">
            <i class="iconfont icon-tuichu"></i>
            退出登录
          </a>
        </li>
      </ul>
      <ul class="logout" v-else>
        <li><a href="javascript:;" @click="$router.push('/login')">请先登录</a></li>
        <li><a href="javascript:;">帮助中心</a></li>
        <li><a href="javascript:;" @click="$router.push('/forhelp')">关于我们</a></li>
      </ul>
    </div>
  </nav>
</template>

<style scoped lang="scss">
.layout-nav {
  background: #333;

  ul {
    height: 53px;
    display: flex;
    justify-content: end;
    align-items: center;

    li {
      a {
        display: inline-block;
        padding: 0 15px;
        color: #cdcdcd;
        line-height: 1;

        i {
          font-size: 18px;
          margin-right: 5px;
          color: #fff;
        }

        &:hover {
          color: $defColor;
        }
      }

      ~li {
        a {
          border-left: 2px solid #666;
        }
      }
    }
  }
}
</style>