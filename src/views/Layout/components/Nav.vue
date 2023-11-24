<script setup>

</script>

<template>
  <nav class="layout-nav">
    <div class="container">
      <ul class="login" v-if="true">
        <li><a href="javascript:;"><i>icon</i>用户名</a></li>
        <li><a href="javascript:;">个人中心</a></li>
        <li><a href="javascript:;">退出登录</a></li>
      </ul>
      <ul class="logout" v-else>
        <li><a href="javascript:;">请先登录</a></li>
        <li><a href="javascript:;">帮助中心</a></li>
        <li><a href="javascript:;">关于我们</a></li>
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
          font-size: 16px;
          margin-right: 15px;
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