<template>
  <el-dialog
    v-model="dialogFormVisible"
    title="登录"
    width="500"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    @closed="$emit('closed')"
  >
    <el-form
      ref="loginForm"
      :model="form"
      :label-width="formLabelWidth"
      :rules="loginFormRules"
      status-icon
    >
      <el-form-item
        label="用户名:"
        prop="username"
      >
        <el-input
          v-model="form.username"
          class="item-input"
        />
      </el-form-item>
      <el-form-item
        label="密码:"
        prop="password"
      >
        <el-input
          v-model="form.password"
          class="item-input"
          type="password"
        />
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer flex items-center justify-center">
        <el-button @click="dialogFormVisible = false">
          取 消
        </el-button>
        <el-button
          type="primary"
          @click="submitForm(loginForm)"
        >
          确 定
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup>
import { ref } from 'vue';
import axios from '@/utils/axios'
import { useUserStore } from '@/stores/user';

const userStore = useUserStore()

defineEmits(['closed'])
const dialogFormVisible = ref(true)
const formLabelWidth = '80px'

const loginForm = ref()

const loginFormRules = ref({
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' }
  ]
})

const form = ref({
  username: '',
  password: ''
})

const submitForm= (formRef) => {
  if(!formRef) return 
  formRef.validate((valid)=>{
    if(valid){
      // 登录逻辑
      axios.post('/user/login',form.value).then((res)=>{
        userStore.setUserInfo(res.data)
        dialogFormVisible.value = false
      })
    }
  })
}

</script>

<style lang="scss" scoped>
.item-input{
  width: 90%;
}
</style>