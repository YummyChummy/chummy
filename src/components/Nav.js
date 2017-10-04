var React = require('react');
var Link = require('react-router-dom').Link;
var Logo = require('./Logo');

function Nav () {
    return (
        <div className="nav">
            <Logo />
                <nav>
                    <li>
                        <Link to='/living_style_guide'>Style Guide</Link>
                    </li>
                </nav>

        </div>
    )
}

module.exports = Nav;

