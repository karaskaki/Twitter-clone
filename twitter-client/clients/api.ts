import { GraphQLClient } from "graphql-request";

const isClinet = typeof window !== "undefined";

export const graphQLClient = new GraphQLClient(
  "http://localhost:8000/graphql",
  {
    headers: () => ({
      Authorization: isClinet
        ? `Bearer ${window.localStorage.getItem("__twitter_token")}`
        : "undefined",
    }),
  }
);
