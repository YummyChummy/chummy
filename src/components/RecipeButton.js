import React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as chummyActionCreaters from "../redux/modules/chummy"

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

class RecipeButton extends Component{
    constructor(props){
        super(props)
        this.state = {
            enabled: true
        }
    }

    handleClick = () => {
        this.props.recipeFormChanged(true)
    }

    render(){
        return(
            <div>
                <button className="recipe-button" onClick={this.handleClick} disabled={!this.props.recipeButtonEnabled}>Add a recipe</button>
                <RecipeForm isHidden={!this.props.recipeFormVisible}/>
            </div>

        )
    }
}


function mapStateToProps({recipeFormChanged, recipeButtonEnabled, recipeFormVisible}) {
    return { recipeFormChanged, recipeButtonEnabled, recipeFormVisible }
}

function mapDispatchToProps (dispatch) {
    return bindActionCreators(chummyActionCreaters, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeButton);
