import React, { Component } from 'react'

function NoRecipes (props) {
    return(
        <div className="body">
            No recipes added yet.
        </div>
    )
}

class Day extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isHidden: false
        }
    }

    render() {

        return (
            <div className="day">
                <h2 className="green-background">
                    {this.props.header}
                </h2>
                 <NoRecipes/>
            </div>
        )
    }

}

module.exports = Day;