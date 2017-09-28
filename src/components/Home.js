var React = require('react');
var Day = require('./Day');

class Home extends React.Component {
  render(){
    return (
      <div>
          <div className="container">
              <div className="intro">
                  <div className="heading-large">
                      Make meal planning fun!
                  </div>
                  <div className="heading-small">
                      Start by adding a recipe in the top right. Assign those recipes to days and export into a grocery list.
                  </div>
              </div>
              <div className="days-container">
                <Day />
              </div>
          </div>
      </div>
    )
  }
}

module.exports = Home;