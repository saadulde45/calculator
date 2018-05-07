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
            <div>
                {/* Number section */}
                <section>
                    {
                        Constants.NUMBER_LAYOUT.map((row, index) => {
                            return (
                                <div key={index}>
                                    {
                                        row.map((button, index) => {
                                            return (
                                                <Button key={index} name={button} clickHandler={this.handleClick} />
                                            );
                                        })
                                    }
                                </div>
                            );
                        })
                    }
                </section>
                {/* Operation section */}
                <section>
                    <div>
                        {
                            Constants.ROW_OPERATION.map((button, index) => {
                                return (
                                    <Button name={button} key={index} clickHandler={this.handleClick} />
                                );
                            })
                        }
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