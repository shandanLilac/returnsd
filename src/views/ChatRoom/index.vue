<script setup>
import { onMounted, ref } from "vue"
import { useRoute } from "vue-router"
import { getTopicListAPI } from '@/apis/publicdata'

const route = useRoute()
const resData = ref({})
const index = ref(0), pagnum = ref(1)
index.value = route.params.id

const getTopicList = async () => {
  const { data: res } = await getTopicListAPI(index.value, pagnum.value)
  resData.value = res.data
}
onMounted(() => { getTopicList() })
const updatePagnum = (val) => {
  pagnum.value = val
  getTopicList()
}
</script>

<template>
  <div class="chat-room">
    <div class="container">

      <div class="bread-nav">
        <el-breadcrumb separator=">">
          <el-breadcrumb-item class="link" :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>{{ resData.cate?.[0].title }}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>

      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span>话题列表</span>
          </div>
        </template>
        <div class="topic-list">
          <ul>
            <li class="list-head">
              <span>话题名称</span>
              <span>发布时间</span>
              <span>话题热度</span>
              <span>收藏该话题</span>
            </li>
            <li class="row" v-for="item in resData.topList" :key="item.id">
              <RouterLink class="list-item" :to="'/issue/' + item.sub_id">
                <span>{{ item.title }}</span>
                <span>{{ item.pub_date }}</span>
                <el-badge :value="item.count" type="danger">
                  <el-tag type="warning" effect="dark" round>热度</el-tag>
                </el-badge>
                <!-- <span>{{ item.count }}</span> -->
                <span><a class="add-fav" href="javascript:;">加入收藏</a></span>
              </RouterLink>
            </li>
          </ul>
        </div>
        <div class="page" v-if="resData.total">
          <!-- Q:为什么有了可选链，还得用v-if？ -->
          <el-pagination :page-size="5" :current-page="pagnum" @current-change="updatePagnum"
            layout="total,prev, pager, next,jumper" :total="resData.total?.[0].total" />
        </div>
      </el-card>
    </div>
  </div>
</template>

<style scoped lang="scss">
.chat-room {
  margin-top: 20px;

  .bread-nav {
    margin-bottom: 20px;
    font-size: 16px;
  }

  .box-card {
    .topic-list {
      ul {
        height: 480px;

        li {
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          // margin-bottom: 5px;
        }

        .list-head {
          background-color: $defColor;
          box-shadow: 0 2px 1px rgba($color: #000000, $alpha: 0.2);
          margin-bottom: 10px;

          span {
            display: inline-block;
            flex: 1;
            text-align: center;
            height: 68px;
            line-height: 68px;
            font-size: 18px;
            color: #333;
          }
        }

        .row {
          a {
            width: 100%;
            height: 48px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: #666;
            border-bottom: 1px dotted #e7e7e7;
            padding: 0 16px;

            &:hover {
              background-color: #e1f5fe;
            }

            span {
              flex: 1;

              .add-fav {
                border: none;
                height: 100%;
                line-height: 1;
                text-align: center;
                display: inline-block;
              }
            }
          }
        }
      }
    }

    .page {
      padding: 20px 0;

      .el-pagination {
        display: flex;
        justify-content: center;
      }
    }
  }
}
</style>@/stores/usePubDataStore