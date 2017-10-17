import React, { Component } from 'react'

function NoRecipes (props) {
    return(
        <div className="card-body">
            <div className="bodyTextCard">
                No recipes added yet.
            </div>
        </div>
    )
}

class Day extends Component {

    render() {
        return (
            <div className="day-card" hidden={this.props.isHidden}>
                <h2 className="green-header">
                    {this.props.header}
                </h2>
                 <NoRecipes/>
            </div>
        )
    }

}

module.exports = Day;