import { User } from "../../database/model/User";

export const userMutations = {
    addUser: async (params: any) => {
        return await User.create(params);
    },
    updateUser: async (params: any) => {
        const userId = params.userId;
        delete params.userId;
        await User.update(
            { ...params },
            {
                where: {
                    userId: userId,
                },
            }
        );
        return await User.findByPk(userId);
    },
    deleteUser: async (params: any) => {
        const user: User | null = await User.findByPk(params.userId);
        await user?.destroy();
        return user;
    },
};
