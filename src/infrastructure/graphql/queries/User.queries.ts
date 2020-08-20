import { User } from "../../database/model/User";
export const userQueries = {
    users: async () => {
        return await User.findAll();
    },
    user: async (params: any) => {
        return await User.findByPk(params.user_id);
    },
};
