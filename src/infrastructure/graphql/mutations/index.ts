import fs from "fs";
import { userMutations } from "./User.mutations";

export const load_mutations = (): string => {
    return fs.readFileSync(
        `${process.env.GRAPHQL_DIR}/mutations/mutations.graphql`,
        "utf8"
    );
};

export const root_mutations = {
    ...userMutations,
    ...{
        test: () => {
            return "hey";
        },
    },
};
