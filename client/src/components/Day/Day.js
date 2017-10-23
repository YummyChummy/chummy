import React, { Component } from 'react'
import styles from "./Day.scss"

function RecipesView (props) {
    return(
        <div className={styles.cardBody}>
            <div className={styles.bodyTextCard}>
                No recipes added yet.
                <select style={{width: '100%'}} defaultValue={'none'}>
                    <option value={'none'}>Please choose a recipe</option>
                    <option value={'Potato Salad'}>Potato Salad</option>

                </select>
            </div>
        </div>
    )
}

class Day extends Component {

    render() {
        return (
            <div className={styles.dayCard} hidden={this.props.isHidden}>
                <h2 className={styles.greenHeader}>
                    {this.props.header}
                </h2>
                <RecipesView/>
            </div>
        )
    }

}

module.exports = Day;