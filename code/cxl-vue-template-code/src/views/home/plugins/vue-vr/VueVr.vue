<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>插件</el-breadcrumb-item>
    <el-breadcrumb-item>VR全景</el-breadcrumb-item>
  </el-breadcrumb>

  <div class="vue-vr">
    <div style="text-align: center">
      <h2>暂不支持 “VR全景”</h2>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs, reactive, onMounted } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  //   components: { Pano },
  name: 'VueVr',
  setup() {
    const route = useRouter();
    const data = reactive({
      test: (index) => {
        console.log(index);
      },
    });

    onMounted(() => {
      console.log('Vue Vr -- onMounted()');
    });

    const refData = toRefs(data);
    return {
      ...refData,
    };
  },
});
</script>
<style scoped lang="less">
@import url('./VueVr.less');
</style>
