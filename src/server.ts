import app from "./app";
import config from "./config/config";
import databaseService from "./services/databaseService";

const server = app.listen(config.PORT);
(async () => {
  try {
    const connection = await databaseService.connect();
    console.log(connection.name);
    console.info(`APPLICATION_STARTED`, {
      meta: {
        PORT: config.PORT,
        ENV: config.ENV,
        SERVER_URL: config.SERVER_URL,
        DATABASE_URL: config.DATABASE_URL,
      },
    });
  } catch (error) {
    console.error(`APPLICATION_ERROR`, {
      meta: error,
    });
    server.close((error) => {
      if (error)
        console.error(`APPLICATION_ERROR`, {
          meta: error,
        });
      process.exit(1);
    });
  }
})();

export default server;
