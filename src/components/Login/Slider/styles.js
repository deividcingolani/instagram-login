import tw from 'tailwind-styled-components';

export const SliderContainer = tw.div`
    slider
    relative
    w-full
    h-full
`;

export const Image = tw.img`
    absolute
    slider-image
    duration-1000
    ${props => props.$id === props.$show
        ? 'opacity-100'
        : 'opacity-0'
    }
`;