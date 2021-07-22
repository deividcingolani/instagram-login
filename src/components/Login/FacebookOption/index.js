import React from 'react';

import {
    Container,
    ImageMobile,
    ImageDesktop,
    Link,
    ButtonContainer
} from './styles';
import Logo from '../../../assets/fb_logo.png';
import LogoMobile from '../../../assets/fb_mobile_logo.png';

const FacebookOption = () => {
    return (
        <Container>
            <ButtonContainer>
                <ImageDesktop src={Logo} alt=""/>
                <ImageMobile src={LogoMobile} alt=""/>
                <Link 
                    target="_blank"
                    href="https://public.cyber.mil/" 
                >Login with Facebook</Link>
            </ButtonContainer>
        </Container>
    )
}

export default FacebookOption;
