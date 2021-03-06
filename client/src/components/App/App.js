var React = require('react');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
var LivingStyleGuide = require('../LivingStyleGuide/LivingStyleGuide');
var Nav = require('../Nav/Nav');
import Home from '../Home/Home'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as chummyActionCreaters from "../../redux/modules/chummy"

class App extends React.Component {
  render() {
    return (
      <Router>
          <div>
              <Nav />
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/living_style_guide" component={LivingStyleGuide}/>
                <Route render={function () {
                  return <p>Not Found</p>
                }} />
              </Switch>
          </div>
      </Router>
    )
  }
}

function mapStateToProps({recipeButtonEnabled}) {
    return { recipeButtonEnabled}
}

function mapDispatchToProps (dispatch) {
    return bindActionCreators(chummyActionCreaters, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);