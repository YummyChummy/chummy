var React = require('react');


class ItemDescription extends React.Component {
    render(){
        return (
            <dl>
                <dt className="body" style={{fontWeight: 'bold'}}>{this.props.item}</dt>
                <dd className="body">{this.props.description}</dd>
            </dl>
        )
    }
}


module.exports = ItemDescription;