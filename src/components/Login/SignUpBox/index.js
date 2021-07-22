import React from 'react';

import {
    P,
    Link
} from './styles';

const SignUpBox = () => {
    return (
        <P>
            You do not have an account? &nbsp;
            <Link
                target="_blank"
                href="https://www.instagram.com/accounts/emailsignup/"
            >Sign up</Link>
        </P>
    )
}

export default SignUpBox
