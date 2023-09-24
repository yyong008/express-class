import axios from 'axios';

// 创建一个 Axios 实例，可以根据需要配置
const axiosInstance = axios.create({
  baseURL: '', // 设置基本URL
  timeout: 5000, // 设置请求超时时间
  headers: {
    'Content-Type': 'application/json', // 设置默认请求头
  },
});

// 创建一个自定义 Axios 中间件
export function axiosMiddleware(req, res, next) {
  req.axios = axiosInstance; // 将 Axios 实例添加到请求对象中，以便在路由中使用

  // 继续下一个中间件或路由处理
  next();
}

/** use demo
*import express from 'express';
import { axiosMiddleware } from './axiosMiddleware.mjs';

const app = express();

// 使用 Axios 中间件
app.use(axiosMiddleware);

// 创建一个路由来使用 Axios 实例发送请求
app.get('/fetch-data', async (req, res) => {
  try {
    // 使用 Axios 实例来发送 GET 请求
    const response = await req.axios.get('/api/data'); // 注意：这里的路径会自动拼接到 baseURL 后面

    // 处理响应数据
    const data = response.data;
    res.json(data);
  } catch (error) {
    console.error('请求失败:', error.message);
    res.status(500).json({ error: '内部服务器错误' });
  }
});

app.listen(3000, () => {
  console.log('服务器正在监听端口 3000');
});

*/
