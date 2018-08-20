import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import localForage from 'localforage';
import { persistStore } from 'redux-persist';
import createBrowserHistory from 'history/createBrowserHistory';
import './index.css';
import App from './App';
import { Router} from 'react-router-dom'
import store from './redux/store';
export const history = createBrowserHistory();
//import registerServiceWorker from './registerServiceWorker';

export const persist = persistStore(
  store,
  {
    storage: localForage,
    // whitelist: ['auth', 'recentView', 'settings'],
  },
  () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>,
      document.getElementById('root'),
    );
  },
);

// ReactDOM.render(
//   <Provider store={store}>
//       <Router>
//         <App />
//       </Router>
//   </Provider>,
//   document.getElementById('root')
// );
// registerServiceWorker();
