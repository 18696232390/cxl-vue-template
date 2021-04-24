<template>
  <div class="dashboard-charts">
    <div class="row">
      <div class="cell">
        <div id="customerChart"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs, reactive, onMounted, inject } from 'vue';

import { useRouter } from 'vue-router';
export default defineComponent({
  name: 'Charts',
  setup() {
    let echarts = inject('echarts'); //引入
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const route = useRouter();
    const data = reactive({
      test: (index) => {
        console.log(index);
      },
    });

    onMounted(() => {
      console.log('charts - onMounted()');
      // let myChart = echarts.init(document.getElementById('customerChart'));
      // // // 绘制图表
      // myChart.setOption({
      //   title: { text: '总用户量' },
      //   tooltip: {},
      //   xAxis: {
      //     data: ['12-3', '12-4', '12-5', '12-6', '12-7', '12-8'],
      //   },
      //   yAxis: {},
      //   series: [
      //     {
      //       name: '用户量',
      //       type: 'line',
      //       data: [5, 20, 36, 10, 10, 20],
      //     },
      //   ],
      // });
      // window.onresize = function () {
      //   //自适应大小
      //   myChart.resize();
      // };
    });

    const refData = toRefs(data);
    return {
      ...refData,
    };
  },
});
</script>
<style scoped lang="less">
@import url('./charts.less');
</style>
