<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>图表库</el-breadcrumb-item>
    <el-breadcrumb-item>ZoomCharts图表库</el-breadcrumb-item>
  </el-breadcrumb>

  <div class="chart-zoomcharts">
    <div style="text-align: center">
      <h3>暂不支持</h3>
      <div id="zmChart"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs, reactive, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
// import FacetChart from '@dvsl/zoomcharts';
// let FacetChart = zc.FacetChart;
var facetChart = null;
export default defineComponent({
  components: {},
  name: 'ChartZoomcharts',
  setup() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const route = useRouter();
    const data = reactive({
      test: (index) => {
        console.log(index);
      },
    });
    onMounted(() => {
      console.log('ChartZoomcharts -- onMounted()');
    }),
      onUnmounted(() => {
        console.log('ChartZoomcharts -- onUnmounted()');
        var setting = {
          container: document.getElementById('zmChart'),
          data: {
            url: 'https://zoomcharts.com/dvsl/data/pie-chart/browsers.json',
          },
          series: [{ data: { field: 'value' } }],
        };
        // facetChart = new FacetChart(setting);
      });

    const refData = toRefs(data);
    return {
      ...refData,
    };
  },
});
</script>
<style scoped lang="less">
@import url('./ChartZoomcharts.less');
</style>
