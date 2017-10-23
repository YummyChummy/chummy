const React = require('react');
const ReactDOM = require('react-dom');
require('./sharedStyles/index.scss');
import App from './components/App/App';
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import chummy  from './redux/modules/chummy'

ReactDOM.render(
  <Provider store={createStore(chummy, applyMiddleware(thunk))}>
    <App/>
  </Provider>,
  document.getElementById('app')
)
