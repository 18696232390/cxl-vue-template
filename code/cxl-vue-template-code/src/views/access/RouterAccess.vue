<template>
  <div class="router-access">
    <h3>router access</h3>
    <h1>即将要跳转:{{ accessObj.url }}</h1>
    <el-button type="pramry" @click="nextStep()">确认跳转</el-button>
    <el-button type="pramry" @click="preStep()">返回</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs, reactive, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';

export default defineComponent({
  name: 'RouterAccess',
  setup() {
    const router = useRouter();
    const route = useRoute();

    const data = reactive({
      accessObj: null,
      test: (index) => {
        console.log(index);
      },
      nextStep: () => {
        window.open(data.accessObj.url);
      },
      preStep: () => {
        router.back();
      },
    });
    data.accessObj = JSON.parse(JSON.stringify(route.query));

    onMounted(() => {
      console.log('RouterAccess -- onMounted()', route.query);
    });

    const refData = toRefs(data);
    return {
      ...refData,
    };
  },
});
</script>
<style scoped lang="less">
@import url('./RouterAccess.less');
</style>
