var React = require('react');


class ItemDescription extends React.Component {
    render(){
        return (
            <div className="itemDescription">
                <p>
                    <span className="bodyText" style={{fontWeight: 'bold'}}>{this.props.item}</span>
                    <span> — </span>
                    <span className="bodyText">{this.props.description}</span>
                </p>
            </div>
        )
    }
}


module.exports = ItemDescription;