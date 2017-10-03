var React = require('react');

class Day extends React.Component {
    render() {
        return (
            <div className="day">
                <h2 className="green-background">
                    Day 1
                </h2>
                <div className="body">
                    No recipes added yet.
                </div>
            </div>
        )
    }

}

module.exports = Day;