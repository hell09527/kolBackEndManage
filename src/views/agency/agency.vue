<template>
  <div>
    <heder></heder>
    <broad></broad>
    <div class="content">
      <el-button type="primary">查询</el-button>
      <template>
        <el-table
          :data="tableData"
          border
          style="width: 100%">
          <el-table-column
            prop="shopName"
            label="店铺名"
            width="180">
          </el-table-column>
          <el-table-column
            prop="goodsName"
            label="商品名"
            width="180">
          </el-table-column>
          <el-table-column
            prop="brand"
            label="品牌">
          </el-table-column>
        </el-table>
      </template>
    </div>
  </div>
</template>

<script>
  import heder from '@/components/heder'
  import broad from '@/components/broadside'
  import {Bdai,Sdanb} from '../../axios/ajax/ajax'

  export default {
    name: 'xxx',
    data(){
      return {
        tableData: [
        ],
        input10: ''
      }
    },
    mounted(){
    },
    created(){
      Bdai({}).then((res) => {
        if(res.code==200){
this.tableData=res.data.list
        }
      });
    },
    methods: {
    },
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
