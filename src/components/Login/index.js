import React from 'react';

import {
    Main,
    Section,
    Article,
    Image,
} from './styles';
import Logo from '../../assets/logo.png';
import Form from './Form';
import Divider from './Divider';
import FacebookOption from './FacebookOption';
import ForgotPass from './ForgotPass';
import SignUpBox from './SignUpBox';

const Login = () => (
    <Main>
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
        </Section>
    </Main>
)

export default Login
