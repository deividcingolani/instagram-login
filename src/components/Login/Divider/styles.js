import tw from 'tailwind-styled-components';

export const Container = tw.div`
    flex
    flex-row
    items-center
    text-gray-500
    mb-5
    px-8
`;

export const P = tw.p`
    uppercase
    px-3
    font-semibold
`;

export const Line = tw.div`
    h-1
    w-full
    border-b
    border-gray-300
`;