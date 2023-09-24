const globalErrorHandle = (err, req, res) => {
  // 检查错误对象是否包含自定义错误消息
  if (err.message) {
    console.error(`发生错误: ${err.message}`);
  } else {
    console.error('发生未知错误');
  }

  // 设置响应状态码为 500（内部服务器错误）
  res.status(500).json({ error: '服务器内部错误' });
}

export default globalErrorHandle;
