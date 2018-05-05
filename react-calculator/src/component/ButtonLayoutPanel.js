import React from 'react';
import Button from './Button';
import PropTypes from 'prop-types';

class ButtonLayoutPanel extends React.Component {

    handleClick = (buttonName) => {
        this.props.clickHandler(buttonName);
    }

    render() {
        return (
            <div>
                {/* Number section */}
                <section>
                    <div>
                        <Button name="7" clickHandler={this.handleClick} />
                        <Button name="8" clickHandler={this.handleClick} />
                        <Button name="9" clickHandler={this.handleClick} />
                    </div>
                    <div>
                        <Button name="4" clickHandler={this.handleClick} />
                        <Button name="5" clickHandler={this.handleClick} />
                        <Button name="6" clickHandler={this.handleClick} />
                    </div>
                    <div>
                        <Button name="1" clickHandler={this.handleClick} />
                        <Button name="2" clickHandler={this.handleClick} />
                        <Button name="3" clickHandler={this.handleClick} />
                    </div>
                    <div>
                        <Button name="AC" clickHandler={this.handleClick} />
                        <Button name="0" clickHandler={this.handleClick} />
                        <Button name="." clickHandler={this.handleClick} />
                    </div>
                </section>
                {/* Operation section */}
                <section>
                    <div>
                        <Button name="+" clickHandler={this.handleClick} />
                        <Button name="-" clickHandler={this.handleClick} />
                        <Button name="=" clickHandler={this.handleClick} />
                    </div>
                </section>
            </div>
        );
    }
}

ButtonLayoutPanel.propTypes = {
    clickHandler: PropTypes.func,
};
export default ButtonLayoutPanel;