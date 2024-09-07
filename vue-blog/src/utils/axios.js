import axios from 'axios';

// 创建axios实例
const service = axios.create({
  baseURL: '', // API的base_url
  timeout: 5000 // 请求超时时间
});

// 请求拦截器
service.interceptors.request.use(
  config => {
    // 在发送请求之前做些什么，比如添加token
    // config.headers['Authorization'] = 'Bearer ' + getToken();
    return config;
  },
  error => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  response => {
    const res = response.data;
    // 如果返回的状态不是200，就抛出错误
    if (res.code !== 200) {
      // Vue.prototype.$message.error(res.message || 'Error');
      console.error('Response Error:', res.message);
      // 可以根据返回的状态码进行不同的错误处理
      // 比如401未授权，404资源不存在等
      // if (res.code === 401) {
      //   // 未授权，跳转到登录页面
      //   // router.push('/login');
      // }
      return Promise.reject(new Error(res.message || 'Error'));
    } else {
      return res;
    }
  },
  error => {
    // 对响应错误做点什么
    console.error('Response Error:', error);
    return Promise.reject(error);
  }
);

export default service;
