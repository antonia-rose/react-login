import React from 'react';

import {InputContainer} from "../InputContainer";

export const LoginContainer = () => {
    return (
        <section className="login">
            <h1>Login</h1>
            <InputContainer
                title="E-Mail"
                type="text" />
            <InputContainer
                title="Password"
                type="password" />
        </section>
    );
};