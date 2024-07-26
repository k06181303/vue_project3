<template>
    <el-dialog :modelValue="popShow" title="Edit"  width="30%" center :show-close="false" :close-on-click-modal="false" :close-on-press-escape="false">
      <el-form :model="editData" ref="ruleFromRef">
        <el-form-item label="Title" prop="title" required>
          <el-input v-model='editData.title' />
        </el-form-item>
        <el-form-item label="Price" prop="price" required>
          <el-input v-model='editData.price' />
        </el-form-item>
        <el-form-item>
          <el-button @click="$event =>confirmClick('cancel')">Cancel</el-button>
          <el-button type="primary" @click="$event =>submitForm(ruleFromRef)">Confirm</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </template>
  <script setup>
  import { defineProps, reactive, ref } from 'vue';
  const { popShow, message, confirmClick } = defineProps(['popShow', 'message', 'confirmClick'])
  /**
   * 編輯附件的數據
   */
  const editData = reactive({
    title: message.title,
    price: message.price,
    id: message.id
  })
  /**
   * 表單測試
   */
  const ruleFromRef = ref(null)
  const submitForm = async (formEl) => {
    if (!formEl) return
    await formEl.validate((valid, fields) => {
      if (valid) {
        confirmClick({ title: editData.title, price: editData.price, id: editData.id })
      } else {
        console.log('error submit!', fields)
      }
    })
  }
  
  </script>
  <style lang='less' scoped>
  .dialog-footer button:first-child {
    margin-right: 10px;
  }
  
  :deep(.el-form-item__label) {
    width: 80px !important;
  }
  
  :deep(.el-form-item__content) {
    justify-content: center;
    margin-left: 0 !important;
  }
  </style>