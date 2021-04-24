<template>
  <div class="home">
    <el-container style="height: 100vh">
      <el-header>
        <div class="home-header">
          <div class="home-header-item left-title">
            <div>cxl-vue-template</div>
          </div>
          <div class="home-header-item left-nav"></div>
          <div class="home-header-item right-search"></div>
          <div class="home-header-item right-haeder">
            欢迎：<span>超级管理员</span>
            <img
              class="user-header-img"
              src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3504501744,3249216864&fm=26&gp=0.jpg"
            />
          </div>
        </div>
      </el-header>
      <el-container style="width: 100%">
        <el-aside>
          <el-menu
            :uniqueOpened="true"
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            @select="selectMenu"
          >
            <el-menu-item index="dashboard">
              <i class="el-icon-menu"></i>
              <template #title>首页</template>
            </el-menu-item>
            <el-submenu index="system">
              <template #title>
                <i class="el-icon-location"></i>
                <span>系统管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="user">用户管理</el-menu-item>
                <el-menu-item index="role">角色管理</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="plugins">
              <template #title>
                <i class="el-icon-location"></i>
                <span>插件库</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="sql-format">SQL格式化</el-menu-item>
              </el-menu-item-group>
            </el-submenu>

            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <template #title>测试导航</template>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-container>
          <el-main>
            <router-view />
          </el-main>
        </el-container>
      </el-container>
      <el-footer>
        &copy; Copyright 版权归属：https://github.com/18696232390/cxl-vue-template
        <a href="https://github.com/18696232390/cxl-vue-template">点击查看</a></el-footer
      >
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs, reactive, onMounted } from 'vue';

import { useRouter } from 'vue-router';
export default defineComponent({
  name: 'Home',
  setup() {
    const route = useRouter();
    const data = reactive({
      isCollapse: true,
      searchText: '',
      test: (index) => {
        console.log(index);
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      selectMenu(key, t) {
        console.log('点击导航=>', key, t);
        route.push(key);
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
@import url('./home.less');
</style>
