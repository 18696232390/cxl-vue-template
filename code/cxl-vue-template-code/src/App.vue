<template>
  <router-view />
</template>

<script lang="ts">
import * as echarts from 'echarts';
import { provide, toRefs, reactive, onMounted } from 'vue';

export default {
  name: 'App',
  setup() {
    console.log('初始化echarts对象', echarts);
    provide('echarts', echarts); //provide

    const data = reactive({
      enableLive2D: true,
    });

    onMounted(() => {
      console.log('APP onMounted()');

      if (data.enableLive2D) {
        setTimeout(() => {
          var peffex = 'koharu';
          (window as any).L2Dwidget.init({
            pluginRootPath: 'live2dw/',
            pluginJsPath: 'lib/',
            pluginModelPath: 'live2d-widget-model-' + peffex + '/assets/',
            tagMode: true,
            debug: false,
            model: {
              jsonPath: '../live2dw/live2d-widget-model-' + peffex + '/assets/' + peffex + '.model.json',
            },
            display: { position: 'right', width: 160, height: 410 },
            mobile: { show: true },
            log: false,
          });
        }, 1000);
      }
    });
    const refData = toRefs(data);
    return {
      ...refData,
    };
  },
  components: {},
};
</script>

<style lang="less">
body {
  font-family: 'webfont';
  margin: 0;
  padding: 0;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

@font-face {
  font-family: 'webfont';
  font-display: swap;
  src: url('//at.alicdn.com/t/webfont_4td248lrc8p.eot');
  /* IE9*/
  src: url('//at.alicdn.com/t/webfont_4td248lrc8p.eot?#iefix') format('embedded-opentype'),
    /* IE6-IE8 */ url('//at.alicdn.com/t/webfont_4td248lrc8p.woff2') format('woff2'),
    url('//at.alicdn.com/t/webfont_4td248lrc8p.woff') format('woff'),
    /* chrome、firefox */ url('//at.alicdn.com/t/webfont_4td248lrc8p.ttf') format('truetype'),
    /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
      url('//at.alicdn.com/t/webfont_4td248lrc8p.svg#Alibaba-PuHuiTi-Regular') format('svg');
  /* iOS 4.1- */
}
</style>
