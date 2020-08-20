import { buildSchema } from "graphql";

import { load_mutations, root_mutations } from "./mutations";
import { load_queries, root_queries } from "./queries";
import { load_types } from "./types";

const init_graphql = (): any => {
    const schema = buildSchema(
        load_mutations() + load_queries() + load_types()
    );
    return {
        schema: schema,
        rootValue: { ...root_mutations, ...root_queries },
        graphiql: process.env.ENV === "dev",
    };
};

export default init_graphql;
