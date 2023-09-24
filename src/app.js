import express from "express";
import cookieParser from "cookie-parser";
import session from "express-session";
import mustacheExpress from "mustache-express";
import helmet from "helmet";
import compression from "compression";

import { toAbsolutePath } from "./utils/index.js";

import { AppRoutes } from "./routes/index.js";
import { AppConfig } from "./config.js";
import { RenderViewController } from "./controllers/views/index.js";

// middlewares
import globalErrorHandle from "./middlewares/modules/global.js";

export class ExpressApp {
  constructor() {
    this.#init();
  }

  #init() {
    this.app = express();
    this.config = new AppConfig();
    this.routes = new AppRoutes();
    this.#setupEngine();
    this.#setupMiddleware();
    this.#setupApiRoutes();
    this.#setupViewRoutes();
  }

  #setupViewRoutes() {
    const controller = new RenderViewController();
    this.app.get("/", controller.renderHome);
    this.app.get("/about", controller.renderAbout);
  }

  #setupApiRoutes() {
    this.app.use("/api/v1", this.routes.router);
  }

  #setupMiddleware() {
    this.app.use(helmet());
    this.app.use(express.static("public"));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(globalErrorHandle);
    this.app.use(compression());
    this.app.use(cookieParser());
    this.app.use(
      session({
        secret: "your-secret-key", // 用于签名 Session ID 的秘密字符串
        resave: false, // 如果为 true，则每次请求都重新保存 Session
        saveUninitialized: false, // 如果为 true，则将在没有初始化的情况下创建 Session
        cookie: {
          maxAge: 60 * 60 * 1000, // Session 的最大存活时间（以毫秒为单位）
        },
      }),
    );
  }

  #setupEngine() {
    this.app.engine("mustache", mustacheExpress());
    this.app.set("view engine", "mustache");
    this.app.set("views", toAbsolutePath("../views"));
  }

  start() {
    this.app.listen(this.config.port, () => {
      console.log(`server on http://localhost:${this.config.port}`);
    });
  }
}
