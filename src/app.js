import express from "express";
import { AppRoutes } from "./routes/index.js";
import { AppConfig } from "./config.js";

export class ExpressApp {
  constructor() {
    this.#init();
    this.config = new AppConfig();
  }

  #init() {
    this.app = express();
    this.routes = new AppRoutes();
    this.#setupMiddleware();
    this.#setupRoutes();
  }

  #setupRoutes() {
    this.app.use("/api/v1", this.routes.router);
  }

  #setupMiddleware() {
    this.app.use(express.static("public"));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }

  start() {
    this.app.listen(this.config.port, () => {
      console.log(`server on http://localhost:${this.config.port}`);
    });
  }
}
