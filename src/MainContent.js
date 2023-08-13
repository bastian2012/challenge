import React from 'react';

class MainContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clickedColor: '',
        };
    }

    handleColorClick = (color) => {
        this.setState({
            clickedColor: color,
        });
        this.props.changeBodyColor(color);
    };

    render() {
        const { colors } = this.props;
        const { clickedColor } = this.state;

        return (
            <div className="kontniPrinsipal">
                <h2>{clickedColor ? `Kare ki gen koulè #${clickedColor}` : "Byenveni. Klike sou nenpòt karè"}</h2>
                <div className="kareKoulè">
                    {colors.map((color, index) => (
                        <div
                            key={index}
                            className="kare"
                            style={{ backgroundColor: `#${color}`, color: '#fff' }}
                            onClick={() => this.handleColorClick(color)}
                        >
                            {color}
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default MainContent;
