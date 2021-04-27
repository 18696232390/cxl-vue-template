<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>插件</el-breadcrumb-item>
    <el-breadcrumb-item>MarkDown</el-breadcrumb-item>
  </el-breadcrumb>

  <div class="md-edit">

    <div data-role="splitter" class="h-100">
      <div class="d-flex flex-justify-center flex-align-center">
        <el-input type="textarea" v-model="formInline.beforeText" :rows="36" @input="inputTextHandler()"
          placeholder="请输入文本"></el-input>
      </div>
      <div class="d-flex">
        <div v-html="formInline.afterText"></div>
      </div>
    </div>
</div>
</template>

<script lang="ts">
import { defineComponent, toRefs, reactive, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import marked from 'marked'
export default defineComponent({
  name: 'TimeFormat',
  setup() {
    const route = useRouter();
    const data = reactive({
      formInline: {
        beforeText: '2021-04-27 17:19:02',
        afterText: '格式化后的结果将会显示在这里',
      },
      test: (index) => {
        console.log(index);
      },
      inputTextHandler: () => {
        console.log('Text change...', data.formInline.beforeText);
        data.formInline.afterText = marked(data.formInline.beforeText ,{ sanitize: true })
      },
    });

    onMounted(() => {
      console.log('Markdown格式化 -- onMounted()');
    });

    const refData = toRefs(data);
    return {
      ...refData,
    };
  },
});
</script>
<style scoped lang="less">
@import url('./MdEdit.less');
</style>
