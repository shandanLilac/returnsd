<script setup>

</script>

<template>
  <div class="home-item-pad">
    <h2>title</h2>
    <div class="item-body">
      <ul>
        <li>
          <el-tag class="ml-2" type="success">HTML+CSS+JS</el-tag>
          <el-tag class="ml-2" type="info">Jquery</el-tag>
          <el-tag class="ml-2" type="warning">Vue</el-tag>
          <el-tag class="ml-2" type="danger">React</el-tag>
        </li>
        <li>
          <i class="iconfont icon-html5"></i>
          <i class="iconfont icon-css"></i>
          <i class="iconfont icon-js"></i>
          <i class="iconfont icon-jQuery"></i>
          <i class="iconfont icon-vue"></i>
        </li>
        <li>
          <el-tag class="ml-2" type="info" size="large">你是怎么写网页的？</el-tag>
          <el-tag class="ml-2" type="info" size="large">TypeScript必学吗？</el-tag>
          <el-tag class="ml-2" type="info" size="large">还记得DreamWeaver吗？</el-tag>
          <el-tag class="ml-2" type="info" size="large">那些年，我们用表格写的网页？</el-tag>
          <el-tag class="ml-2" type="info" size="large">你的发际线又高了吗？</el-tag>
          <el-tag class="ml-2" type="info" size="large">。。。？？？</el-tag>
        </li>
      </ul>
      <div class="btn">
        <span></span>
        <el-button type="success" size="large">我有话题</el-button>
        <el-button type="primary" size="large">参与讨论</el-button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.home-item-pad {
  margin-top: 20px;
  width: 600px;
  // background: pink;
  padding: 15px;
  border: 1px solid $defColor;
  border-radius: 2px;
  transition: all 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
  }

  li {
    border-bottom: 1px dotted #666;

    .ml-2 {
      margin: 5px;

    }

    i {
      font-size: 36px;
      color: $subColor;
      margin: 0 5px;
    }
  }

  .btn {
    padding: 8px 5px;
    display: flex;
    justify-content: end;
    // background: #666;
  }
}
</style>