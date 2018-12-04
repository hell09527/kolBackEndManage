<template>
  <div>
    <heder></heder>
    <broad></broad>
    <div class="content">
      <el-button type="text" @click="dialogVisible = true">添加商品分红百分比</el-button>
      <el-button type="primary">查询</el-button>
      <template>
        <el-table
          :data="tableData"
          highlight-current-row
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
          <el-table-column
            label="操作" width="180"
          >
            <template slot-scope="scope">
            <span @click="showtime = true" >
              <el-button type="primary" size="small"  @click="update(scope.row)">编辑</el-button>
            </span>
              <!--<el-button type="danger" size="small" @click="del(scope.row.id)">删除</el-button>-->
            </template>
          </el-table-column>
          <el-table-column
            label="操作" width="180"
          >
            <template slot-scope="scope">
              <el-button type="primary" size="small"  @click="become(scope.row)" v-text="TOguo==false? '未审核':'已通过'"></el-button>
            </template>
          </el-table-column>
          <el-table-column
            label="品牌" width="180"
          >
            <template slot-scope="scope">
              <el-button type="primary" size="small"  @click="branch(scope.row)">品牌</el-button>
            </template>
          </el-table-column>
        </el-table>
      </template>
      <!--添加内容-->
      <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose">
        <el-col :span="24" class="dev">
          <span>商品ID</span>
          <el-select v-model="from.input1" placeholder="请选择品牌" >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-col>
        <br>

        <br>
        <span>分红百分比</span>
        <el-input v-model="from.input2" placeholder="请输入内容"></el-input>
        <br>
        <el-col :span="24" class="dev">
          <span>代理商</span>
          <el-select v-model="from.input3" placeholder="请选择" >
            <el-option
              v-for="item in options4"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-col>

        <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
          <span @click="dialogVisible = false">
           <el-button type="primary" @click="breas()">确 定</el-button>
          </span>
  </span>
      </el-dialog>

      <!--编辑-->
      <el-dialog
        title="提示"
        :visible.sync="showtime"
        width="30%"
        :before-close="handleClose">
        <span>ID</span>
        <el-input v-model="percentage.goodsId" placeholder="请输入内容"  :disabled="true"></el-input>
        <br>
        <span>分红百分比</span>
        <el-input v-model="percentage.percentageBonus" placeholder="请输入内容"></el-input>
        <br>
        <span>代理用户ID</span>
        <el-input v-model="percentage.agentId" placeholder="请输入内容"  :disabled="true"></el-input>
        <br>
        <span>分红的自增ID</span>
        <el-input v-model="percentage.id" placeholder="请输入内容"  :disabled="true"></el-input>
        <br>

        <span slot="footer" class="dialog-footer">
    <el-button @click="showtime = false">取 消</el-button>
          <span @click="showtime = false">
           <el-button type="primary" @click="surew()">确 定</el-button>
          </span>
  </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
  import heder from '@/components/heder'
  import broad from '@/components/broadside'
  import {Slib,Sadd,Seidt,Saudit,Schoice,Sport,Blie} from '../../axios/ajax/ajax'



  var ck={
    input1:"",
      input2:"",
      input3:"",
      input4:"",}

  export default {
    name: 'xxx',
    data(){
      return {
        dialogVisible: false,
        showtime: false,
        tableData: [

        ],
        percentage:{},
        options:[],
        options4:[],
        TOguo:false,

        from:{
            input1:"",
          input2:"",
          input3:"",
          input4:"",}
      }
    },
    mounted(){
      //商品分红百分比添加-选择B用户接
      Schoice({}).then((res) => {
        if (res.code==200) {
          let DataList = res.data;
          let dir = [];
          for (let i = 0; i < DataList.length; i++) {
            dir[i] = {
              value: DataList[i].agentId,
              label: DataList[i].agentName
            }
          }
          this.options = dir;
        }
      }).catch((res) => {
        this.$message({
          message: res.message,
          type: 'error'
        });
      });

//用户列表主要是为了拿到id
      Blie({}).then((res) => {
        if (res.code==200) {
          let DataLis = res.data.list;
          let die = [];
          for (let i = 0; i < DataLis.length; i++) {
            die[i] = {
              value: DataLis[i].agentId,
              label: DataLis[i].shopName
            }
          }
          this.options4 = die;
        }
      }).catch((res) => {
        this.$message({
          message: res.message,
          type: 'error'
        });
      });
    },
    created(){
      Slib({}).then((res) => {
        if(res.code==200){
          this.tableData=res.data.list
        }
      });
    },
    methods: {
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
      breas(){
        console.log(this.value);
        console.log(this.value1);
        var   list={
            goodsId:this.from.input1,
            percentage:this.from.input2,
            agentId:this.from.input3,
          }
        Sadd(list).then((res) => {
          if(res.code==200){
            this.init(this.form,ck)
          }
        });
      },
      init(a,b){
        for(let i in a){
          a[i] = b[i]
        }
      },
      update(all){
        console.log(all);
        this.percentage=all
  },
      become(ol){
        Saudit({status:0,bonusId:ol.id}).then((res) => {
          if(res.code==200){
            this.TOguo=true
          }
        });
  },
      surew(){
        Seidt({goodsId:this.percentage.goodsId,percentage:this.percentage.percentageBonus,agentId:this.percentage.agentId,
          bonusId:this.percentage.id}).then((res) => {
          if(res.code==200){
          }
        });
      },
      branch(AO){
        Sport({brand:AO.brand}).then((res) => {
          if(res.code==200){
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
