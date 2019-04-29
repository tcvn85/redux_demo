
//require('./bootstrap');
import React from 'react';

import { Provider } from 'react-redux';
import store from './store';
import { Route, BrowserRouter } from 'react-router-dom';
import LayoutDefault from './components/LayoutDefault';


 import './App.scss';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Route path="/" component={LayoutDefault} />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
