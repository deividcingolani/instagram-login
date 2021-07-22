import tw from 'tailwind-styled-components';

export const Button = tw.button`
    w-full
    block
    py-1
    mt-4
    rounded
    duration-150
    ${props => props.$disabled 
        ? 'cursor-default opacity-50'
        : 'cursor-pointer'
    }
    bg-primary-blue
    text-white
    font-semibold
    focus:outline-none
`;