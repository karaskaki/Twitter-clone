import express from "express";
import bodyParser from "body-parser";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { prismaClient } from "../client/db";

export async function initServer() {
  const app = express();

  app.use(bodyParser.json());

  const grapgqlServer = new ApolloServer({
    typeDefs: `
        type Query {
            sayHello: String
            sayHelloToMe(name: String!): String
        }
    `,
    resolvers: {
      Query: {
        sayHello: () => `Hey from graphql Server`,
        sayHelloToMe: (parent: any, { name }: { name: String }) =>
          `Hey ${name}`,
      },
    },
  });

  await grapgqlServer.start();

  app.use("/graphql", expressMiddleware(grapgqlServer));

  return app;
}
