<template>
<div>
  <div class="content">
    <div class="table">
      <div class="crumbs">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item><i class="el-icon-menu"></i> 表格</el-breadcrumb-item>
          <el-breadcrumb-item>基础表格</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="handle-box">
        <el-button type="primary" icon="delete" class="handle-del mr10">批量删除</el-button>
        <el-select  placeholder="筛选品牌" class="handle-select mr10">
          <el-option key="1" label="1" value="1"></el-option>
          <el-option key="2" label="2" value="2"></el-option>
        </el-select>
        <el-input placeholder="筛选关键词" class="handle-input mr10" v-model="keyword"></el-input>
        <el-button type="primary" icon="search" @click="brandListSearched">搜索</el-button>
      <div @click="Addshop()" class="el">
  <el-button type="info" @click="centerDialogVisible = true">添加商品</el-button>
</div>
      </div>
      <el-table style="width: 100%;height:500px;"
                :data="brands"
      highlight-current-row
                border
      >
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          fixed
           label="商品名" max-width="80"
        >
          <template slot-scope="scope">
            <span>{{ scope.row.id }}</span>
          </template>
        </el-table-column>
        <el-table-column
           label="品牌"
        >
          <template  slot-scope="scope">
            <span>{{ scope.row.goodsNumber }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="操作" width="180"
        >
          <template slot-scope="scope">
            <router-link :to="'/test/'+scope.row.id">
            <el-button  @click="update(scope.row)" plain>商品片</el-button>
            </router-link>
          </template>
        </el-table-column>
        <el-table-column
          label="产地" width="80"
        >
          <template  slot-scope="scope">
            <span>{{ scope.row.goodsName }}</span>
          </template>
        </el-table-column>
                <el-table-column
          label="状态" width="100"
        >
          <template  slot-scope="scope">
            <div class="pack">
              <el-button :type='scope.row.status ==true ? "danger" : "success"'  size="small"
                         @click="switche(scope.row)"
                         v-text='scope.row.status==true?"下架":"上架"'>
              </el-button>
            </div>
                      </template>
        </el-table-column>
        <el-table-column
          label="上传" min-width="180"
        > <template slot-scope="scope">
          <el-button type="primary" size="small"  @click="examine(scope.row.goodsId)">查看商品图片</el-button>
                  </template>
        </el-table-column>
        <el-table-column
          label="操作" width="180"
        >
          <template slot-scope="scope">
            <span @click="centerD = true" >
              <el-button type="primary" size="small"  @click="update(scope.row)">编辑</el-button>
            </span>
            <el-button type="danger" size="small" @click="del(scope.row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="pagination">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="5">
        </el-pagination>
      </div>
    </div>
    <!--添加商品-->
    <el-dialog
      title="提示"
      :visible.sync="centerDialogVisible"
      center>
      <span>货号:</span>
       <el-input v-model="from.cargo" size="medium" placeholder="请输入内容"></el-input>
      <el-select  placeholder="筛选品牌" class="handle-select mr10" v-model="from.brand">
        <el-option
          v-for="item in Owe"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-input v-model="from.inp" placeholder="请输入内容"></el-input>
      <!--批次-->
      <br>
      <span>批次:</span>
      <el-input  size="medium" v-model="from.batch"  placeholder="请输入内容"></el-input>
      <!--产地-->
      <el-select  placeholder="产地"    v-model="from.origin" class="handle-select mr10" id="we">
        <el-option key="1" label="日本" value="1"></el-option>
        <el-option key="2" label="瑞士" value="2"></el-option>
        <el-option key="3" label="法国" value="3"></el-option>
        <el-option key="4" label="澳大利亚" value="4"></el-option>
        <el-option key="5" label="德国" value="5"></el-option>
        <el-option key="6" label="冰岛" value="6"></el-option>
      </el-select>
      <!--//供应商-->
      <!--日期-->
      <div class="block">
        <span class="demonstration">生产日期</span>
        <el-date-picker
          v-model="value2"
          align="right"
          type="date"
          placeholder="选择日期"
          :picker-options="pickerOptions1">
        </el-date-picker>
      </div>
      <!--保质期-->
      <el-select  placeholder="保质期"  v-model="from.shelfLife" class="handle-select mr10">
        <el-option key="1" label="1年" value="1"></el-option>
        <el-option key="2" label="3年" value="2"></el-option>
        <el-option key="3" label="5年" value="3"></el-option>
        <el-option key="4" label="8年" value="2"></el-option>
        <el-option key="5" label="永生" value="3"></el-option>
      </el-select>
      <!--销售价-->
      <span>销售价:</span>
      <el-input  size="medium" v-model="from.salesPrice" placeholder="请输入内容"></el-input>
      <span>成本价:</span>
      <el-input  size="medium"  v-model="from.costPrice" placeholder="请输入内容"></el-input>
      <!--状态-->
      <el-select  placeholder="状态" v-model="from.status" class="handle-select mr10" >
        <el-option key="1" label="1" value="1"></el-option>
        <el-option key="2" label="0" value="2"></el-option>
      </el-select>
      <span>商品名:</span>
      <el-input  size="medium"  v-model="from.goodsName" placeholder="请输入商品名
"></el-input>
      <span slot="footer" class="dialog-footer">
    <el-button @click="centerDialogVisible = false">取 消</el-button>
        <span @click="addss()">
          <el-button type="primary" @click="centerDialogVisible = false" >确 定</el-button>
        </span>
  </span>
    </el-dialog>
    <!--编辑商品-->
    <el-dialog
      title="提示"
      :visible.sync="centerD"
      center>
      <span>货号:</span>
      <el-input v-model="List.goodsNumber" size="medium" placeholder="请输入内容"></el-input>
      <el-select  placeholder="筛选品牌" class="handle-select mr10" v-model="List.brand">
        <el-option key="1" label="1" value="1"></el-option>
        <el-option key="2" label="2" value="2"></el-option>
      </el-select>
      <el-input v-model="List.upc" placeholder="请输入内容"></el-input>
      <!--批次-->
      <span>批次:</span>
      <el-input  size="medium" v-model="List.batch"  placeholder="请输入内容"></el-input>
      <!--产地-->
      <el-select  placeholder="产地" v-model="List.origin" class="handle-select mr10" id="soy">
        <el-option key="1" label="美国" value="1"></el-option>
        <el-option key="2" label="日本" value="2"></el-option>
        <el-option key="2" label="新加坡" value="3"></el-option>
      </el-select>
      <!--//供应商-->
      <!--日期-->
      <!--productionAt-->
            <div class="block">
        <span class="demonstration">生产日期</span>
        <el-date-picker
          v-model="value2"
          align="right"
          type="date"
          placeholder="选择日期"
          :picker-options="pickerOptions1">
        </el-date-picker>
      </div>
      <!--销售价-->
      <span>销售价:</span>
      <el-input  size="medium" v-model="List.salesPrice" placeholder="请输入内容"></el-input>
      <span>成本价:</span>
      <el-input  size="medium"  v-model="List.costPrice" placeholder="请输入内容"></el-input>
      <!--状态-->
      <el-select  placeholder="状态" v-model="List.status" class="handle-select mr10" >
        <el-option key="1" label="1" value="1"></el-option>
        <el-option key="2" label="0" value="2"></el-option>
      </el-select>
      <span>商品名:</span>
      <el-input  size="medium"  v-model="List.goodsName" placeholder="请输入商品名
"></el-input>
      <span slot="footer" class="dialog-footer">
    <el-button @click="centerDialogVisible = false">取 消</el-button>
        <span @click="suree(List)">
          <el-button type="primary" @click="centerDialogVisible = false" >确 定</el-button>
        </span>
  </span>
    </el-dialog>
  </div>
  <heder></heder>
  <broad></broad>
</div>
</template>
<script>
   import {shoplie,fluctuate,Adshop,Supload,Areste,bralie} from '../axios/ajax/ajax'
   import VueImgInputer from 'vue-img-inputer'
  import heder from '@/components/heder'
  import broad from '@/components/broadside'
   var vr={
     goodsName: "" ,
       cargo: "" ,
       shelfLife: "" ,
       costPrice: "" ,
       status: "" ,
       brand: "" ,
       batch: "" ,
       origin: "" ,
       inp:'',
       salesPrice:"",
   }
  export default {
    data() {
      return {
        pickerOptions1: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        value1: '',
        value2: '',
        value:"",
        brands:[],
        centerDialogVisible: false,
        centerD:false,
        List:"",
        imageUrl: '',
        keyword:'',
        loading:true,
        from:{
          goodsName: "" ,
          cargo: "" ,
          shelfLife: "" ,
          costPrice: "" ,
          status: "" ,
          brand: "" ,
          batch: "" ,
          origin: "" ,
          inp:'',
          salesPrice:"",
          Owe:[]
        }
      }
    },
    created(){
      this.showtimes()
      bralie({}).then((res) => {
        if (res.code==200) {
          let DataList = res.data.list;
          let dir = [];
          for (let i = 0; i < DataList.length; i++) {
            dir[i] = {
              value: DataList[i].brandId,
              label: DataList[i].brand
            }
          }
          this.Owe = dir;
        }
      }).catch((res) => {
        this.$message({
          message: res.message,
          type: 'error'
        });
      });
    },
    computed: {
    },
    components: {
      heder,
      broad,
    },
    methods: {
        showtimes(){
          shoplie({
          }).then( (res)=>{
            if(res.code ===200){
              this.brands=res.data.list
            }
          })
        },
      formmatData(a){
        let c, b = new Date(a);
        return c = (b.getFullYear() + '-' + (b.getMonth() + 1) + '-' + b.getDate())
      },
      del(id){
        var index = this.brands.findIndex(function(value, index){
          return value.id == id;
        });
        //2. 从数组中删除这个元素
        this.brands.splice(index, 1);
},
      brandListSearched(){
        //要根据用户输入的关键字，搜索this.brands中的所有和关键字匹配this.word的内容，然后将找到的内容返回
        // var that = this;
        return this.brands.filter((v, i) => {
          return v.name.indexOf(this.keyword) != -1;
        })
      },
      switche(rq){
        if(rq.status==true){
            rq.status=0
          }else{
            rq.status=1
          }
        fluctuate({goodsId:rq.id,status:rq.status}).then((res) => {
          if(res.code==200){
          }
        });
      },
      Addshop(){
      },
      addss(){
        var demandtime2 = '',
          demandtime2 = this.formmatData(this.value2);

        var list={
          goodsNumber:this.from.cargo,
          upc:this.from.cargo,
          brand:this.from.brand,
          batch:this.from.batch,
          origin:this.from.origin,
          supplier:this.from.shelfLife,
          productionAt: demandtime2,
          shelfLife:"this.from.shelfLife",
          salesPrice:this.from.salesPrice,
          costPrice:this.from.costPrice,
          status:this.from.status,
          goodsName:this.from.goodsName,
        }
        Adshop(list).then((res) => {
          if(res.code==200){
            this.showtimes()
            this.init(this.from,vr)
          }
        });
      },
      update(sit){
        this.List=sit
      },
      init(a,b){
        for(let i in a){
          a[i] = b[i]
        }
      },
      suree(List){
        var demandtim = '',
          demandtim = this.formmatData(this.value2);
          var ol={
            goodsId:List.id,
            goodsNumber:List.goodsNumber,
            UPC:List.UPC,
            brand:List.brand,
            goodsExhibitionPictureId:List.goodsExhibitionPictureId,
            goodsDescribePictureId:List.goodsDescribePictureId,
            batch:List.batch,
            origin:List.origin,
            productionAt:demandtim,
            shelfLife:List.shelfLife,
            salesPrice:List.salesPrice,
            costPrice:List.costPrice,
          }
        Areste(ol).then((res) => {
          if(res.code==200){
          }
        });
      },
      examine(id){
        Panlie
      }
    }
  }
</script>
<style lang="scss" scoped>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  .el-input__inner{
    width: 0;
  }
  .el-input{
    margin: 10px 10px;
    width: 160px;
  }
  .handle-select mr10{
    margin-top: 20px;
  }
  .handle-box {
    margin-bottom: 20px;
  }
  .handle-select {
    width: 120px;
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

  }
  .handle-input {
    width: 300px;
    display: inline-block;
  }
  .handle-box {
    margin-top: 20px;
  }
  .pagination {
    position: absolute;
    margin-top: 20px;
    right: 20px;
  }
  .el{
    display: inline-block;
    margin-left: 48px;
  }
</style>
