<template>
  <router-view />
</template>

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
      /* IE6-IE8 */
      url('//at.alicdn.com/t/webfont_4td248lrc8p.woff2') format('woff2'),
      url('//at.alicdn.com/t/webfont_4td248lrc8p.woff') format('woff'),
      /* chrome、firefox */
      url('//at.alicdn.com/t/webfont_4td248lrc8p.ttf') format('truetype'),
      /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
      url('//at.alicdn.com/t/webfont_4td248lrc8p.svg#Alibaba-PuHuiTi-Regular') format('svg');
    /* iOS 4.1- */
  }
</style>