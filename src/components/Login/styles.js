import tw from 'tailwind-styled-components';

export const Main = tw.main`
    min-h-screen
    bg-primary-white
    md:w-10/12 lg:w-7/12
    flex
    flex-row
    justify-center
    items-center
    mx-auto
`;

export const Section = tw.section`
    w-full
    md:w-1/2
    min-h-screen
    flex
    flex-col
    items-center
    justify-center
    space-y-3
`;

export const ImagesSection = tw(Section)`
    hidden
    md:flex
`;


// md:w-1/2
// lg:w-4/12
export const Article = tw.article`
    w-10/12
    sm:w-8/12
    md:w-full
    px-6 md:py-4
    md:border
    border-gray-300
    md:bg-white
    flex
    flex-col
`;

export const Image = tw.img`
    mx-auto
    mt-4
    mb-10 md:mb-1
    px-8
    order-1
`;