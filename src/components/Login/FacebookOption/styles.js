import tw from 'tailwind-styled-components';

export const Container = tw.div`
    w-full
    mb-3
    px-5
    order-2
    md:order-4
`;

export const ButtonContainer = tw.button`
    flex
    flex-row
    items-center
    justify-center
    w-full
    rounded
    py-1
    bg-primary-blue md:bg-transparent
`;

const Image = tw.img`
    w-5
    h-5
    mr-2
    rounded-sm
`;

export const ImageMobile = tw(Image)`
    md:hidden
`;

export const ImageDesktop = tw(Image)`
    hidden md:block
`;

export const Link = tw.a`
    text-sm
    font-semibold
    text-white
    md:text-fb-blue
`;