<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>插件</el-breadcrumb-item>
    <el-breadcrumb-item>视频播放器</el-breadcrumb-item>
  </el-breadcrumb>

  <div class="video-start">
    <div class="demo1-video">
      <video
        id="myVideo"
        class="video-js vjs-default-skin vjs-big-play-centered"
        controls
        autoplay
        preload="auto"
        poster="https://img.jbzj.com/file_images/article/201907/201907180839171.jpg"
      >
        <source src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" type="video/mp4" />
      </video>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs, reactive, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import Video from 'video.js';
import 'video.js/dist/video-js.css';

export default defineComponent({
  name: 'VideoStart',
  setup() {
    const route = useRouter();
    const data = reactive({
      player: null,
      test: (index) => {
        console.log(index);
      },
    });

    onMounted(() => {
      console.log('videoStart -- onMounted()');
    });

    const refData = toRefs(data);
    return {
      ...refData,
    };
  },
});
</script>
<style scoped lang="less">
@import url('./videoStart.less');
</style>
