import React from 'react';

import {
    DownloadArticle,
    Image,
    Link,
    P,
} from './styles';
import {
    LogoAppStore,
    LogoGooglePlay,
    appStoreLink,
    googlePlayLink
} from './constants';

const Downloads = () => {
    return (
        <DownloadArticle>
            <P>Get the app.</P>
            <Link href={appStoreLink}>
                <Image src={LogoAppStore}/>
            </Link>
            <Link href={googlePlayLink}>
                <Image src={LogoGooglePlay}/>
            </Link>
        </DownloadArticle>
    )
}

export default Downloads;
