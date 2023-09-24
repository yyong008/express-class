import express from "express";

import mustacheExpress from "mustache-express";

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
    this.app.use(express.static("public"));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(globalErrorHandle);
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
