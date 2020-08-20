import express from "express";
import graphqlRouter from "./graphql";
import healthCheck from "./healthCheck";

export const init_rt = async (app: express.Application) => {
  app.use("/", healthCheck);
  app.use("/graphql", graphqlRouter);
};
