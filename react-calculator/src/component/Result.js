import React from 'react';
import PropTypes from 'prop-types';

class Result extends React.Component {
    render() {
        return (
            <div>
                <div>
                    {this.props.result}
                </div>
                <div>
                    {this.props.current}
                </div>
            </div>
        );
    }
}

Result.propTypes = {
    result: PropTypes.string
}
export default Result;