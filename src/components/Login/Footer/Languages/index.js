import React from 'react';

import { Select } from '../styles';
import { languages } from '../contants';

const Languages = () => {
    return (
        <Select>
            {
                languages.map((item, i) => (
                    <option value={item}>{item}</option>
                ))
            }
        </Select>
    )
}

export default Languages
