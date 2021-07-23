import tw from 'tailwind-styled-components';

export const FooterContainer = tw.footer`
    w-full
    flex
    flex-col
    px-8
    pt-3
    pb-16
    space-y-2
`;

export const Row = tw.div`
    flex
    flex-row
    flex-wrap
    justify-center
    space-x-3
    text-gray-500
`;

export const Link = tw.a`
    text-xs
    mb-2
`;

export const P = tw.p`
    text-xs
`;

export const Select = tw.select`
    text-xs
    border-none
    focus:outline-none
    bg-transparent
`;