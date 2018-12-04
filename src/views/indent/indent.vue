<template>
  <div>
    <heder></heder>
    <broad></broad>
    <div class="content">
      <span>从</span>
      <span class="block">
        <span class="demonstration">默认</span>
        <el-date-picker
          v-model="value1"
          type="datetime"
          placeholder="选择日期时间">
        </el-date-picker>
      </span>
      <span>到</span>
      <span class="block">
        <span class="demonstration">默认</span>
        <el-date-picker
          v-model="value2"
          @change="show()"
          type="datetime"
          placeholder="选择日期时间">
        </el-date-picker>
      </span>
      <span>止</span>
      <el-table
        :data="tableData5"
        style="width: 100%">
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="商品名称">
                <span>{{ props.row.totalAmountUnit }}</span>
              </el-form-item>
              <el-form-item label="所属店铺">
                <span>{{ props.row.shop }}</span>
              </el-form-item>
              <el-form-item label="商品 ID">
                <span>{{ props.row.orderNo}}</span>
              </el-form-item>
              <el-form-item label="店铺 ID">
                <span>{{ props.row.totalQuantityUnit }}</span>
              </el-form-item>
              <el-form-item label="商品分类">
                <span>{{ props.row.orderStatus}}</span>
              </el-form-item>
              <el-form-item label="店铺地址">
                <span>{{ props.row.totalAmount }}</span>
              </el-form-item>
              <el-form-item label="商品描述">
                <span>{{ props.row.desc }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column
          label="商品 ID"
          prop="totalAmountUnit">
        </el-table-column>
        <el-table-column
          label="操作" width="180"
        >
          <template slot-scope="scope">
              <el-button type="primary" size="small"  @click="update(scope.row)">明细</el-button>
          </template>
        </el-table-column>
        <el-table-column
          label="描述"
          prop="orderNo">
        </el-table-column>
      </el-table>
    </div>
  </div>
  </template>
<script>
  import heder from '@/components/heder'
  import broad from '@/components/broadside'
  import {Billlie,Xlie} from '../../axios/ajax/ajax'
    export default {
        name: 'xxx',
        data(){
            return {
              tableData5: [
              ],
              pickerOptions1: {
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
              value2: ''
            }
        },
        mounted(){
        },
      created(){
      },
        methods: {
          formmatData(a){
            let c, b = new Date(a);
            return c = (b.getFullYear() + '-' + (b.getMonth() + 1) + '-' + b.getDate()+ '-' +b.getHours()+ ':' +b.getMinutes()+ ':'
            +b.getSeconds())
          },
          show(){
            var transactionStartTime=""
            var transactionEndTime=""
            transactionStartTime=this.formmatData(this.value1)

            transactionEndTime=this.formmatData(this.value2)
            Billlie({transactionStartTime:transactionStartTime,transactionEndTime:transactionEndTime
            }).then( (res)=>{
              if(res.code ===200){
this.tableData5=res.data.list
              }
            })
          },
          update(suo){
            Xlie({orderNo:suo.orderNo
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
