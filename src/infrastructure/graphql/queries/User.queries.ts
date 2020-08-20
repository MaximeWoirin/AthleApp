import { User } from "../../database/model/User";
export const userQueries = {
    users: async (): Promise<User[]> => {
        return User.findAll();
    },
    user: async (params: any): Promise<User | null> => {
        return User.findByPk(params.user_id);
    },
};
