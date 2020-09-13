import React from 'react';
import {
  Provider,
} from 'react-redux';
import './App.css';
import Store from './store/Store';

import PageLoader from './pageRenderer/PageLoader';

function App() {
  return (
    <Provider store={Store}>
      <PageLoader />
    </Provider>
  );
}

export default App;
