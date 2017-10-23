import React, { Component } from 'react'

function RecipesView (props) {
    return(
        <div className="card-body">
            <div className="bodyTextCard">
                No recipes added yet.
                <select style={{width: '100%'}} defaultValue={'none'}>
                    <option value={'none'}>Please choose a recipe</option>
                    <option value={'Potato Salad'}>Potato Salad</option>

                </select>
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
                <RecipesView/>
            </div>
        )
    }

}

module.exports = Day;