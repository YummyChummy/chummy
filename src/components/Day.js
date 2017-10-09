import React, { Component } from 'react'

function NoRecipes (props) {
    return(
        <div className="body">
            No recipes added yet.
        </div>
    )
}

class Day extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isHidden: false
        }
    }

    render() {
        var ops = {}
        ops['hidden'] = this.props.isHidden

        if (this.props.isHidden){
            ops['style'] = {
                    position: 'absolute',
                    bottom: '0',
                    height: '40px',
                    marginTop: '40px',
                }
        }

        return (
            <div className="day" {...ops}>
                <h2 className="green-background">
                    {this.props.header}
                </h2>
                 <NoRecipes/>
            </div>
        )
    }

}

module.exports = Day;