import axios from 'axios';
import qs from 'qs';
import {
  Loading
} from 'element-ui';

// 上线全局请求配置
axios.defaults.baseURL = '/api'

let loadingService;
axios.interceptors.request.use(
  config => {
    loadingService = Loading.service({
      lock: true,
      text: 'Loading',
      spinner: 'el-icon-loading',
      background: 'rgba(0, 0, 0, 0.7)'
    });
    if (config.method === 'post') {
      config.data = qs.stringify(config.data);
      config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    }
    return config
  },
  error => {
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// http response 拦截器
axios.interceptors.response.use(
  response => {
    loadingService.close();
    return response.data || response.body;
  },
  error => {
    return Promise.reject(error.response.data) // 返回接口返回的错误信息
  }
)

export default axios;
