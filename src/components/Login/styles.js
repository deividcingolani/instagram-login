import tw from 'tailwind-styled-components';

export const Main = tw.main`
    min-h-screen
    bg-primary-white
    md:w-full
    flex
    flex-row
    flex-wrap
    justify-center
    items-center
    mx-auto
`;

export const CommonSection = tw.section`
    min-h-screen
    flex
    flex-col
    items-center
    space-y-3
`; 

export const Section = tw(CommonSection)`
    w-full
    md:w-88
    mt-10
`;

export const ImagesSection = tw(CommonSection)`
    w-100
    hidden
    2md:block
    image-section
`;

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