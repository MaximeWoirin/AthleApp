import fs from "fs";
import { userQueries } from "./User.queries";

export const load_queries = (): string => {
    return fs.readFileSync(
        `${process.env.GRAPHQL_DIR}/queries/queries.graphql`,
        "utf8"
    );
};

export const root_queries = { ...userQueries };
