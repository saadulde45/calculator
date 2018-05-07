import React from 'react';
import Button from './Button';
import PropTypes from 'prop-types';
import Constants from '../constants/constants';

class ButtonLayoutPanel extends React.Component {

    handleClick = (buttonName) => {
        this.props.clickHandler(buttonName);
    }

    render() {
        return (
            <div className="button-container">
                {/* Number section */}
                <section className="number-container">
                    {
                        Constants.NUMBER_LAYOUT.map((row) => {
                            return (
                                row.map((button, index) => {
                                    return (
                                        <Button key={index} name={button} clickHandler={this.handleClick} />
                                    );
                                })
                            );
                        })
                    }
                </section>
                {/* Operation section */}
                <section className="operation-container">
                    {
                        Constants.ROW_OPERATION.map((button, index) => {
                            let className = button === '=' ? 'equals' : '';
                            return (
                                <Button name={button} key={index} clickHandler={this.handleClick} applyClass={className} />
                            );
                        })
                    }
                </section>
            </div>
        );
    }
}

ButtonLayoutPanel.propTypes = {
    clickHandler: PropTypes.func,
};
export default ButtonLayoutPanel;