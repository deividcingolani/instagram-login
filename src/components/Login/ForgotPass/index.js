import React from 'react';

import {
    Container,
    Link,
    P,
} from './styles';

const ForgotPass = ({ show }) => (
    <Container $show={show}>
        <P>
            <Link
                target="_blank" 
                href="https://www.instagram.com/accounts/emailsignup/"
                >Forgot password?</Link>
        </P>
    </Container>
)

export default ForgotPass;
