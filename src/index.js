import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { reducer as reduxFormReducer } from 'redux-form';
import { Container } from '@material-ui/core';
import * as serviceWorker from './serviceWorker';

// modules
import { loadComments } from './modules/comments';

// components
import Layout from './components/Layout';

// containers
//import CommentList from './containers/CommentList';
//import CommentForm from './containers/CommentForm';

// reducers
import commentReducer from './modules/comments';

const store = createStore(
  combineReducers({
    comments: commentReducer,
    form: reduxFormReducer,
  }),
  applyMiddleware(thunk)
);

store.dispatch(loadComments());

ReactDOM.render(
  <Provider store={store}>
    <Layout />
  </Provider>,
  document.getElementById('root')
);

/*
ReactDOM.render(
  <Provider store={store}>
    <Container>
      <CommentForm onSubmit={console.log} />
      <CommentList />
    </Container>
  </Provider>,
  document.getElementById('root')
);
*/

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
