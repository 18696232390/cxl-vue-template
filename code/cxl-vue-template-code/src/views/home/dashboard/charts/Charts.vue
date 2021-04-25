<template>
  <div class="dashboard-charts">
    <div class="row">
      <div class="cell">
        <ECharts
          ref="chart"
          :loadingOpts="{ text: 'Wait for 0.5s' }"
          :option="option"
          :setOptionOpts="{ notMerge: true }"
          :loading="loading"
          v-if="option"
          style="height: 18rem"
        />
      </div>

      <div class="cell">
        <ECharts
          ref="chart2"
          :loadingOpts="{ text: 'Wait for 0.5s' }"
          :option="option2"
          :setOptionOpts="{ notMerge: true }"
          :loading="loading"
          v-if="option2"
          style="height: 18rem"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import * as echarts from 'echarts';
import { h } from 'vue';
import { createComponent } from 'echarts-for-vue';
import { defineComponent, toRefs, reactive, onMounted } from 'vue';
import { useRouter } from 'vue-router';
export default defineComponent({
  components: {
    ECharts: createComponent({ echarts, h }), // use as a component
  },
  name: 'Charts',
  setup() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const route = useRouter();

    const data = reactive({
      chart1: null,
      chart2: null,
      loading: true,
      option: {
        title: { text: '总用户量' },
        tooltip: {},
        xAxis: {
          data: ['12-3', '12-4', '12-5', '12-6', '12-7', '12-8'],
        },
        yAxis: {},
        series: [
          {
            name: '用户量',
            type: 'line',
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      },
      option2: {
        title: {
          text: '基础雷达图',
        },
        legend: {
          data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）'],
        },
        radar: {
          // shape: 'circle',
          indicator: [
            { name: '销售（Sales）', max: 6500 },
            { name: '管理（Administration）', max: 16000 },
            { name: '信息技术（Information Technology）', max: 30000 },
            { name: '客服（Customer Support）', max: 38000 },
            { name: '研发（Development）', max: 52000 },
            { name: '市场（Marketing）', max: 25000 },
          ],
        },
        series: [
          {
            name: '预算 vs 开销（Budget vs spending）',
            type: 'radar',
            data: [
              {
                value: [4200, 3000, 20000, 35000, 50000, 18000],
                name: '预算分配（Allocated Budget）',
              },
              {
                value: [5000, 14000, 28000, 26000, 42000, 21000],
                name: '实际开销（Actual Spending）',
              },
            ],
          },
        ],
      },
      test: (index) => {
        console.log(index);
      },
    });

    onMounted(() => {
      console.log('charts - onMounted()');
      setTimeout(() => {
        data.loading = false;
      }, 1000);
      // window.onresize = function () {
      //   console.log('onresize()..');
      //   data.chart1.resize();
      //   data.chart2.resize();
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
