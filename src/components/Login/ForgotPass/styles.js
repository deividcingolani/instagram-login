import tw from 'tailwind-styled-components';

export const Container = tw.div`
    mt-4 md:mt-0
    mb-7 md:mb-0
    ${props => props.$show}
    order-5
`;

export const P = tw.p`
    font-semibold
    md:font-normal
    text-right
    md:text-center
`;

export const Link = tw.a`
    text-center
    text-primary-blue
    md:text-fb-blue
    text-sm
    md:text-xs
`;