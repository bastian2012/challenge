import React from 'react';

class Header extends React.Component {
    render() {
        const { items } = this.props;

        return (
            <header className="antèt">
                <nav className="navigasyon">
                    <ul className="lis-navigasyon">
                        {items.map((item, index) => (
                            <li key={index} className="eleman-navigasyon">
                                <a href="#">{item}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;
