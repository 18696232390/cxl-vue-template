<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>插件</el-breadcrumb-item>
    <el-breadcrumb-item>百度地图</el-breadcrumb-item>
  </el-breadcrumb>

  <div class="map-baidu">
    <div>
      地图
     </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs, reactive, onMounted } from 'vue';
import { useRouter } from 'vue-router';
export default defineComponent({
  name: 'MapBaidu',
  setup() {
    const route = useRouter();
    const data = reactive({
      test: (index) => {
        console.log(index);
      },
    });

    onMounted(() => {
      console.log('百度地图 -- onMounted()');
    });

    const refData = toRefs(data);
    return {
      ...refData,
    };
  },
});
</script>
<style scoped lang="less">
@import url('./MapBaidu.less');
</style>
