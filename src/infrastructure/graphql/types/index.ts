import fs from "fs";

export const load_types = (): string => {
  return fs.readFileSync(
    `${process.env.GRAPHQL_DIR}/types/types.graphql`,
    "utf8"
  );
};
