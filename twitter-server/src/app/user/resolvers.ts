import axios from "axios";

const queries = {
  verifyGoogleToken: async (parent: any, { token }: { token: String }) => {
    const googleToken = token;
    const googleOAuthURL = new URL("https://oauth2.googleapis.com/tokeninfo");
    googleOAuthURL.searchParams.set("id_token", googleToken);

    const { data } = await axios.get(googleOAuthURL.toString(), {
      responseType: "json",
    });
  },
};

export const resolvers = { queries };
