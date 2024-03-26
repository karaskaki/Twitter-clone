import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { prismaClient } from "../client/db";

import { user } from "./user";

export async function initServer() {
  const app = express();

  app.use(bodyParser.json());
  app.use(cors());

  const grapgqlServer = new ApolloServer({
    typeDefs: `
        ${user.types}
        
        type Query {
            ${user.queries}
        }
    `,
    resolvers: {
      Query: {
        ...user.resolvers.queries,
      },
    },
  });

  await grapgqlServer.start();

  app.use("/graphql", expressMiddleware(grapgqlServer));

  return app;
}
