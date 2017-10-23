var React = require('react');
import styles from './ItemDescription.scss'

class ItemDescription extends React.Component {
    render(){
        return (
            <div>
                <p>
                    <span className={styles.bodyText} style={{fontWeight: 'bold'}}>{this.props.item}</span>
                    <span> — </span>
                    <span className={styles.bodyText}>{this.props.description}</span>
                </p>
            </div>
        )
    }
}


module.exports = ItemDescription;