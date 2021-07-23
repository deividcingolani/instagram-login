import React, { useState } from 'react';

import {
    InputContainer,
    Label,
    InputField,
    HideButton
} from './styles';

const Input = ({
    id,
    value,
    labeltxt,
    type = 'text',
    handleChange,
}) => {

    const [localType, setLocalType] = useState(type);
    const [enableText, setEnableText] = useState('Show');

    const handleHide = () => {
        setLocalType(localType === 'password' ? 'text' : type);
        setEnableText(localType === 'password' ? 'Hide' : 'Show');
    }

    return (
        <InputContainer>
            <Label $active={value.length}>{labeltxt}</Label>
            <InputField
                id={id}
                value={value}
                type={localType}
                $active={value.length}
                onChange={handleChange}
            />
            { 
                type === 'password' && value.length 
                ? <HideButton 
                    type="button" 
                    onClick={handleHide}
                >{enableText}</HideButton>
                : null
            }
        </InputContainer>
    )
}

export default Input
