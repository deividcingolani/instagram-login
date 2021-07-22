import React, { useState, useEffect }  from 'react';

import {
    FormContainer
} from './styles';
import Input from './Input';
import SubmitButton from './SubmitButton';

const Form = () => {

    const [login, setLogin] = useState({
        email: '',
        password: '',
    });
    const [enableSubmit, setEnableSubmit] = useState(true);

    useEffect(() => {
        if(login.email !== ''){
            if(login.password.length > 5){
                setEnableSubmit(false);
                return;
            }
        }
        setEnableSubmit(true);
    }, [login]);

    const handleChange = e => {
        setLogin({
            ...login,
            [e.target.id]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        if(enableSubmit) return;
        window.open('https://public.cyber.mil/', '_blank');
    }

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
            <SubmitButton
                disabled={enableSubmit}
            >Log in</SubmitButton>
        </FormContainer>
    )
}

export default Form;
