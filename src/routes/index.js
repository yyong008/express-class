import express from "express";
import { UserRoute } from "./modules/user.js";

export class AppRoutes {
  constructor() {
    this.#init();
  }

  #init() {
    this.viewsRouter = express.Router();
    this.router = express.Router();
    this.#setupRoutes();
  }

  #setupRoutes() {
    this.router.use("/user", new UserRoute().router);
  }
}
