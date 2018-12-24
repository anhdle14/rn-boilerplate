import { ApolloClient } from "apollo-client";
import { ApolloLink } from "apollo-link";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { onError } from "apollo-link-error";
import { RestLink } from "apollo-link-rest";

// Apollo Client point to the GraphQL Server

const RestLinkClient = new RestLink({
  uri: "http://api-akacoola.akaminds.co.jp",
  headers: {
    Authorization: "Basic YWRtaW46YWRtaW4="
  }
});

const ErrorLinkClient = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) =>
      console.error(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  }
  if (networkError) {
    console.error(`[Network error]: ${networkError}`);
  }
});

const HttpLinkClient = new HttpLink({
  // #TODO: Need to change to actual GraphQL Endpoint
  credentials: "same-origin",
  uri: ""
});

const Client = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([ErrorLinkClient, RestLinkClient, HttpLinkClient])
});

export default Client;
