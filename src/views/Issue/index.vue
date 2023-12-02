<script setup>
import { ref } from "vue"
const input = ref('')
</script>

<template>
  <div class="chat-issue">
    <div class="container">
      <div class="bread-nav">
        <el-breadcrumb separator=">">
          <el-breadcrumb-item class="link" :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item class="link" :to="{ path: '/chatroom' }">chatroomid</el-breadcrumb-item>
          <el-breadcrumb-item>issueid</el-breadcrumb-item>
        </el-breadcrumb>
      </div>

      <div class="content">
        <div class="desc">
          <el-descriptions title="话题信息" border>
            <el-descriptions-item label="序号">1</el-descriptions-item>
            <el-descriptions-item label="分类">前端</el-descriptions-item>
            <el-descriptions-item label="标题">山丹有做前端开发的吗？</el-descriptions-item>
            <el-descriptions-item label="相关信息">
              <el-tag size="small">发表日期</el-tag>
            </el-descriptions-item>
            <el-descriptions-item label="Address">2023-11-24</el-descriptions-item>
          </el-descriptions>
        </div>
        <div class="talk">
          <ul>
            <li>没听说过</li>
            <li>有的广告铺子听说可以做网页</li>
          </ul>
        </div>
      </div>

      <div class="issue">
        <h3>发表讨论</h3>
        <el-input v-model="input" placeholder="Please input" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.chat-issue {
  margin-top: 20px;
  background: #fff;
  padding: 10px 0;

}
</style>