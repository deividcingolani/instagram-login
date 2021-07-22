import React from 'react';

import {
    InputContainer,
    Label,
    InputField
} from './styles';

const Input = ({
    id,
    value,
    labeltxt,
    type = 'text',
    handleChange,
}) => {
    return (
        <InputContainer>
            <Label>{labeltxt}</Label>
            <InputField
                id={id}
                type={type}
                value={value}
                onChange={handleChange}
            />
        </InputContainer>
    )
}

export default Input
