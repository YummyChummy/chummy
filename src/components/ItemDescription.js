var React = require('react');


class ItemDescription extends React.Component {
    render(){
        return (
            <dl>
                <dt className="bodyText" style={{fontWeight: 'bold'}}>{this.props.item}</dt>
                <dd className="bodyText">{this.props.description}</dd>
            </dl>
        )
    }
}


module.exports = ItemDescription;