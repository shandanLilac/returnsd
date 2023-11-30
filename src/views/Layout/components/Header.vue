<script setup>

</script>

<template>
  <header class="layout-header">
    <div class="container">
      <h1 class="logo">
        <RouterLink to="/">returnsd</RouterLink>
      </h1>

      <ul class="header-nav">
        <li class="home">
          <RouterLink to="/">首页</RouterLink>
        </li>
        <li>
          <RouterLink to="/chatroom/1">前端</RouterLink>
        </li>
        <li>
          <RouterLink to="/chatroom/2">服务器</RouterLink>
        </li>
        <li>
          <RouterLink to="/chatroom/3">本地圈</RouterLink>
        </li>
        <li>
          <RouterLink to="/forhelp">技术支持</RouterLink>
        </li>
      </ul>

      <div class="search">
        <i class="iconfont icon-sousuo"></i>
        <input type="text" placeholder="搜一搜">
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.layout-header {
  background: #fff;

  .container {
    display: flex;
    align-items: center;

    .logo {
      width: 200px;

      a {
        display: block;
        width: 100%;
        height: 132px;
        text-indent: -9999px;
        background: url('@/assets/images/return-sd-logo1.png') no-repeat center 30px/contain;
      }
    }

    .header-nav {
      width: 820px;
      display: flex;
      padding-left: 40px;

      li {
        margin-right: 40px;
        width: 68px;
        text-align: center;

        a {
          display: inline-block;
          font-size: 16px;
          height: 32px;
          line-height: 32px;

          &:hover {
            color: $defColor;
            border-bottom: 1px solid $defColor;
          }
        }
      }
    }

    .search {
      width: 170px;
      height: 32px;
      line-height: 32px;
      border-bottom: 1px solid #e7e7e7;
      flex: 1;

      .iconfont {
        font-size: 18px;
        margin-left: 5px;
      }

      input {
        width: 140px;
        margin-left: 5px;
        padding-left: 5px;
        color: #666;
      }
    }
  }
}
</style>