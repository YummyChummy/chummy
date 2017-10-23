var React = require('react');
import styles from './Logo.scss'

class Logo extends React.Component {
    render() {
        return (
            <h1 className={styles.logo}>
                <logo>
                    <span className={styles.orange}>chum</span>
                    <span className={styles.green}>my</span>
                </logo>
            </h1>
        );
    }
}

module.exports = Logo;