<template>
  <div>
    <heder></heder>
    <broad></broad>
    <div class="content">
      <el-button  @click="centerDialogVisible = true" >商品片添加</el-button>
      <form enctype="multipart/form-data" class="formData" id="formData">
        <el-button slot="trigger" size="small" type="primary" class="fileButton">选取文件</el-button>
        <input type="file" @change="uploadFile" ref="upload" class="fileClass"/>
      </form>
      <!--商品片添加-->
      <el-dialog
        title="提示"
        :visible.sync="centerDialogVisible"
        width="30%"
        center>
        <el-radio-group v-model="labelPosition" size="small">
          <el-radio-button label="left">左对齐</el-radio-button>
          <el-radio-button label="right">右对齐</el-radio-button>
          <el-radio-button label="top">顶部对齐</el-radio-button>
        </el-radio-group>
        <div style="margin: 20px;"></div>
        <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
          <el-form-item label="商品图片号">
               <el-select v-model="formLabelAlign.name" placeholder="请选择" >
            <el-option
              v-for="item in  mark"
              :key="item"
              :label="item"
              :value="item">
            </el-option>
          </el-select>
          </el-form-item>
          <el-form-item label="图片链接">
            <el-select v-model="formLabelAlign.region" placeholder="请选择" >
              <el-option
                v-for="item in picture"
                :key="item.data"
                :label="item.data"
                :value="item.data">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="是否有效">
            <el-select  placeholder="状态" v-model="formLabelAlign.type" class="handle-select mr10" >
              <el-option key="1" label="1" value="1"></el-option>
              <el-option key="2" label="0" value="2"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="图片类型">
            <el-select  placeholder="状态" v-model="formLabelAlign.typ" class="handle-select mr10" >
              <el-option key="1" label="1" value="1"></el-option>
              <el-option key="2" label="2" value="2"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
    <el-button @click="centerDialogVisible = false">取 消</el-button>
           <span @click="centerDialogVisible = false">
             <el-button type="primary" @click="bresave()">确 定</el-button>
          </span>
  </span>
      </el-dialog>
    </div>
  </div>
</template>
<script>
  import {Afragment,Panlie,Supload,shoplie} from '../../axios/ajax/ajax'
  import heder from '@/components/heder'
  import broad from '@/components/broadside'
 const ai={
    name: '',
      region: '',
      type: '',
      typ:""
  }
  const TOKEN = sessionStorage.getItem('TOKEN');
  export default {
    name: 'xxx',
    data(){
      return {
        centerDialogVisible: false,
        pir:"",
        labelPosition: 'right',
        picture:[],
        formLabelAlign: {
          name: '',
          region: '',
          type: '',
          typ:""
        },
        mark:[]
      }
    },
    created(){
      let that = this;
     var Id=that.$route.params.id

      Panlie({goodsId:Id
      }).then( (res)=>{
        if(res.code ===200){
this.tableData3=res.data.list
        }
      })
      this.showtimes()
    },
    mounted(){
    },
    methods: {
      showtimes(){
        shoplie({
        }).then( (res)=>{
          if(res.code ===200){
            res.data.list.forEach((v,i)=>{
              this.mark.push(res.data.list[i].id)
              console.log(this.mark);
            })
          }
        })
      },
      init(a,b){
        for(let i in a){
          a[i] = b[i]
        }
      },
      bresave(){
        Afragment({goodsId:this.formLabelAlign.name,goodsPictureUrl:this.formLabelAlign.region,
          isMain:this.formLabelAlign.type, isVaild:this.formLabelAlign.typ,
        }).then((res) => {
          if(res.code==200){
            this.init(this.formLabelAlign,ai)
          }
        });
      },
      uploadExchangeRate (val) {
        Supload(val).then((res) => {
          if (res.code==200) {
            this.picture.push(res)
            console.log(this.picture);
            this.$message({
              message: '上传成功',
              type: 'success'
            })
          } else {
            this.$message({
              message: res.message,
              type: 'error'
            })
          }
        }).catch((res) => {
          this.listLoading = false;
          this.$message({
            message: res.message,
            type: 'error'
          });
        });
      },
      uploadFile(e){
        let DOC = e.target.files[0],
          fileData = document.querySelector('#formData'),
          form = new FormData;

        let apikey = 'DEVTokenFORApiKey2017';
        let tempInput = document.createElement("input");
        tempInput.type = "file";
        tempInput.setAttribute('class', 'fileClass');
        tempInput.addEventListener('change', this.uploadFile);
        fileData.removeChild(fileData.lastChild);
        form.append("file",DOC);
        form.append("apikey",apikey);
        form.append("token",TOKEN);
        this.uploadExchangeRate(form);
        fileData.appendChild(tempInput);
      },
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
  .formData {
    position: relative;
    padding: 15px 0;
    overflow: hidden;
    .fileClass {
      position: relative;
      padding: 2px;
      z-index: 100;
      width: 66px;
      height: 28px;
      cursor: pointer;
      opacity: 0;
    }
    .fileButton {
      position: absolute;
      left: 0;
      z-index: 99;
      cursor: pointer;
    }
    .fileOul {
      li {
        margin: 5px 0;
        color: #48576a;
        display: block;
        overflow: hidden;
        padding-left: 4px;
        line-height: 1.8;
        text-overflow: ellipsis;
        white-space: nowrap;
        a {
          cursor: pointer;
          font-size: 14px;
          vertical-align: bottom;
          display: inline-block;
        }
      }
    }
  }
</style>

