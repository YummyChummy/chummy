var React = require('react');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
var LivingStyleGuide = require('./LivingStyleGuide');
var Nav = require('./Nav');
import {connect} from "react-redux"
import Home from './Home'

function FooterDay(props) {
    return(
        <div className="green-background">
            {props.title}
        </div>
    )

}

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

              <footer className="footer">
                  <FooterDay title="Day 1"/>
              </footer>
          </div>
      </Router>
    )
  }
}

export default connect()(App);