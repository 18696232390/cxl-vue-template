<template>
  <div class="dashboard-census">
    <div class="row">
      <div class="cell">
        <div class="icon-box border bd-default">
          <div class="icon bg-orange fg-white"><span class="mif-cloud"></span></div>
          <div class="content p-4">
            <div class="text-upper">cpu traffic</div>
            <div class="text-upper text-bold text-lead">90%</div>
          </div>
        </div>
      </div>
      <div class="cell">
        <div class="icon-box border bd-default">
          <div class="icon bg-cyan fg-white"><span class="mif-meetup"></span></div>
          <div class="content p-4">
            <div class="text-upper">cpu traffic</div>
            <div class="text-upper text-bold text-lead">90%</div>
          </div>
        </div>
      </div>
      <div class="cell">
        <div class="icon-box border bd-default">
          <div class="icon bg-green fg-white"><span class="mif-ie"></span></div>
          <div class="content p-4">
            <div class="text-upper">cpu traffic</div>
            <div class="text-upper text-bold text-lead">90%</div>
          </div>
        </div>
      </div>
      <div class="cell">
        <div class="icon-box border bd-default">
          <div class="icon bg-pink fg-white"><span class="mif-favorite"></span></div>
          <div class="content p-4">
            <div class="text-upper">cpu traffic</div>
            <div class="text-upper text-bold text-lead">90%</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs, reactive, onMounted } from 'vue';

import { useRouter } from 'vue-router';
export default defineComponent({
  name: 'Census',
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
@import url('./census.less');
</style>
