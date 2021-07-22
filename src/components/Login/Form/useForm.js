import React, { useState, useEffect } from 'react'

const useForm = () => {

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
    
    return {
        login,
        enableSubmit,
        handleChange,
        handleSubmit,
    }
}

export default useForm;
