const React = require('react');
const ReactDOM = require('react-dom');
require('./index.css')

class Application extends React.Component {
  render () {
    return (
      <div>
        Hello World!!!!
      </div>
    )
  }
}

ReactDOM.render(<Application />, document.getElementById('root'))
