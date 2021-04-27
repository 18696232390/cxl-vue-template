<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>插件</el-breadcrumb-item>
    <el-breadcrumb-item>日期格式化</el-breadcrumb-item>
  </el-breadcrumb>

  <div class="time-format">

    <div>

      <el-input v-model="formatType" placeholder=""></el-input>

      <el-button type="primary"  @click="inputTimeHandler()">普通格式化</el-button>

    </div>

    <div data-role="splitter" class="h-100">
      <div class="d-flex flex-justify-center flex-align-center">
        <el-input
          type="textarea"
          v-model="formInline.beforeTime"
          :rows="36"
          @input="inputTimeHandler()"
          placeholder="请输入日期"
        ></el-input>
      </div>
      <div class="d-flex flex-justify-center flex-align-center">
        <pre>
        {{ formInline.afterTime }}
    </pre
        >
      </div>
      </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs, reactive, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import moment from 'moment'
export default defineComponent({
  name: 'TimeFormat',
  setup() {
    const route = useRouter();
    const data = reactive({
      formatType:'YYYY-MM-DD 00:00:00',
      formInline: {
        beforeTime: '2021-04-27 17:19:02',
        afterTime: '格式化后的结果将会显示在这里',
      },
      test: (index) => {
        console.log(index);
      },
      inputTimeHandler: () => {
        console.log('time change...', data.formInline.beforeTime);
        data.formInline.afterTime = moment(data.formInline.beforeTime).format(data.formatType)
        // data.formInline.afterTime = format(data.formInline.beforeSql);
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
@import url('./TimeFormat.less');
</style>
