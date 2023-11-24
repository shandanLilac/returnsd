<script setup>

</script>

<template>
  <div class="for-help">
    <div class="container">
      <div class="bread-nav">
        <el-breadcrumb separator=">">
          <el-breadcrumb-item class="link" :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>技术支持</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span>123</span>
            <el-button class="button" text>关于我们</el-button>
          </div>
        </template>
        <div>
          支持类型
          <ul>
            <li><b>前端</b></li>
            <li>html+css+js</li>
            <li>Jquery</li>
            <li>vue</li>
          </ul>
          <ul>
            <li><b>服务器</b></li>
            <li>node-express</li>
            <li>koa</li>
            <li>nginx</li>
          </ul>
          <ul>
            <li><b>数据库</b></li>
            <li>MySql</li>
            <li>MongoDB</li>
          </ul>
          <ul>
            <li><b>其他</b></li>
            <li>项目上云</li>
          </ul>
        </div>
      </el-card>
    </div>
  </div>
</template>

<style scoped lang="scss">
.for-help {
  margin-top: 20px;
  background: #fff;
  padding: 10px 0;

  .box-card {
    box-shadow: none;
    margin-top: 10px;
  }
}
</style>