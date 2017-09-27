var React = require('react');
var Link = require('react-router-dom').Link;
var Logo = require('./Logo');
var ItemDescription = require('./ItemDescription');

class LivingStyleGuide extends React.Component {
    componentDidMount () {
        document.body.className="LivingStyleGuide";
    }

    render(){
        return (
            <div>
                <div>
                    <Logo/>
                    <ItemDescription item="LOGO" description="2.0 rem, bold"/>
                </div>
                <div>
                    <h2>Typography</h2>
                    <ItemDescription item="Font type" description="Roboto"/>
                    <ItemDescription item="Line spacing" description="1.5x text size"/>
                    <span className="heading-large">The quick brown fox jumps...</span>
                    <ItemDescription item="HEADING LARGE" description="2.6rem, bold"/>
                    <span className="heading-small">The quick brown fox jumps over the lazy dog.</span>
                    <ItemDescription item="HEADING SMALL" description="1.3rem"/>
                    <span className="body">The quick brown fox jumps over the lazy dog.</span>
                    <ItemDescription item="BODY" description="1.0rem"/>
                </div>
                <div>
                    <h2>Colors</h2>
                </div>
            </div>
        )
    }
}

module.exports = LivingStyleGuide;
