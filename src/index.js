const React = require('react');
const ReactDOM = require('react-dom');
require('./styles/index.scss');
import App from './components/App';
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import chummy from './redux/modules/chummy'
const redux_store = createStore(chummy, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={redux_store}>
    <App/>
  </Provider>,
  document.getElementById('app')
)

// console.log(redux_store.getState())
// redux_store.dispatch({
//     type: 'RECIPE_FORM_CHANGED',
//     isOpen: true
// })
//
// console.log(redux_store.getState())
