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
                        <h2 style={{fontWeight: 'bold'}}>Typography</h2>
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
                        <h2 style={{fontWeight: 'bold'}}>Colors</h2>
                        <br/>
                        <span className="bodyText" style={{fontWeight: 'bold'}}>APP COLORS</span>
                        <br/>
                        <br/>

                        <svg width="750" height="170">
                            <g>
                                <rect width="150" height="150" className="charcoal"/>
                                <text x="40" y="135" className="bodyText" style={{fill:'white'}}>#2A2D34</text>
                            </g>
                            <g>
                                <rect width="150" height="150" x="150" className="grey"/>
                                <text x="190" y="135" className="bodyText" style={{fill:'white'}}>#77797D</text>
                            </g>
                            <g>
                                <rect width="150" height="150" x="300" className="green"/>
                                <text x="340" y="135" className="bodyText" style={{fill:'white'}}>#009B72</text>
                            </g>
                            <g>
                                <rect width="150" height="150" x="450" className="orange"/>
                                <text x="490" y="135" className="bodyText" style={{fill:'white'}}>#F26430</text>
                            </g>
                            <g>
                                <rect width="150" height="150" x="600" className="taupe"/>
                                <text x="640" y="135" className="bodyText">#DDC9B4</text>
                            </g>
                        </svg>
                        <br/>

                        <span className="bodyText" style={{fontWeight: 'bold'}}>ALERT COLORS</span>
                        <br/>
                        <br/>

                        <svg width="600" height="170">
                            <g>
                                <rect width="150" height="150" className="red"/>
                                <text x="40" y="135" className="bodyText" style={{fill:'white'}}>#D0021B</text>
                            </g>
                            <g>
                                <rect width="150" height="150" x="150" className="green"/>
                                <text x="190" y="135" className="bodyText" style={{fill:'white'}}>#009B72</text>
                            </g>
                            <g>
                                <rect width="150" height="150" x="300" className="yellow"/>
                                <text x="340" y="135" className="bodyText">#F5BF23</text>
                            </g>
                            <g>
                                <rect width="150" height="150" x="450" className="blue"/>
                                <text x="490" y="135" className="bodyText" style={{fill:'white'}}>#4A90E2</text>
                            </g>
                        </svg>
                        <br/>
                        <br/>
                    </div>



                </div>
            </div>
        )
    }
}

module.exports = LivingStyleGuide;
