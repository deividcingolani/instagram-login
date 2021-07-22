import React from 'react';

import {
    Container,
    Image,
    P
} from './styles';
import Logo from '../../../assets/fb_logo.png';

const FacebookOption = () => {
    return (
        <Container>
            <Image src={Logo} alt=""/>
            <P>Login with Facebook</P>
        </Container>
    )
}

export default FacebookOption;
