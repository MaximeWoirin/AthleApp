import { Sequelize } from "sequelize";
import { init_models } from "./models";

const url: string = `mysql://root:${process.env.MYSQL_ROOT_PASSWORD}@db/${process.env.MYSQL_DATABASE}`;

export const database = new Sequelize(url, {
  logging: process.env.ENV !== "prod" ? console.log : false,
});

export const init_db = async () => {
  try {
    await database.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:\n", error);
  }
  await init_models(database);
};
