import { Model, Sequelize, DataTypes } from "sequelize";

export class User extends Model {
    public userId!: number;
    public firstName!: string;
    public lastName!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

export const init_model_user = (sequelize: Sequelize) => {
    User.init(
        {
            userId: {
                type: DataTypes.INTEGER.UNSIGNED,
                autoIncrement: true,
                allowNull: false,
                unique: true,
                primaryKey: true,
            },
            firstName: {
                type: new DataTypes.STRING(128),
                allowNull: false,
            },
            lastName: {
                type: new DataTypes.STRING(128),
                allowNull: false,
            },
        },
        { sequelize }
    );
};
