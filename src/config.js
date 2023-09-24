import "dotenv/config";

export class AppConfig {
  port = process.env.APP_PORT || 3000;
  constructor(options) {}
}
