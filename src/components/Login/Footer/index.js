import React from 'react';

import {
    FooterContainer,
    Row,
    P,
} from './styles';
import Links from './Links';
import Languages from './Languages';

const Footer = () => {
    return (
        <FooterContainer className="w-full">
            <Row>
                <Links/>
            </Row>
            <Row>
                <Languages/>
                <P>© 2021 Instagram from Facebook</P>
            </Row>
        </FooterContainer>
    )
}

export default Footer;
