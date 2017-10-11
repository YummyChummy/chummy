import React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as chummyActionCreators from "../redux/modules/chummy"

class RecipeForm extends Component{

    submit = () => {
        //persist data
        console.log("From Recipe Form: I am done here")
        this.props.handleClose()
    }

    render(){
        console.log("From RecipeForm: ", this.props)
        return(
            <div className="day" hidden={this.props.isHidden}>
                <h2 className="green-background">
                    Add a Recipe
                </h2>
                <div className="body">
                    No recipes added yet.
                    <button className="recipe-button" onClick={this.submit}>Submit</button>
                </div>
            </div>
        )
    }
}

class RecipeCreator extends Component{

    handleOpenForm = () => {
        this.props.recipeFormChanged(true)
    }

    handleCloseForm = () => {
        this.props.recipeFormChanged(false)
    }

    render(){
        return(
            <div>
                <button className="recipe-button" onClick={this.handleOpenForm} disabled={!this.props.recipeButtonEnabled}>Add a recipe</button>
                <RecipeForm isHidden={!this.props.recipeFormVisible} handleClose={this.handleCloseForm}/>
            </div>

        )
    }
}


function mapStateToProps({recipeButtonEnabled, recipeFormVisible}) {
    return {recipeButtonEnabled, recipeFormVisible }
}

function mapDispatchToProps (dispatch) {
    return bindActionCreators(chummyActionCreators, dispatch)
}
connect(mapStateToProps, mapDispatchToProps)(RecipeForm)
export default connect(mapStateToProps, mapDispatchToProps)(RecipeCreator);
