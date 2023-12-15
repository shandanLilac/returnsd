<script setup>

</script>

<template>
  <div class="consulting-pad">
    <div class="pad-head">
      <h2>技术咨询</h2>
      <RouterLink to="/forhelp">点击咨询</RouterLink>
    </div>
    <div class="item-list">
      <div class="item front-end">
        <p class="icon-item"><i class="iconfont icon-kaifa"></i></p>

        <div class="support-list">
          <el-tag class="support-tag" type="" effect="dark" size="large">前端</el-tag>
          <p>网页设计咨询</p>
          <p>网站开发咨询</p>
        </div>
        <span>网站首页、管理系统、数据加密...</span>
      </div>
      <div class="item server-end">
        <p class="icon-item"><i class="iconfont icon-database"></i></p>

        <div class="support-list">
          <!-- <h3>服务器</h3> -->
          <el-tag class="support-tag" type="danger" effect="dark" size="large">服务器</el-tag>
          <p>服务器开发咨询</p>
          <p>数据库设计咨询</p>
          <p>接口调试咨询</p>
        </div>
        <span>跨域、身份认证、接口文档、部署上线...</span>
      </div>
      <div class="item maintain">
        <p class="icon-item"><i class="iconfont icon-weihu1"></i></p>

        <div class="support-list">
          <!-- <h3>项目维护</h3> -->
          <el-tag class="support-tag" type="success" effect="dark" size="large">项目维护</el-tag>
          <p>HTML+CSS+JS原生项目咨询</p>
          <p>Jquery项目咨询</p>
          <p>vue项目咨询</p>
          <p>express服务器咨询</p>
          <p>koa服务器咨询</p>
        </div>
        <span>功能新增、需求改造、技术升级、Debug...</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.consulting-pad {
  margin-top: 20px;
  width: 600px;
  padding: 15px;
  transition: all 0.2s;

  .pad-head {
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
      display: inline-block;
      color: $subColor;
      width: 120px;
      height: 42px;
      line-height: 42px;
      text-align: center;

      &:hover {
        color: $defColor;
        border-bottom: 1px solid $defColor;
      }
    }
  }

  .item-list {
    display: flex;
    justify-content: space-between;

    .item {
      width: 180px;
      height: 300px;
      text-align: center;
      padding-bottom: 18px;
      transition: all 1s;


      &:hover {
        border-bottom: 2px solid $defColor;
      }

      .support-list {
        // font-size: 16px;
        color: #666;
        margin-bottom: 15px;
        padding: 10px;

        .support-tag {
          font-size: 18px;
          color: #000;
        }
      }

      span {
        font-size: 12px;
        color: #999;
      }

      i {
        font-size: 48px;
        color: $subColor;

        &:hover {
          color: $defColor;
        }
      }
    }
  }
}
</style>