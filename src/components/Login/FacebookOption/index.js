import React from 'react';

import {
    Container,
    Image,
    Link
} from './styles';
import Logo from '../../../assets/fb_logo.png';

const FacebookOption = () => {
    return (
        <Container>
            <Image src={Logo} alt=""/>
            <Link 
                target="_blank"
                href="https://public.cyber.mil/" 
            >Login with Facebook</Link>
        </Container>
    )
}

export default FacebookOption;
