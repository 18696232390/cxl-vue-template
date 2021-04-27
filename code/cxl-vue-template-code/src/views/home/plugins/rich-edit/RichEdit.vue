<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>插件</el-breadcrumb-item>
    <el-breadcrumb-item>富文本</el-breadcrumb-item>
  </el-breadcrumb>

  <div class="rich-edit">
    <div id="my-rich-edit"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs, reactive, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import E from 'wangeditor';
export default defineComponent({
  name: 'RichEdit',
  setup() {
    const route = useRouter();
    const data = reactive({
      test: (index) => {
        console.log(index);
      },
    });

    onMounted(() => {
      console.log('RichEdit -- onMounted()');
      const editor = new E('#my-rich-edit');
      editor.create();
    });

    const refData = toRefs(data);
    return {
      ...refData,
    };
  },
});
</script>
<style scoped lang="less">
@import url('./RichEdit.less');
</style>
