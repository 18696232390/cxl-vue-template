<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>插件</el-breadcrumb-item>
    <el-breadcrumb-item>SQL格式化</el-breadcrumb-item>
  </el-breadcrumb>

  <div class="sql-format">
    <div data-role="splitter" class="h-100">
      <div class="d-flex flex-justify-center flex-align-center">
        <el-input
          type="textarea"
          v-model="formInline.beforeSql"
          :rows="36"
          @input="inputSqlHandler()"
          placeholder="请输入sql"
        ></el-input>
      </div>
      <div class="d-flex flex-justify-center flex-align-center">
        <pre>
        {{ formInline.afterSql }}
    </pre
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs, reactive, onMounted } from 'vue';
import { format } from 'sql-formatter';
import { useRouter } from 'vue-router';
export default defineComponent({
  name: 'SqlFormat',
  setup() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const route = useRouter();
    const data = reactive({
      formInline: {
        beforeSql: '',
        afterSql: '将会在这边显示您的sql',
      },
      test: (index) => {
        console.log(index);
      },
      inputSqlHandler: () => {
        console.log('sql change...', data.formInline.beforeSql);
        data.formInline.afterSql = format(data.formInline.beforeSql);
      },
    });

    onMounted(() => {
      console.log('sql格式化 -- onMounted()');
    });

    const refData = toRefs(data);
    return {
      ...refData,
    };
  },
});
</script>
<style scoped lang="less">
@import url('./sqlFormat.less');
</style>
