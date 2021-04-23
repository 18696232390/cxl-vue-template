<template>
  <div class="dashboard-profile">
    <div class="row">
      <div class="cell">
        <ul data-role="listview" data-view="icons-medium">
          <li data-caption="文件夹">
            <ul>
              <li data-icon="<span class='mif-folder fg-orange'>" data-caption="Video"></li>
              <li data-icon="<span class='mif-folder fg-cyan'>" data-caption="Images"></li>
              <li data-icon="<span class='mif-folder fg-green'>" data-caption="Documents"></li>
              <li data-icon="<span class='mif-folder-download fg-blue'>" data-caption="Downloads"></li>
              <li data-icon="<span class='mif-folder'>" data-caption="Desktop"></li>
              <li data-icon="<span class='mif-folder'>" data-caption="Desktop"></li>
              <li data-icon="<span class='mif-folder'>" data-caption="Desktop"></li>
              <li data-icon="<span class='mif-folder'>" data-caption="Desktop"></li>
              <li data-icon="<span class='mif-folder'>" data-caption="Desktop"></li>
            </ul>
          </li>
        </ul>
      </div>

      <div class="cell">
        <div class="skill-box">
          <div class="header bg-orange fg-white">
            <img
              src="https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=467763568,1149403092&fm=11&gp=0.jpg"
              class="avatar"
            />
            <div class="title">CXL</div>
            <div class="subtitle">Code Men</div>
          </div>
          <ul class="skills">
            <li>
              <span>Java</span>
              <span class="float-right">90%</span>
              <div data-role="progress" data-value="90" data-small="true"></div>
            </li>
            <li>
              <span>JavaScript</span>
              <div data-role="progress" data-value="80" data-small="true" data-cls-bar="bg-cyan"></div>
            </li>
            <li>
              <span>Python</span>
              <div data-role="progress" data-value="15" data-small="true" data-cls-bar="bg-red"></div>
            </li>
            <li>
              <span>English</span>
              <div data-role="progress" data-value="10" data-small="true" data-cls-bar="bg-orange"></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs, reactive, onMounted } from 'vue';

import { useRouter } from 'vue-router';
export default defineComponent({
  name: 'Profile',
  setup() {
    const route = useRouter();
    const data = reactive({
      test: (index) => {
        console.log(index);
      },
    });

    onMounted(() => {
      console.log('onMounted()');

      // this.bgUrl = result.imgurl
    });

    const refData = toRefs(data);
    return {
      ...refData,
    };
  },
});
</script>
<style scoped lang="less">
@import url('./profile.less');
</style>
