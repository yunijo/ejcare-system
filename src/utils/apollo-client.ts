import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://admin.ejincare.com/graphql",
    cache: new InMemoryCache(),
});

export default client;