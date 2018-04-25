import React from 'react';
import PropTypes from 'prop-types';

// TODOs:
/// Eingabe Email prüft bei jedem Zeichen, ob ein @ und ein . vorhanden sind
/// Eingabe Passwort prüft Komplexität und baut ein Haus vom Nikolaus?
/// erst wenn beide felder validieren wird ein button angezeigt

export class InputContainer extends React.Component {
    render() {
        return (
            <div>
                <label>{this.props.title}
                    <input
                        type={this.props.type}
                        required={this.props.required} />
                </label>
            </div>
        );
    }
};

InputContainer.defaultProps = {
    type: 'text'
};

InputContainer.propTypes = {
    type: PropTypes.string.isRequired,
    title: PropTypes.string
};