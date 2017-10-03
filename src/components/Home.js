var React = require('react');
var Day = require('./Day');

class Home extends React.Component {
  render(){
    return (
      <div>
          <div className="container">
              <div className="intro">
                  <h1>
                      Make meal planning fun!
                  </h1>
                  <h2>
                      Start by adding a recipe in the top right. Assign those recipes to days and export into a grocery list.
                  </h2>
              </div>
              <div className="days-container">
                <Day />
              </div>
              <div style={{position: 'absolute', bottom: '5px'}}>
                  { new Date().toTimeString() }
              </div>
          </div>
      </div>
    )
  }
}

module.exports = Home;
