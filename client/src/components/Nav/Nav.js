var React = require('react');
var Link = require('react-router-dom').Link;
var Logo = require('../Logo/Logo');
import styles from './Nav.scss'

function Nav () {
    return (
        <div className={styles.nav}>
            <Logo />
        </div>
    )
}

module.exports = Nav;

