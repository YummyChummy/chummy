import React, { Component } from 'react'

function NoRecipes (props) {
    return(
        <div className="body">
            <div className="bodyText">
                No recipes added yet.
            </div>
        </div>
    )
}

class Day extends Component {

    render() {
        return (
            <div className="day" hidden={this.props.isHidden}>
                <h2 className="green-background">
                    {this.props.header}
                </h2>
                 <NoRecipes/>
            </div>
        )
    }

}

module.exports = Day;