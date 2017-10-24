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
        //persist data/send to postgres (eventually)
        //echo it out
        //clear by setState to empty
        this.setState(() => ({
          name: '',
          ingredients: [{},{},{}]

        }));
        document.getElementById('recipe-form').reset();
        this.props.handleClose()
    };

    handleNewIngredient = (clickEvent) =>{
        clickEvent.preventDefault();
        this.setState(function () {
            //Add a new ingredient to the ingredients array
            return {
                ingredients: this.state.ingredients.concat({})
            }
        })
    };

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
    };

    generateIngredientsView = () =>{
        var ingredientViews = [];
        var id = 0;

        //ingredientViews.push(<IngredientsHeader/>);

        this.state.ingredients.map((anIngredient) =>
        {
            var index = id;
            ingredientViews.push(
            <div key={id} style={{display: 'flex', marginBottom: '3%'}}>

                {(() => {
                    if (id === 0) {
                        return (<div>
                            <label htmlFor="quantity" className='bodyText' style={{width: '25%', marginRight: '4%'}}>Quantity</label>
                            <label htmlFor="ingredient" className='bodyText' style={{width: '75%', display: 'block'}}>Ingredient</label>
                        </div>);
                    }
                })()}
                <input id="quantity" type="text"
                       className='text-input-box'
                       onChange={(e) => this.handleIngredientInputChange('qty',index, e)}
                       placeholder="E.g. 2 cups"
                       value={anIngredient.qty} style={{width: '25%', marginRight: '3%'}}/>
                <input id="ingredient" type="text"
                       className='text-input-box'
                       onChange={(e) => this.handleIngredientInputChange('ingredient',index, e)}
                       placeholder="E.g. Brown sugar"
                       value={anIngredient.ingredient} style={{width: '75%', display: 'block'}}/>

            </div>);
            id++;
        });
        return ingredientViews;
    };

    render(){
        var style = (this.props.isHidden) ? {display: "none"} : {display: "flex"};

        return(
            <div className="recipe-card" style={style}>
                <h2 className="orange-header">
                    Create a Recipe
                </h2>
                <div className="card-body">
                    <div className="bodyText" style={{overflow: "auto"}}>
                        <form id="recipe-form">

                            <div>
                                <label htmlFor="recipeName" style={{display: 'block'}}>Recipe Name</label>
                                <input id='recipeName' type="text"
                                       className='text-input-box'
                                       style={{width:'94%', paddingRight:0}}
                                       onChange={(e) => this.handleIngredientInputChange('name', null, e)}
                                       placeholder="Enter a catchy name for your recipe"/>
                            </div>

                            <div style={{display: 'block'}} className="recipe-card-contents">

                                <div>{this.generateIngredientsView()}</div>

                                {<a href="#" onClick={ (clickEvent) => this.handleNewIngredient(clickEvent) }>+ Add Another Ingredient</a>}
                            </div>

                            <div className="recipe-card-contents" style={{display: 'block'}}>
                                <label>Assign to a Day</label>
                                <select style={{width: '100%'}} defaultValue={'none'}>
                                    <option value={'none'}>No day selected</option>

                                </select>
                            </div>

                            <button className="recipe-card-contents recipe-button" onClick={this.submit} style={{width: '100%', margin: '10% 0% 1% 0%'}}>Submit</button>
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
    };

    handleCloseForm = () => {
        this.props.recipeFormChanged(false)
    };

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
        <div style={{display: 'flex'}}>
            <label className='bodyText' style={{width: '25%', marginRight: '4%'}}>Quantity</label>
            <label className='bodyText' style={{width: '75%', display: 'block'}}>Ingredient</label>
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
