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
        this.setState(() => ({
          name: '',
          ingredients: [{},{},{}]

        }));
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

    handleInputChange = (key, name, e) => {
      var ingredientsArray = this.state.ingredients;
      if (key == 'qty') {
        ingredientsArray[name].qty = e.target.value;
      }
      else{
        ingredientsArray[name].ingredient = e.target.value;
      }

      this.setState(() => ({ingredients:ingredientsArray}))
    }



    generateIngredientsView = () =>{
        var ingredientViews = []
        var id = 0;
        this.state.ingredients.map((anIngredient) =>
        {
          var index = id;
            if (anIngredient === {}) {
              ingredientViews.push(
                <div key={id} name='test' style={{display: 'flex', marginBottom: '3%'}}>
                    <input id="quantity" type="text"
                           onChange={(e) => this.handleInputChange('qty', index, e)}
                           placeholder="E.g. 2 cups"
                           defaultValue={''} style={{width: '25%', marginRight: '3%'}}/>
                    <input id="ingredient" type="text"
                           onChange={(e) => this.handleInputChange('ingredient', index, e)}
                           placeholder="E.g. Brown sugar"
                           defaultValue={''} style={{width: '75%', display: 'block'}}/>
                </div>);
            }
            else{
            ingredientViews.push(
            <div key={id} name ='test' style={{display: 'flex', marginBottom: '3%'}}>
                <input id="quantity" type="text"
                       onChange={(e) => this.handleInputChange('qty',index, e)}
                       placeholder="E.g. 2 cups"
                       defaultValue={anIngredient.qty} style={{width: '25%', marginRight: '3%'}}/>
                <input id="ingredient" type="text"
                       onChange={(e) => this.handleInputChange('ingredient',index, e)}
                       placeholder="E.g. Brown sugar"
                       defaultValue={anIngredient.ingredient} style={{width: '75%', display: 'block'}}/>
            </div> );
            }
            id++;
        })
        return ingredientViews;
    }

    render(){
        var style = (this.props.isHidden) ? {display: "none"} : {};
        return(
            <div className="card-container" style={style}>
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


function mapStateToProps({recipeButtonEnabled, recipeFormVisible}) {
    return {recipeButtonEnabled, recipeFormVisible }
}

function mapDispatchToProps (dispatch) {
    return bindActionCreators(chummyActionCreators, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(RecipeCreator);
