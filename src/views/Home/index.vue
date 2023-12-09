<script setup>
import itemPad from './components/itemPad2.vue'
import { ref, onMounted } from 'vue'
import ConsultPad from './components/consulting.vue'
import { usePubDataStore } from "@/stores/usePubDataStore.js"

const frondEnd = ref([]), serverEnd = ref([]), moment = ref([]), topic1 = ref([]), topic2 = ref([]), topic3 = ref([])
const pubDataStore = usePubDataStore()
onMounted(async () => {
  await pubDataStore.getChatroomTags()
  frondEnd.value = pubDataStore.pubdata.data.data.filter(x => x.title === '前端')
  serverEnd.value = pubDataStore.pubdata.data.data.filter(x => x.title === '服务器')
  moment.value = pubDataStore.pubdata.data.data.filter(x => x.title === '本地圈')
  topic1.value = pubDataStore.pubdata.data.topic[0]
  topic2.value = pubDataStore.pubdata.data.topic[1]
  topic3.value = pubDataStore.pubdata.data.topic[2]
})

</script>

<template>
  <div class="main-box">
    <div class="container">
      <h1>点击参与讨论</h1>
      <div class="contain">
        <itemPad :title="1" :tags="frondEnd" :topic="topic1" />
        <itemPad :title="2" :tags="serverEnd" :topic="topic2" />
        <itemPad :title="3" :tags="moment" :topic="topic3" />
        <ConsultPad></ConsultPad>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.main-box {
  margin-top: 20px;
  background: #fff;
  padding: 40px 0;

  .contain {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
}
</style>@/stores/usePubDataStore