<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>插件</el-breadcrumb-item>
    <el-breadcrumb-item>百度地图</el-breadcrumb-item>
  </el-breadcrumb>

  <div class="map-baidu">
    <div style="text-align: center">
      <h2>暂不支持 “百度地图”</h2>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs, reactive, onMounted } from 'vue';
import { useRouter } from 'vue-router';
// import BaiduMap from 'vue-baidu-map';    <baidu-map class="bm-view"> </baidu-map>
export default defineComponent({
  // BaiduMap
  components: {},
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
