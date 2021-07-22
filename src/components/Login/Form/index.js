import React from 'react';

import useForm from './useForm';

import {
    FormContainer
} from './styles';
import Input from './Input';
import SubmitButton from './SubmitButton';
import ForgotPass from '../ForgotPass';

const Form = () => {

    const { login, enableSubmit, handleChange, handleSubmit } = useForm();

    return (
        <FormContainer
            onSubmit={handleSubmit}
        >
            <Input
                id="email"
                value={login.email}
                handleChange={handleChange}
                labeltxt="Phone, user or email"
            />
            <Input
                id="password"
                type="password"
                labeltxt="Password"
                value={login.password}
                handleChange={handleChange}
            />
            <ForgotPass show="md:hidden"/>
            <SubmitButton
                disabled={enableSubmit}
            >Log in</SubmitButton>
        </FormContainer>
    )
}

export default Form;
