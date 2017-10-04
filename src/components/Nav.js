var React = require('react');
var Link = require('react-router-dom').Link;
var Logo = require('./Logo');

function Nav () {
    return (
        <div className="nav">
            <Logo />
        </div>
    )
}

module.exports = Nav;

