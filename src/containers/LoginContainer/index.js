import React from 'react';

import {InputContainer} from "../InputContainer";

export const LoginContainer = () => {
    return (
        <section className="login">
            <h1>Login</h1>
            <InputContainer
                title="E-Mail"
                type="email"
                required="required" />
            <InputContainer
                title="Password"
                type="password"
                required="required" />
        </section>
    );
};