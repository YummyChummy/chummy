import React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as chummyActionCreators from "../../redux/modules/chummy"
import styles from './RecipeCreator.scss'

class RecipeForm extends Component{

    constructor(props){
        super(props);
        this.state = {
            name: '',
            ingredients: [{},{},{}]
        }
    }

    submit = (clickEvent) => {
        //persist data/send to postgres (eventually)
        //echo it out
        //clear by setState to empty
        this.setState(() => ({
            name: '',
            ingredients: [{},{},{}]

        }));
        clickEvent.preventDefault();
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

        this.state.ingredients.map((anIngredient) =>
        {
            var index = id;

            ingredientViews.push(
                <div key={id} style={{display: 'flex', marginBottom: '3%'}}>
                    <input id="quantity" type="text"
                           className={styles.textInputBox}
                           onChange={(e) => this.handleIngredientInputChange('qty',index, e)}
                           placeholder="E.g. 2 cups"
                           value={anIngredient.qty} style={{width: '25%', marginRight: '3%'}}/>
                    <input id="ingredient" type="text"
                           className={styles.textInputBox}
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
            <div className={styles.recipeCard} style={style}>
                <h2 className={styles.orangeHeader}>
                    Create a Recipe
                </h2>
                <div className={styles.cardBody}>
                    <div className={styles.bodyContent}>
                        <form id="recipe-form">

                            <div style={{padding: '0% 2%'}}>
                                <label htmlFor="recipeName" className={styles.labels}>Recipe Name</label>
                                <input id='recipeName' type="text"
                                       className={styles.textInputBox}
                                       style={{width:'97%', paddingRight:0}}
                                       onChange={(e) => this.handleIngredientInputChange('name', null, e)}
                                       placeholder="Enter a catchy name for your recipe"/>
                            </div>

                            <div style={{display: 'block'}} className={styles.recipeCardContents}>

                                <div style={{display: 'flex', padding:'0% 2%'}}>
                                        <label htmlFor="quantity" className={styles.labels} style={{width: '30%', borderRadius: '3px'}}>Quantity</label>
                                        <label htmlFor="ingredient" className={styles.labels} style={{width: '70%', display: 'block'}}>Ingredient</label>
                                </div>

                                <div className={styles.ingredientsView}>{this.generateIngredientsView()}</div>
                                {<a className={styles.addIngredientAnchor} href="#" onClick={ (clickEvent) => this.handleNewIngredient(clickEvent) }>+ Add Another Ingredient</a>}
                            </div>

                            <div className={styles.recipeCardContents} style={{display: 'block'}}>
                                <label className={styles.labels}>Assign to a Day</label>
                                <select className={styles.daySelect} defaultValue={'none'}>
                                    <option value={'none'}>No day selected</option>

                                </select>
                            </div>

                            <button className={styles.recipeCardContents + ' ' +  styles.recipeButton} onClick={(clickEvent) => this.submit(clickEvent)} style={{width: '100%', margin: '10% 0% 1% 0%'}}>Submit</button>
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
            <div className={styles.recipeCreator}>
                <button className={styles.recipeButton} onClick={this.handleOpenForm} disabled={!this.props.recipeButtonEnabled}>Create a Recipe</button>
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
export default connect(mapStateToProps, mapDispatchToProps)(RecipeCreator);
