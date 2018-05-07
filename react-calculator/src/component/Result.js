import React from 'react';
import PropTypes from 'prop-types';

class Result extends React.Component {
    render() {
        return (
            <div className="result-container">
                <div className="operation-list">
                    {this.props.result}
                </div>
                <div className="result">
                    {this.props.current}
                </div>
            </div>
        );
    }
}

Result.propTypes = {
    result: PropTypes.string,
    current: PropTypes.string
}
export default Result;