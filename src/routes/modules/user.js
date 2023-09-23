import express from "express";

import { UserController } from "../../controllers/index.js";

export class UserRoute {
  constructor() {
    this.#init();
  }

  #init() {
    this.router = new express.Router();
    this.controller = new UserController();
    this.#setupRoutes();
  }

  #setupRoutes() {
    this.router.post("/", this.controller.createUser);
    this.router.delete("/", this.controller.deleteUser);
    this.router.put("/", this.controller.UpdateUser);
    this.router.get("/", this.controller.getUser);
  }
}
