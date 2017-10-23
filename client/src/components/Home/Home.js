var React = require('react');
var Day = require('../Day/Day');
import RecipeCreator from '../Recipe Creator/RecipeCreator'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as chummyActionCreaters from "../../redux/modules/chummy"
import axios from 'axios'
import styles from './Home.scss'

class Home extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        console.log("Mounted!")
        axios.get("/api/recipes")
            .then( (response) => console.log(response.data))
            .catch( (err) => console.log(err))
    }

    render() {
        return (
            <div>
                <div className={styles.container}>

                    <div className={styles.intro}>
                        <h1>
                            Make meal planning fun!
                        </h1>
                        <h2>
                            Start by adding a recipe in the top right. Assign those recipes to days and export into a
                            grocery list.
                        </h2>
                    </div>
                    <RecipeCreator />
                    <div className={styles.daysContainer}>
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
