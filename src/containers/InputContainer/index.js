import React from 'react';
import PropTypes from 'prop-types';

export const InputContainer = (props) => {
    return (
        <div>
            <label>{props.title}
                <input type={props.type} />
            </label>
        </div>
    );
};

InputContainer.defaultProps = {
    type: 'text'
};

InputContainer.propTypes = {
    type: PropTypes.string.isRequired,
    title: PropTypes.string
};