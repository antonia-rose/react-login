// @flow

import * as React from 'react';

// TODOs:
/// Eingabe Email prüft bei jedem Zeichen, ob ein @ und ein . vorhanden sind
/// Eingabe Passwort prüft Komplexität und baut ein Haus vom Nikolaus?
/// erst wenn beide felder validieren wird ein button angezeigt

type Props = {
    title: string,
    type: string,
    required?: boolean
}
export class InputContainer extends React.Component<Props> {
    static defaultProps = {
        type: 'text'
    };

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
}
