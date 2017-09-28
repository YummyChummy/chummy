var React = require('react');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
var Home = require('./Home');
var LivingStyleGuide = require('./LivingStyleGuide');
var Nav = require('./Nav');

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

module.exports = App;