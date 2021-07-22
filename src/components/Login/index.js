import React from 'react';

import {
    Main,
    Section,
    Article,
    Image,
} from './styles';
import Logo from '../../assets/logo.png';
import Form from './Form';
import SignUpBox from './SignUpBox';

const Login = () => (
    <Main>
        <Section>
            <Article>
                <Image src={Logo}/>
                <Form/>
            </Article>
            <Article>
                <SignUpBox/>
            </Article>
        </Section>
    </Main>
)

export default Login
