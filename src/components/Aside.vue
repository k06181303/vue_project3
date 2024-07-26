<template>
   <el-menu :collapse="isCollapse" class="el-menu-vertical-demo" active-text-color="#ffd04b"
   background-color="#545c64" text-color="#fff">
    <div class="xd-icon">
        <img src="../assets/xd-icon.png">
        <span>小滴課程管理系統</span>
    </div>
    <el-sub-menu index="1">
      <template #title>
        <el-icon><document /></el-icon>
        <span>課程管理</span>
      </template>
        <el-menu-item index="1-1">Front-End Course</el-menu-item>
        <el-menu-item index="1-2">Back-End Course</el-menu-item>
        <el-menu-item index="1-3">Full Stack Course</el-menu-item>
    </el-sub-menu>

    <el-sub-menu index="2">
      <template #title>
        <el-icon><Setting /></el-icon>
        <span>用戶管理</span>
      </template>
        <el-menu-item index="2-1">用戶1</el-menu-item>
        <el-menu-item index="2-2">用戶2</el-menu-item>
    </el-sub-menu>
  </el-menu>
  </template>
  <script setup>
  import { defineProps } from 'vue';
  const { isCollapse } = defineProps(['isCollapse'])
  </script>

  <style lang='less' scoped>
  .el-radio-button__inner {
  padding: 0;
}

.el-menu--collapse {
  border: none;
}

.el-menu:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
  border: none;
}

.xd-icon {
  display: flex;
  align-items: center;
  font-weight: 600;
  height: 60px;
  background-color: #fff;
  white-space: nowrap;
  padding-left: 15px;

  img {
    width: 45px;
    height: 40px;
    margin-right: 10px;
  }
}
  </style>