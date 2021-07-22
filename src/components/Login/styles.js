import tw from 'tailwind-styled-components';

export const Main = tw.main`
    min-h-screen
    bg-primary-white
`;

export const Section = tw.section`
    w-full
    min-h-screen
    flex
    flex-col
    items-center
    justify-center
`;

export const Article = tw.article`
    w-9/12
    md:w-1/2
    lg:w-1/4
    px-6 py-4
    border
    border-gray-300
    bg-white
    mb-4
`;

export const Image = tw.img`
    mx-auto
    my-5
    px-8
`;