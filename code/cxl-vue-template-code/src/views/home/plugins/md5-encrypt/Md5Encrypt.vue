<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>插件</el-breadcrumb-item>
    <el-breadcrumb-item>MD5加密</el-breadcrumb-item>
  </el-breadcrumb>

  <div class="md5-encrypt">

    <div data-role="splitter" class="h-100">
      <div class="d-flex flex-justify-center flex-align-center">
        <el-input type="textarea" v-model="formInline.beforeText" :rows="36" @input="inputTimeHandler()"
          placeholder="请输入文本"></el-input>
      </div>
      <div class="d-flex flex-justify-center flex-align-center">
        <pre>
        {{ formInline.afterText }}
    </pre>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, toRefs, reactive, onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  import md5 from 'js-md5';
  export default defineComponent({
    name: 'Md5Encrypt',
    setup() {
      const route = useRouter();
      const data = reactive({
        formInline: {
          beforeText: 'Hello World',
          afterText: '加密后的结果将会显示在这里',
        },
        test: (index) => {
          console.log(index);
        },
        inputTimeHandler: () => {
          console.log('time change...', data.formInline.beforeText);
          data.formInline.afterText = md5(data.formInline.beforeText);
        },
      });

      onMounted(() => {
        console.log('日期格式化 -- onMounted()');
      });

      const refData = toRefs(data);
      return {
        ...refData,
      };
    },
  });
</script>
<style scoped lang="less">
  @import url('./Md5Encrypt.less');
</style>