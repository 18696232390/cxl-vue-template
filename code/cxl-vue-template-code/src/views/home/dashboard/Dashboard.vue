<template>
  <div class="dashboard">
    <div>
      <Census></Census>
    </div>
    <div>
      <Charts></Charts>
    </div>
    <div>
      <Profile></Profile>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs, reactive, onMounted } from 'vue';

import { useRouter } from 'vue-router';

// import component
import Census from '@/views/home/dashboard/census/Census.vue';
import Charts from '@/views/home/dashboard/charts/Charts.vue';
import Profile from '@/views/home/dashboard/profile/Profile.vue';

export default defineComponent({
  name: 'Dashboard',
  components: {
    Census,
    Charts,
    Profile,
  },
  setup() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
@import url('./dashboard.less');
</style>
