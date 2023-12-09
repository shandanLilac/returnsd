<script setup>
import { ref, computed } from 'vue'
import { preAddTopicAPI } from "@/apis/authoriedPerform"

const props = defineProps(['title', 'tags', 'topic'])
const titleMap = {
  1: '前端',
  2: '服务端',
  3: '本地圈',
  // 4: '技术咨询',
}
const theTitle = computed(() => {
  return titleMap[props.title]
})
// console.log(props.topic)

// 对话框
const dialogFormVisible = ref(false)
const formLabelWidth = '100px'
const form = ref({
  cate: theTitle.value,
  title: ''
})
const formRef = ref(null)
const rules = {
  title: [
    { required: true, message: '话题不能为空。', trigger: 'blur' }
  ]
}
const preAddTopic = async () => {
  const res = await preAddTopicAPI(props.title, form.value.title)
  console.log(res)
}
const submitPreTopic = (formEl) => {
  formEl.validate((valid) => {
    console.log(valid)
    if (!valid) return console.log('验证不通过。')
    preAddTopic()
    dialogFormVisible.value = true
  })
}
</script>

<template>
  <div class="home-item-pad">
    <h2>{{ theTitle }}</h2>
    <div class="item-body">
      <ul>
        <li>
          <el-tag class="ml-2" type="success" v-for="item in props.tags" :key="item.id">{{ item.tag_text }}</el-tag>

        </li>
        <li>
          <i class="iconfont" v-for="item in props.tags" :key=item.id :class="item.tag_icon"></i>
        </li>
        <li>
          <el-tag class="ml-2" type="info" size="large" v-for="item in props.topic" :key="item.id">{{ item.title
          }}</el-tag>
        </li>
      </ul>
      <div class="btn">
        <span></span>
        <el-button type="success" size="large" @click="dialogFormVisible = true">我有话题</el-button>
        <el-button type="primary" size="large" @click="$router.push('/chatroom/' + props.title)">参与讨论</el-button>
      </div>
    </div>
  </div>
  <!-- 对话框 -->
  <el-dialog v-model="dialogFormVisible" title="话题信息">

    <el-form ref="formRef" :model="form" :rules="rules" status-icon>
      <el-form-item label="分类名称" :label-width="formLabelWidth">
        <el-input v-model="form.cate" autocomplete="off" disabled />
      </el-form-item>
      <el-form-item label="话题名称" :label-width="formLabelWidth" prop="title">
        <el-input v-model.trim.lazy="form.title" placeholder="在这里输入话题" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button type="primary" @click="submitPreTopic(formRef)">
          提交审核
        </el-button>
      </span>
    </template>
    <el-alert title="提示：新话题需先提交管理员审核。" type="warning" />
  </el-dialog>
</template>

<style scoped lang="scss">
.home-item-pad {
  margin-top: 20px;
  width: 600px;
  // background: pink;
  padding: 15px;
  border: 1px dotted #e7e7e7;
  border-radius: 2px;
  transition: all 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
  }

  li {
    border-bottom: 1px dotted #666;

    .ml-2 {
      margin: 5px;
    }

    i {
      font-size: 36px;
      color: $defColor;
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