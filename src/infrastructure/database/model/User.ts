import { Model, Sequelize } from "sequelize";
import { DataTypes } from "sequelize";

export class User extends Model {
    public user_id!: number;
    public first_name!: string;
    public last_name!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

export const init_model_user = (sequelize: Sequelize) => {
    User.init(
        {
            user_id: {
                type: DataTypes.INTEGER.UNSIGNED,
                autoIncrement: true,
                allowNull: false,
                unique: true,
                primaryKey: true,
            },
            first_name: {
                type: new DataTypes.STRING(128),
                allowNull: false,
            },
            last_name: {
                type: new DataTypes.STRING(128),
                allowNull: false,
            },
        },
        { sequelize }
    );
};
