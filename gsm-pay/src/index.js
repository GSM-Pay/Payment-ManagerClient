import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import Root from './Root';
import * as serviceWorker from './serviceWorker';

import { ApolloClient, InMemoryCache, HttpLink, ApolloProvider } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const cache = new InMemoryCache();

const httpLink = new HttpLink({
  uri: process.env.REACT_APP_GSM_PAY_URL,
});

const authLink = setContext((_, { headers }) => {
  const session = localStorage.getItem('session');

  return {
    headers: {
      ...headers,
      Authorization: session ?? '',
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Root />
  </ApolloProvider>,
  document.getElementById('root'),
);

serviceWorker.unregister();