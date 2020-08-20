import { Sequelize } from "sequelize";
import { init_model_user } from "./model/User";

export const init_models = async (database: Sequelize) => {
    init_model_user(database);
    await database.sync({ alter: true });
};
