<template>
  <div class="home">
    <el-container style="height: 100vh">
      <el-header>
        <div class="home-header">
          <div class="home-header-item left-title">
            <div class="left-title logo">
              <img class="logo logo-img" src="/img/logo/logo.svg" />
            </div>
            <div class="left-title title">
              <div>后台管理系统</div>
            </div>
          </div>
          <div class="home-header-item left-nav"></div>
          <div class="home-header-item right-search" style="text-align: end; width: 70rem">
            <div class="right-search search">
              <el-input prefix-icon="el-icon-search" v-model="searchText" placeholder="搜索..."></el-input>
            </div>
            <div class="right-search split"></div>
            <div class="right-search email">
              <el-badge :value="12" class="item">
                <i class="el-icon-s-comment"> </i>
              </el-badge>
            </div>
          </div>
          <div class="home-header-item right-haeder" style="text-align: end; margin-right: 1rem; width: 52rem">
            欢迎：<span>超级管理员</span>
            <el-dropdown>
              <img
                class="user-header-img"
                src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3504501744,3249216864&fm=26&gp=0.jpg"
              />
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item icon="el-icon-s-operation">个人资料</el-dropdown-item>
                  <el-dropdown-item icon="el-icon-edit">修改密码</el-dropdown-item>
                  <el-dropdown-item icon="el-icon-back" @click="loginOut()">退出登录</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
        </div>
      </el-header>
      <el-container style="width: 100%">
        <el-aside>
          <el-menu
            :uniqueOpened="true"
            default-active="2"
            @open="handleOpen"
            @close="handleClose"
            background-color="#fff"
            text-color="#000"
            active-text-color="#000"
            @select="selectMenu"
          >
            <el-menu-item index="dashboard">
              <i class="el-icon-s-home"></i>
              <template #title>首页</template>
            </el-menu-item>
            <el-submenu index="system">
              <template #title>
                <i class="el-icon-setting"></i>
                <span>系统管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="user">
                  <i class="el-icon-user"></i>
                  <template #title>用户管理</template>
                </el-menu-item>
                <el-menu-item index="role">
                  <i class="el-icon-star-on"></i>
                  <template #title>角色管理</template>
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="plugins">
              <template #title>
                <i class="el-icon-s-open"></i>
                <span>插件库</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="sql-format">
                  <template #title>
                    <i class="el-icon-s-help"></i>
                    <span>SQL格式化</span>
                  </template>
                </el-menu-item>
                <el-menu-item index="time-format">
                  <template #title>
                    <i class="el-icon-s-help"></i>
                    <span>日期格式化</span>
                  </template>
                </el-menu-item>
                <el-menu-item index="md5-encrypt">
                  <template #title>
                    <i class="el-icon-s-help"></i>
                    <span>MD5加密</span>
                  </template>
                </el-menu-item>
                <el-menu-item index="md-edit">
                  <template #title>
                    <i class="el-icon-s-help"></i>
                    <span>MarkDown</span>
                  </template>
                </el-menu-item>
                <el-menu-item index="map-baidu">
                  <template #title>
                    <i class="el-icon-s-help"></i>
                    <span>百度地图</span>
                  </template>
                </el-menu-item>
                <el-menu-item index="map-gaode">
                  <template #title>
                    <i class="el-icon-s-help"></i>
                    <span>高德地图</span>
                  </template>
                </el-menu-item>
                <el-menu-item index="video-start">
                  <template #title>
                    <i class="el-icon-s-help"></i>
                    <span>视频播放器</span>
                  </template>
                </el-menu-item>
                <el-menu-item index="rich-edit">
                  <template #title>
                    <i class="el-icon-s-help"></i>
                    <span>富文本</span>
                  </template>
                </el-menu-item>

                <el-menu-item index="vue-vr">
                  <template #title>
                    <i class="el-icon-s-help"></i>
                    <span>VR全景插件</span>
                  </template>
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="charts">
              <template #title>
                <i class="el-icon-setting"></i>
                <span>图表库</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="chart-echarts">
                  <i class="el-icon-user"></i>
                  <template #title>Echarts图表</template>
                </el-menu-item>
                <el-menu-item index="chart-highcharts">
                  <i class="el-icon-user"></i>
                  <template #title>HighCharts图表</template>
                </el-menu-item>
                <el-menu-item index="chart-zoomcharts">
                  <i class="el-icon-star-on"></i>
                  <template #title>Zoomcharts图表</template>
                </el-menu-item>
                <el-menu-item index="chart-gojs">
                  <i class="el-icon-star-on"></i>
                  <template #title>go.js图表</template>
                </el-menu-item>
                <el-menu-item index="chart-g6">
                  <i class="el-icon-star-on"></i>
                  <template #title>G6图表</template>
                </el-menu-item>
                <el-menu-item index="chart-kityminder">
                  <i class="el-icon-star-on"></i>
                  <template #title>kityminder思维导图</template>
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>

            <el-menu-item :index="'target=' + encodeURIComponent('https://github.com/18696232390/cxl-vue-template')">
              <i class="el-icon-c-scale-to-original"></i>
              <template #title>外链</template>
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
        <span class="home-footer-text">
          &copy; Copyright 版权归属：https://github.com/18696232390/cxl-vue-template
          <a href="https://github.com/18696232390/cxl-vue-template">点击查看</a>
        </span>
      </el-footer>
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
      transitionName: '',
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
        if (key.startsWith('target')) {
          console.log('外链');
          var url = decodeURIComponent(key).split('=')[1];
          console.log(url);
          route.push('/routerAccess?type=url&url=' + encodeURIComponent(url));
        } else {
          route.push(key);
        }
      },

      // 退出登录
      loginOut() {
        this.$confirm('确定要退出登录吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        }).then(() => {
          route.push('/login');
          this.$message({
            type: 'success',
            message: '登出成功!',
          });
        });
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
@import url('./Home.less');
</style>
