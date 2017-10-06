import React, { Component } from 'react'

class RecipeForm extends Component{
    render(){
        return(
            <div>
                {console.log('asdfasdfjasdfasdf')}
                <button onSubmit={this.props.handleClick}>please press mee</button>
            </div>
        )
    }
}

export default class RecipeButton extends Component{
    constructor(props){
        super(props)
        this.state = {
            enabled: true
        }
    }

    handleClick = () => {
        this.setState(function () {
            console.log(`Button is clicked: ${this.state.enabled}`)
            return {
                enabled: !this.state.enabled
            }
        })
    }
    render(){
        return(
            <button className="recipe-button" onClick={this.handleClick} disabled={!this.state.enabled}>Add a recipe</button>
        )
    }
}