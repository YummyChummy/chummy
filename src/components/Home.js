var React = require('react');
var Day = require('./Day');
import RecipeCreator from './RecipeCreator'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as chummyActionCreaters from "../redux/modules/chummy"


class Home extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <div className="container">

                    <div className="intro">
                        <h1>
                            Make meal planning fun!
                        </h1>
                        <h2>
                            Start by adding a recipe in the top right. Assign those recipes to days and export into a
                            grocery list.
                        </h2>
                    </div>
                    <RecipeCreator />
                    <div className="days-container">
                        <Day header="Monday" isHidden={this.props.recipeFormVisible}/>
                        <Day header="Tuesday" isHidden={this.props.recipeFormVisible}/>
                        <Day header="Wednesday" isHidden={this.props.recipeFormVisible}/>
                        <Day header="Thursday" isHidden={this.props.recipeFormVisible}/>
                        <Day header="Friday" isHidden={this.props.recipeFormVisible}/>
                        <Day header="Saturday" isHidden={this.props.recipeFormVisible}/>
                        <Day header="Sunday" isHidden={this.props.recipeFormVisible}/>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({recipeButtonEnabled, recipeFormVisible}) {
    return { recipeButtonEnabled, recipeFormVisible }
}

function mapDispatchToProps (dispatch) {
    return bindActionCreators(chummyActionCreaters, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
