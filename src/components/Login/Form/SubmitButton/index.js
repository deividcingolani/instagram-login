import React from 'react';

import {
    Button
} from './styles';

const SubmitButton = ({ children, disabled }) => {
    return (
        <Button
            type="submit"
            disabled={disabled}
            $disabled={disabled}
        >
            { children }
        </Button>
    )
}

export default SubmitButton;
