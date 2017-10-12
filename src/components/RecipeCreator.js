import React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as chummyActionCreators from "../redux/modules/chummy"

class RecipeForm extends Component{

    constructor(props){
        super(props);
        this.state = {
            name: '',
            ingredients: [{},{qty: 1, ingredient: 'something good'},{}]
        }
    }

    submit = () => {
        //persist data/send to postgress (eventually)
        //echo it out
        // clear by setState to empty
        this.setState(function () {
            return {
                name: '',
                ingredients: [{},{},{}]
            }
        });

        this.props.handleClose()
    }

    handleNewIngredient = () =>{
        this.setState(function () {
            //Add a new ingredient to the ingredients array
            return {
                ingredients: this.state.ingredients.concat({})
            }
        })
    }

    generateIngredientsView = () =>{
        var ingredientViews = []
        var id = 0;
        this.state.ingredients.map((anIngredient) =>
        {
            console.log(anIngredient)
            if (anIngredient === {})
                ingredientViews.push(<IngredientView key={id} qty='' ingredient=''/>);
            else{
                ingredientViews.push(<IngredientView key={id} qty={anIngredient.qty} ingredient={anIngredient.ingredient}/>);
            }
            id++;
        })
        return ingredientViews;
    }

    render(){
        console.log('NEW STATE: ', this.state)

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

                            <div>{this.generateIngredientsView()}</div>

                            {<a href="#" onClick={this.handleNewIngredient}>+ Add another Ingredient</a>}

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
    {/*onChange handler to update state*/}

    return (
        <div style={{display: 'flex', marginBottom: '3%'}}>
            <input id="quantity" type="text" placeholder="E.g. 2 cups" defaultValue={props.qty} style={{width: '25%', marginRight: '3%'}}/>
            <input id="ingredient" type="text" placeholder="E.g. Brown sugar" defaultValue={props.ingredient} style={{width: '75%', display: 'block'}}/>
        </div>
    )
}

function mapStateToProps({recipeButtonEnabled, recipeFormVisible}) {
    return {recipeButtonEnabled, recipeFormVisible }
}

function mapDispatchToProps (dispatch) {
    return bindActionCreators(chummyActionCreators, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(RecipeCreator);
