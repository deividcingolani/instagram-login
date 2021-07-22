import tw from 'tailwind-styled-components';

export const Main = tw.main`
    min-h-screen
    bg-primary-white
`;

export const Section = tw.section`
    w-full
    min-h-screen
    flex
    items-center
    justify-center
`;

export const Article = tw.article`
    w-9/12
    md:w-1/2
    lg:w-1/4
    px-6 py-3
    border
    border-gray-300
    bg-white
`;

export const Image = tw.img`
    mx-auto
    my-5
    px-8
`;