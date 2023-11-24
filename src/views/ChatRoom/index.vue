<script setup>
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-08',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-06',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-07',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
</script>

<template>
  <div class="chat-room">
    <div class="container">
      <div class="bread-nav">
        <el-breadcrumb separator=">">
          <el-breadcrumb-item class="link" :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>chatroomid</el-breadcrumb-item>
        </el-breadcrumb>
      </div>

      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span>欢迎交流</span>
            <el-button class="button" text>前端</el-button>
          </div>
        </template>
        <div>
          <el-table :data="tableData" style="width: 100%" height="340">
            <el-table-column prop="date" label="Date" width="180" />
            <el-table-column prop="name" label="Name" width="180" />
            <el-table-column prop="address" label="Address" />
          </el-table>
        </div>
        <el-pagination background layout="prev, pager, next" :total="100" />
      </el-card>
    </div>
  </div>
</template>

<style scoped lang="scss">
.chat-room {
  margin-top: 20px;
  // height: 700px;
  // overflow: scroll;

  .bread-nav {
    margin-bottom: 20px;
    font-size: 16px;
  }

  .box-card {
    box-shadow: none;
  }
}
</style>