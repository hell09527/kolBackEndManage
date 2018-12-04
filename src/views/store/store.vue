<template>
<div>
  <heder></heder>
  <broad></broad>
  <div class="content">
    <el-table
      :data="tableData5"
      style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="商品名称">
              <span>{{ props.row.shopName }}</span>
            </el-form-item>
            <el-form-item label="所属店铺">
              <span>{{ props.row.agentName }}</span>
            </el-form-item>
            <!--<el-form-item label="商品 ID">-->
              <!--<span>{{ props.row.agentId }}</span>-->
            <!--</el-form-item>-->
            <el-form-item label="店铺 ID">
              <span>{{ props.row.agentId }}</span>
            </el-form-item>
            <el-form-item label="商品分类">
              <span>{{ props.row.phone }}</span>
            </el-form-item>
            <!--<el-form-item label="店铺地址">-->
              <!--<span>{{ props.row.address }}</span>-->
            <!--</el-form-item>-->
            <el-form-item label="商品描述">
              <span>{{ props.row.shopDescription }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column
        label="商品 ID"
        prop="agentId">
      </el-table-column>
      <el-table-column
        label="商品名称"
        prop="agentName">
      </el-table-column>
      <el-table-column
        label="描述"
        prop="shopDescription">
      </el-table-column>

      <el-table-column
        label="操作"
        >
        <template slot-scope="scope">

              <el-button :type='scope.row.shopStatus==1? "danger":"success"' size="small"
                         @click="update(scope.row)"
                         v-text="scope.row.shopStatus==1? '未审核':'已通过'">122</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</div>
</template>
<script>
  import heder from '@/components/heder'
  import broad from '@/components/broadside'
  import {dianlie,Puload} from '../../axios/ajax/ajax'
    export default {
        name: 'xxx',
        data(){
            return {
              tableData5: [
              ],
            }
        },
        mounted(){
        },
      created(){
        this.showtimes()
      },
        methods: {
          showtimes(){
            dianlie({
            }).then( (res)=>{
              if(res.code ===200){
                this.tableData5=res.data.list
              }
            })
          },
          update(row){
            console.log(row.shopStatus);
            if(row.shopStatus==2){
              row.shopStatus=1
            }else{
              row.shopStatus=2
            }
            Puload({shareHash:row.shareHash,shopName:row.shopName,shopStatus:row.shopStatus
            }).then( (res)=>{
              if(res.code ===200){
              }
            })
          }
        },
        components: {
          heder,
          broad
        }
    }
</script>
<style lang="scss">
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
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>
