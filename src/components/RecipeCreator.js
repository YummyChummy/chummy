import React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as chummyActionCreators from "../redux/modules/chummy"

class RecipeForm extends Component{

    constructor(props){
        super(props);
        this.state = {
            ingredients: [{},{},{}]
        }
    }

    submit = () => {
        //persist data
        console.log("From Recipe Form: I am done here")
        // this.setState(function () {
        //     //updateState to contain ingredient values
        // })

        this.props.handleClose()
    }

    handleNewIngredient = () =>{
        // this.setState(function () {
        //     //Add a new ingredient to the ingredients array
        // })
    }

    render(){
        console.log("From RecipeForm: ", this.props)
        return(
            <div className="day" hidden={this.props.isHidden}>
                <h2 className="green-background">
                    Add a Recipe
                </h2>
                <div className="body">
                    <div className="bodyText">
                        <form>
                            <label style={{display: 'block'}} htmlFor="recipeName">Recipe Name</label>
                            <input id='recipeName' type="text" placeholder="Enter a catchy name for your recipe"/>
                            <IngredientsHeader />
                            <IngredientView/>
                            <IngredientView/>
                            <IngredientView/>
                            <IngredientView/>
                             {/*for (anIngredient : this.state.ingredients*/}
                                {/*if anIngredient === {}*/}
                                    {/*<IngredientView />*/}
                                {/*else*/}
                                    {/*<IngredientView qty={anIngredient.qty} ingredient={anIngredient.ingredient} onChange={}/>*/}

                            {/*<a href="" onClick={this.handleNewIngredient}>+ Add another Ingredient'</a>*/}

                            <button className="recipe-button" onClick={this.submit}>Add Recipe</button>
                        </form>
                    </div>
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

function IngredientsHeader() {
    return (
        <div style={{display: 'flex', margin: '10% 0% 1% 0%'}}>
            <label>Quantity</label>
            <label>Ingredient</label>
        </div>
    )
}

function IngredientView(props) {
    return (
        <form style={{display: 'flex', marginBottom: '3%'}}>
            <input id="quantity" type="text" placeholder="E.g.: 2 cups" style={{width: '25%', marginRight: '3%'}}/>
            <input id="ingredient" type="text" placeholder="E.g.: Brown sugar" style={{width: '75%', display: 'block'}}/>
        </form>
    )
}


function mapStateToProps({recipeButtonEnabled, recipeFormVisible}) {
    return {recipeButtonEnabled, recipeFormVisible }
}

function mapDispatchToProps (dispatch) {
    return bindActionCreators(chummyActionCreators, dispatch)
}
connect(mapStateToProps, mapDispatchToProps)(RecipeForm)
export default connect(mapStateToProps, mapDispatchToProps)(RecipeCreator);
