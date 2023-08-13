import React from 'react';
import Header from './header';
import MainContent from './MainContent';
import Footer from './Footer';

class Core extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bodyColor: '',
        };
    }

    changeBodyColor = (color) => {
        this.setState({
            bodyColor: color,
        });
    };

    render() {
        const { items, group } = this.props;
        const { bodyColor } = this.state;

        const colors = ["8c978c", "155aaf", "671b6e", "43f564", "2434b4", "f64d89"];

        return (
            <div className="aplikasyon" style={{ backgroundColor: `#${bodyColor}` }}>
                <Header items={items} />
                <MainContent colors={colors} changeBodyColor={this.changeBodyColor} />
                <Footer group={group} />
            </div>
        );
    }
}

export default Core;
