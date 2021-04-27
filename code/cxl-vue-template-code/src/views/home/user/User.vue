<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>系统管理</el-breadcrumb-item>
    <el-breadcrumb-item>用户管理</el-breadcrumb-item>
  </el-breadcrumb>

  <div class="user">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="审批人">
        <el-input v-model="formInline.user" placeholder="审批人"></el-input>
      </el-form-item>
      <el-form-item label="活动区域">
        <el-select v-model="formInline.region" placeholder="活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>

        <el-button type="success">导出Excel</el-button>

        <el-button type="success" @click="exportWord()">导出Word</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="date" label="日期" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
      <el-table-column label="操作" width="250" fixed="right">
        <template #default="scope">
          <el-button @click="showDetailHandler(scope.row)" type="" size="small">查看</el-button>
          <el-button @click="showEditHandler(scope.row)" type="warning" size="small">编辑</el-button>
          <el-button @click="showDeleteHandler(scope.row)" type="danger" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div style="text-align: center; margin-top: 1rem">
      <el-pagination background layout="prev, pager, next" :total="1000"> </el-pagination>
    </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable */

import { defineComponent, toRefs, reactive, onMounted } from 'vue';

import { useRouter } from 'vue-router';
export default defineComponent({
  name: 'Home',
  components: {},
  setup() {
    const route = useRouter();
    const data = reactive({
      formInline: {
        user: '',
        region: '',
      },
      json_fields: {
        日期: 'date',
        名称: 'name',
        地址: 'address',
      },
      json_meta: [
        [
          {
            ' key ': ' charset ',
            ' value ': ' utf- 8 ',
          },
        ],
      ],
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
        },
      ],
      test: (index) => {
        console.log(index);
      },
      onSubmit() {
        console.log('submit!');
      },

      // 查看
      showDetailHandler(item) {
        console.log('查看', item);
      },
      showEditHandler(item) {
        console.log('打开修改弹框', item);
      },
      showDeleteHandler(item) {
        console.log('删除', item);
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        })
          .then(() => {
            this.$message({
              type: 'success',
              message: '删除成功!',
            });
          })
          .catch(() => {
            this.$message({
              type: 'info',
              message: '已取消删除',
            });
          });
      },
      exportWord() {
        var dataList = data.tableData;
        (window as any).JSZipUtils.getBinaryContent('/UserList.docx', (error, content) => {
          // input.docx是模板。我们在导出的时候，会根据此模板来导出对应的数据
          // 抛出异常
          if (error) {
            console.error('导出失败');
            throw error;
          }

          // 创建一个JSZip实例，内容为模板的内容
          // eslint-disable-next-line no-undef
          const zip = new (window as any).JSZip(content);
          // 创建并加载docxtemplater实例对象
          // eslint-disable-next-line new-cap
          const doc = new (window as any).docxtemplater().loadZip(zip);
          // 设置模板变量的值
          doc.setData({
            table: dataList,
          });

          try {
            // 用模板变量的值替换所有模板变量
            doc.render();
          } catch (error) {
            // 抛出异常
            const e = {
              message: error.message,
              name: error.name,
              stack: error.stack,
              properties: error.properties,
            };
            console.log(JSON.stringify({ error: e }));
            throw error;
          }

          // 生成一个代表docxtemplater对象的zip文件（不是一个真实的文件，而是在内存中的表示）
          const out = doc.getZip().generate({
            type: 'blob',
            mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
          });
          // 将目标文件对象保存为目标类型的文件，并命名
          // eslint-disable-next-line no-undef
          (window as any).saveAs(out, '用户列表.docx');
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
@import url('./User.less');
</style>
