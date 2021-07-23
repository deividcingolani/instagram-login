import React from 'react';

import { Link } from '../styles';
import { linksItems } from '../contants';

const Links = () => {
    return linksItems.map((item, i) => (
        <Link
            key={i}
            target="_blank"
            href={item.link}
        >{item.text}</Link>
    ))
}

export default Links;
