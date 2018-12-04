<template>
  <div  >
    <el-menu   background-color="#fff"  default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">商品管理</span>
        </template>
                <el-menu-item-group>
                  <router-link to="/table">
                    <el-menu-item index="1-1">商品列表</el-menu-item>
                  </router-link>
                  <router-link to="/elementary">
                    <el-menu-item index="1-1">品牌管理</el-menu-item>
                  </router-link>
                  <router-link to="/commodity">
          <el-menu-item index="1-2">商品片</el-menu-item>
                  </router-link>
                  <router-link to="/agency">
                    <el-menu-item index="1-1">用户代理商品</el-menu-item>
                  </router-link>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span slot="title">用户管理</span>
        </template>
        <el-menu-item-group>
                    <router-link to="/uploading">
            <el-menu-item index="1-1">上传文件</el-menu-item>
          </router-link>
            <router-link to="/Userconsult">
                     <el-menu-item index="1-2">用户列表</el-menu-item>
          </router-link>
          <router-link to="/store">
            <el-menu-item index="1-4-1">店铺管理</el-menu-item>
          </router-link>
          <router-link to="/indent">
            <el-menu-item index="1-3">订单列表</el-menu-item>
          </router-link>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu>
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span slot="title">财务管理</span>
        </template>
        <router-link to="/wewee">
          <el-menu-item index="1-1">财务统计</el-menu-item>
        </router-link>
      </el-submenu>
    </el-menu>
  </div>
</template>
<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>

<script>
  export default {
    data() {
      return {
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
