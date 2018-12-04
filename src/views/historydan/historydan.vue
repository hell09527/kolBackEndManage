<template>
  <div>
    <heder></heder>
    <broad></broad>
    <div class="content">
      <input type="text"  v-model="input10"  placeholder="请输入内容">
      <el-button type="primary">查询</el-button>
      <template>
        <el-table
          :data="tableData"
          border
          style="width: 100%">
          <el-table-column
            prop="date"
            label="店铺名"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="手机号"
            width="180">
          </el-table-column>
          <el-table-column
            prop="address"
            label="性别">
          </el-table-column>
        </el-table>
      </template>
    </div>
  </div>
</template>

<script>
  import heder from '@/components/heder'
  import broad from '@/components/broadside'
  import {Ldan} from '../../axios/ajax/ajax'
  export default {
    name: 'xxx',
    data(){
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        input10: ''
      }
    },
    mounted(){
    },
    created(){
      Ldan({}).then((res) => {
        if(res.code==200){
        }
      });
    },
    methods: {},
    components: {
      heder,
      broad
    }
  }
</script>

<style lang="scss" scoped>
  .content {
    background: none repeat scroll 0 0 #fff;
    position: absolute;
    left: 210px;
    right: 0;
    top: 70px;
    bottom: 0;
    width: auto;
    padding: 40px;
    box-sizing: border-box;
    overflow-y: scroll;
  }
</style>
