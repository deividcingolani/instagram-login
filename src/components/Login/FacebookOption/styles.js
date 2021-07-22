import tw from 'tailwind-styled-components';

export const Container = tw.div`
    flex
    flex-row
    items-center
    justify-center
    w-full
    px-8
    pb-5
`;

export const Image = tw.img`
    w-5
    h-5
    mr-2
    rounded-sm
`;

export const Link = tw.a`
    text-sm
    font-semibold
    text-fb-blue
`;