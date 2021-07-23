import React from 'react';

import {
    Main,
    Section,
    Article,
    Image,
    ImagesSection,
} from './styles';
import Logo from '../../assets/logo.png';
import Slider from './Slider';
import Form from './Form';
import Divider from './Divider';
import FacebookOption from './FacebookOption';
import ForgotPass from './ForgotPass';
import SignUpBox from './SignUpBox';
import Downloads from './Downloads';
import Footer from './Footer';

const Login = () => (
    <Main>
        <ImagesSection>
            <Slider/>
        </ImagesSection>
        <Section>
            <Article>
                <Image src={Logo}/>
                <Form/>
                <Divider/>
                <FacebookOption/>
                <ForgotPass show="hidden md:block"/>
            </Article>
            <Article>
                <SignUpBox/>
            </Article>
            <Downloads/>
        </Section>
        <Footer/>
    </Main>
)

export default Login
