import { z, ZodError } from 'zod';

// 定义数据验证模式，例如验证一个用户的数据
const userSchema = z.object({
  username: z.string().min(3).max(20),
  email: z.string().email(),
  age: z.number().min(18),
});

// 创建一个 Zod 数据验证中间件
function validateData(schema) {
  return (req, res, next) => {
    try {
      // 使用 Zod 进行数据验证
      schema.parse(req.body);

      // 数据验证通过，继续下一个中间件或路由处理
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        // 如果数据验证失败，将错误信息发送给客户端
        res.status(400).json({ error: error.message });
      } else {
        // 处理其他类型的错误
        res.status(500).json({ error: '内部服务器错误' });
      }
    }
  };
}

export const validateUser = validateData(userSchema); // 导出特定的数据验证中间件
