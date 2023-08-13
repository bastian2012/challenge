import React from 'react';

class Footer extends React.Component {
    render() {
        const { group } = this.props;

        return (
            <footer className="pied">
                <p className="tèks-pied">All rights reserved © {group} 2023</p>
            </footer>
        );
    }
}

export default Footer;
