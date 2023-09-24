export class RenderViewController {
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
  renderHome(req, res) {
    res.render("home", { title: "Ex - Home", content: "Hello, World!" });
  }

  /**
   *
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   * @param {import('express').NextFunction} next
   */
  renderAbout(req, res) {
    res.render("about", { title: "Ex- about", content: "Hello, About!" });
  }
}
