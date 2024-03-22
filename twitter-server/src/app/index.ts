import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";

export async function initServer() {
  const app = express();

  const grapgqlServer = new ApolloServer({
    typeDefs: `
        type Query {
            sayHello: String
        }
    `,
    resolvers: {
      Query: {
        sayHello: () => `Hey from graphql Server`,
      },
    },
  });

  await grapgqlServer.start();

  app.use("/grapgql", expressMiddleware(grapgqlServer));

  return app;
}
