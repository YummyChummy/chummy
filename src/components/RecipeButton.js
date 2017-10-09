import React, { Component } from 'react'

class RecipeForm extends Component{
    render(){
        return(
            <div className="day" hidden={this.props.isHidden}>
                <h2 className="green-background">
                    Add a Recipe
                </h2>
                <div className="body">
                    No recipes added yet.
                </div>
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

    handleCallBacks = () => {
        this.handleClick();
        this.props.handleNewRecipe();
    }

    render(){
        return(
            <div>
                <button className="recipe-button" onClick={this.handleCallBacks}>Add a recipe</button>
                <RecipeForm isHidden={this.state.enabled} handleNewRecipe={this.props.handleNewRecipe}/>
            </div>

        )
    }
}