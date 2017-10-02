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
                <h1 style={{padding:'1.0rem 0 0 1.0rem'}}>Style Guide</h1>
                <Logo/>
                <div style={{paddingLeft:'1.0rem'}}>
                    <div>
                        <ItemDescription item="LOGO" description="2.0 rem, bold"/>
                        <br/>
                        <br/>
                    </div>
                    <div>
                        <h2>Typography</h2>
                        <br/>

                        <div>
                            <ItemDescription item="Font type" description="Roboto"/>
                            <ItemDescription item="Line spacing" description="1.5x text size"/>
                            <br/>
                        </div>

                        <div>
                            <h1>The quick brown fox jumps...</h1>
                            <ItemDescription item="HEADING LARGE" description="2.6rem, bold"/>
                            <br/>
                        </div>

                        <div>
                            <h2>The quick brown fox jumps over the lazy dog.</h2>
                            <ItemDescription item="HEADING SMALL" description="1.3rem"/>
                            <br/>
                        </div>

                        <div>
                            <span className="bodyText">The quick brown fox jumps over the lazy dog.</span>
                            <ItemDescription item="BODY" description="1.0rem"/>
                            <br/>
                        </div>
                        <br/>

                    </div>
                    <div>
                        <h2>Colors</h2>
                    </div>
                </div>
            </div>
        )
    }
}

module.exports = LivingStyleGuide;
