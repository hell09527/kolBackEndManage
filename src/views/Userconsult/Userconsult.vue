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
          prop="phone"
          label="手机号"
          width="180">
        </el-table-column>

        <el-table-column
          label="操作"
        >
          <template slot-scope="scope">

            <el-button  size="small"
                        :disabled="scope.row.status==1"
                       :type='scope.row.status==0 ?"danger" : "success"'
                       @click="update(scope.row)"
                       v-text="scope.row.status==0? '未审核':'已通过'"></el-button>
          </template>
        </el-table-column>
      </el-table>
    </template>
      </div>
</div>
</template>

<script>
  import heder from '@/components/heder'
  import broad from '@/components/broadside'
  import {Blie,Sdanb} from '../../axios/ajax/ajax'

    export default {
        name: 'xxx',
        data(){
            return {
              tableData:[]
              ,TOguo:false

            }
        },
        mounted(){
        },
      created(){
        Blie({}).then((res) => {

          if(res.code==200){

            this.tableData=res.data.list
            console.log(this.tableData);
          }

        });

      },
        methods: {
          update(OS){

              if(OS.status==1){
               OS.status=0

              }else{
                OS.status=1
              }
            console.log(OS.status);

            Sdanb({agentId:OS.agentId,status:OS.status,agentName:OS.agentName,idAccount:OS.idAccount,id:OS.id}).then((res) => {

              if(res.code==200){
                this.TOguo=true
              }

            });

          }
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
