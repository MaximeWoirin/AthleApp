import { User } from "../../database/model/User";

export const userMutations = {
  addUser: async (params: any) => {
    return await User.create(params);
  },
  updateUser: async (params: any) => {
    const user_id = params.user_id;
    delete params.user_id;
    await User.update(
      { ...params },
      {
        where: {
          user_id: user_id,
        },
      }
    );
    return await User.findByPk(user_id);
  },
  deleteUser: async (params: any) => {
    const user: User | null = await User.findByPk(params.user_id);
    await user?.destroy();
    return user;
  },
};
