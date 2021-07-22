import React from 'react';

import {
    Main,
    Section,
    Article,
    Image,
} from './styles';
import Form from './Form';
import Logo from '../../assets/logo.png';

const Login = () => {

    

    return (
        <Main>
            <Section>
                <Article>
                    <Image src={Logo}/>
                    <Form/>
                </Article>
            </Section>
        </Main>
    )
}

export default Login
