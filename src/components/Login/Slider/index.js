import React, { useState, useEffect } from 'react';

import {
    SliderContainer,
    Image
} from './styles';

import Img1 from '../../../assets/img1.jpg';
import Img2 from '../../../assets/img2.jpg';
import Img3 from '../../../assets/img3.jpg';
import Img4 from '../../../assets/img4.jpg';
import Img5 from '../../../assets/img5.jpg';

const Slider = () => {

    const [show, setShow] = useState(1);

    useEffect(() => {
        changeId();
        // eslint-disable-next-line
    }, [show]);

    const changeId = () => {
        setTimeout(() => {
            const newShowId = show === 5 ? 1 : show+1;
            setShow(newShowId);
        }, [3000]);
    }

    return (
        <SliderContainer>
            <Image src={Img1} $id={1} $show={show} alt=""/>
            <Image src={Img2} $id={2} $show={show} alt=""/>
            <Image src={Img3} $id={3} $show={show} alt=""/>
            <Image src={Img4} $id={4} $show={show} alt=""/>
            <Image src={Img5} $id={5} $show={show} alt=""/>
        </SliderContainer>
    )
}

export default Slider;
