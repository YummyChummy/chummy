import React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as chummyActionCreators from "../redux/modules/chummy"

class RecipeForm extends Component{

    constructor(props){
        super(props);
        this.state = {
            name: '',
            ingredients: [{},{},{}]
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
        document.getElementById('recipe-form').reset();
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

    handleIngredientInputChange = (key, index, e) => {
      const changeValue = e.target.value;
      var ingredientsArray = this.state.ingredients;
      if (key === 'name') {
          this.setState(() => ({name:changeValue}));
      }
      else if (key === 'qty') {
        ingredientsArray[index].qty = changeValue;
      }
      else{
        ingredientsArray[index].ingredient = changeValue;
      }

      this.setState(() => ({ingredients:ingredientsArray}));
    }

    generateIngredientsView = () =>{
        var ingredientViews = []
        var id = 0;
        this.state.ingredients.map((anIngredient) =>
        {
            var index = id;
            ingredientViews.push(
            <div key={id} style={{display: 'flex', marginBottom: '3%'}}>
                <input id="quantity" type="text"
                       onChange={(e) => this.handleIngredientInputChange('qty',index, e)}
                       placeholder="E.g. 2 cups"
                       value={anIngredient.qty} style={{width: '25%', marginRight: '3%'}}/>
                <input id="ingredient" type="text"
                       onChange={(e) => this.handleIngredientInputChange('ingredient',index, e)}
                       placeholder="E.g. Brown sugar"
                       value={anIngredient.ingredient} style={{width: '75%', display: 'block'}}/>
            </div> );
            id++;
        })
        return ingredientViews;
    }

    render(){
        var style = (this.props.isHidden) ? {display: "none"} : {display: "flex"};
        return(
            <div className="recipe-card" style={style}>
                <h2 className="orange-header">
                    Create a Recipe
                </h2>
                <div className="card-body">
                    <div className="bodyText">
                        <form id="recipe-form">
                            <label style={{display: 'block'}} htmlFor="recipeName">Recipe Name</label>
                            <input id='recipeName' type="text"
                                   onChange={(e) => this.handleIngredientInputChange('name',null, e)}
                                   placeholder="Enter a catchy name for your recipe"/>
                            <IngredientsHeader />

                            <div>{this.generateIngredientsView()}</div>

                            {<a href="#" onClick={this.handleNewIngredient}>+ Add another Ingredient</a>}

                            <button className="recipe-button" onClick={this.submit} style={{width: '50%'}}>Submit</button>
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
            <div className='recipe-creator'>
                <button className="recipe-button" onClick={this.handleOpenForm} disabled={!this.props.recipeButtonEnabled}>Create a Recipe</button>
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
