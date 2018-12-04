<template>
  <div>
    <heder></heder>
    <broad></broad>
    <div class="content">
      <el-button  @click="dialogFormVisible = true">添加品牌</el-button>
      <el-table
        :data="tableData"

        height="265"
        border
        style="width: 100%">
        <el-table-column
          fixed
          prop="brandId"
          label="ID"
          width="180">
        </el-table-column>
        <el-table-column
          prop="brand"
          label="品牌名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="description"
          label="品牌描述">
        </el-table-column>

        <el-table-column
          label="操作" width="180"
        >
          <template slot-scope="scope">
            <span @click="dialogFormr = true">
               <el-button type="primary" size="small" @click="Edit(scope.row)">编辑</el-button>
            </span>

            <el-button type="danger" size="small" >删除</el-button>
          </template>
        </el-table-column>
        <el-table-column
          prop="brand"
          label="品牌名"
          width="180">
        </el-table-column>

        <el-table-column
          prop="brand"
          label="品牌名"
          width="180">
        </el-table-column>
      </el-table>
      <!--添加品牌-->
       <el-dialog title="添加品牌" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="添加品牌" :label-width="formLabelWidth">
            <el-input v-model="form.name" auto-complete="off"></el-input>
          </el-form-item>
          <span>品牌描述</span>
          <el-input v-model="form.describe" type="textarea"  placeholder="请输入内容"></el-input>



        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <span @click="dialogFormVisible = false">
             <el-button type="primary" @click="send()">确 定</el-button>
          </span>

        </div>
      </el-dialog>
      <!--编辑品牌-->
      <el-dialog title="添加品牌" :visible.sync="dialogFormr">
        <el-form :model="form">
          <el-form-item label="添加品牌" :label-width="formLabelWidth">
            <el-input v-model="List.brand" auto-complete="off"></el-input>
          </el-form-item>
          <span>品牌描述</span>
          <el-input v-model="List.description" type="textarea"  placeholder="请输入内容"></el-input>

        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormr = false">取 消</el-button>
          <span @click="dialogFormr = false">
             <el-button type="primary" @click="savebra(List)">确 定</el-button>
          </span>

        </div>
      </el-dialog>
    </div>
  </div>


</template>

<script>
  import {branADd,bralie, branEdit} from '../axios/ajax/ajax'
  import heder from '@/components/heder'
  import broad from '@/components/broadside'

  const  air={
    describe:"",
    name: '',
    region: '',
    date1: '',
    date2: '',
    delivery: false,
    type: [],
    resource: '',
    desc: ''
  }

    export default {
        name: 'xxx',
        data(){
            return {
              tableData: [
              ]
              , dialogTableVisible: false,
              dialogFormVisible: false,
              dialogFormr: false,
              List:{},
              form: {
                describe:"",
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
              },
              formLabelWidth: '120px'
            }
        },
        mounted(){
        },
      created(){
       this.showtime()
      },
        methods: {
          showtime(){
            bralie({}).then((res) => {

              if(res.code==200){
                this.tableData=res.data.list
              }
            });
          },
          send(){
            console.log(this.form.region);
            branADd({brand:this.form.name,description:this.form.describe}).then((res) => {
              if(res.code==200){
                this.showtime()
                  this.init(this.form,air)
              }
            });
          },
          init(a,b){
            for(let i in a){
              a[i] = b[i]
            }
          },
          Edit(list){
            console.log(list);
            this.List=list
  },
          savebra(all){
            branEdit({brandId:all.brandId,brand:all.brand}).then((res) => {
              if(res.code==200){
                this.dialogFormr=false;
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
  .el-table--border{
    margin-top: 20px;
  }
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
