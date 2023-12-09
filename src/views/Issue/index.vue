<script setup>
import { useRoute } from "vue-router"
import { getDetailsAPI } from "@/apis/publicdata.js"
import { ref, onMounted } from "vue"
import { issueTheViewAPI } from "@/apis/authoriedPerform.js"
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'

const route = useRoute()
const cateInfo = ref({}), itemList = ref([]), total = ref(0), words = ref(''), pagnum = ref(1)

const getDetailsInfo = () => {
  getDetailsAPI(route.params.id, pagnum.value).then(res => {
    cateInfo.value = res.data.data.cateInfo[0]
    itemList.value = res.data.data.itemDetails
    total.value = res.data.data.total[0]?.total || 1
  })
}
onMounted(() => {
  getDetailsInfo()
})

// 发表评论
const issueTheView = async () => {
  if (!words.value) return ElMessage({ type: 'warning', message: '内容空空如也~' })
  const res = await issueTheViewAPI(cateInfo.value.cate_id, cateInfo.value.sub_id, words.value)
  if (res.data.code != 0) return ElMessage({ type: 'warning', message: '发布失败' })
  getDetailsInfo()
}

// 分页按钮
const updatePagnum = (val) => {
  pagnum.value = val
  getDetailsInfo()
}
</script>

<template>
  <div class="chat-issue">
    <div class="container">
      <div class="bread-nav">
        <el-breadcrumb separator=">">
          <el-breadcrumb-item class="link" :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item class="link" :to="{ path: '/chatroom/' + cateInfo.cate_id }">{{ cateInfo.cate_title
          }}</el-breadcrumb-item>
          <el-breadcrumb-item>{{ cateInfo.top_title }}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>

      <div class="content">
        <div class="desc">
          <el-descriptions title="话题信息" border>
            <!-- <el-descriptions-item label="序号">1</el-descriptions-item> -->
            <el-descriptions-item label="分类">{{ cateInfo.cate_title }}</el-descriptions-item>
            <el-descriptions-item label="标题">{{ cateInfo.top_title }}</el-descriptions-item>
            <el-descriptions-item label="相关信息">
              <el-tag size="small" class="tag-item">发表日期:{{ cateInfo.pub_date }}</el-tag>
              <el-tag size="small" class="tag-item">参与人次:{{ cateInfo.count }}次</el-tag>
            </el-descriptions-item>
            <el-descriptions-item label="话题作者">admin_sd</el-descriptions-item>
          </el-descriptions>
        </div>

        <div class="talk">
          <ul v-if="itemList.length">
            <li v-for="item in itemList" :key="item.top_id">
              <div class="sub-info">
                <span class="author">{{ item.username }}</span>
                <span class="pub_time">{{ item.issue_date }}</span>
              </div>
              <div class="item-info">
                {{ item.content }}
              </div>
            </li>
          </ul>
          <el-empty description="你那么孤独，却说一个人真好" v-else />
          <div class="pagination">
            <el-pagination background layout="total,prev, pager, next,jumper" :page-size=5 :current-page="pagnum"
              @current-change="updatePagnum" :total="total" />
          </div>
        </div>
      </div>

      <div class="issue">
        <!-- <h3>参与讨论</h3> -->
        <div class="issue-form">
          <el-input class="inp" v-model="words" maxlength="126" placeholder="请在此输入评论内容" show-word-limit type="text"
            @keuup.enter="issueTheView" />
          <el-button class="btn" type="primary" @click="issueTheView">发布</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.chat-issue {
  .container {
    padding: 20px 5px;

    .content {
      margin-top: 20px;
      padding: 20px 5px;
      background-color: #fff;

      .tag-item {
        margin-left: 3px;
      }

      .talk {
        position: relative;
        height: 400px;
        margin-top: 20px;
        padding: 10px 5px;

        li {
          padding: 8px 5px;
          background-color: #e1f5fe;
          border-bottom: 1px dotted $defColor;
          margin-bottom: 2px;

          .sub-info {
            height: 24px;
            line-height: 24px;
            color: #666;

            .author {
              font-size: 16px;
              margin-right: 20px;
            }

            .pub_time {
              font-size: 12px;
              color: #999;
            }
          }

          .item-info {
            margin-top: 8px;
          }
        }

        .pagination {
          position: absolute;
          bottom: 0;
        }
      }
    }

    .issue {
      padding: 8px 5px;

      .issue-form {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .inp {
          width: 90%;
          height: 42px;
        }
      }
    }
  }
}
</style>