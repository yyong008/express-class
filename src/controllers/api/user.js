export class UserController {
  constructor() {
    this.#init();
  }
  #init() {}

  /**
   *
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   * @param {import('express').NextFunction} next
   */
  createUser(req, res) {
    res.status(200).json({
      code: 0,
      message: "success",
      data: {},
    });
  }

  deleteUser(req, res, next) {
    res.status(200).json({
      code: 0,
      message: "success",
      data: {},
    });
  }
  UpdateUser(req, res, next) {
    res.status(200).json({
      code: 0,
      message: "success",
      data: {},
    });
  }
  getUser(req, res, next) {
    res.status(200).json({
      code: 0,
      message: "success",
      data: {
        method: "get",
      },
    });
  }
}
