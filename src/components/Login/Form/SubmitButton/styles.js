import tw from 'tailwind-styled-components';

export const Button = tw.button`
    w-full
    block
    py-1
    mt-4
    rounded
    ${props => props.$disabled 
        ? 'cursor-default'
        : 'cursor-pointer'
    }
    bg-primary-blue
    text-white
    font-semibold
    focus:outline-none
`;