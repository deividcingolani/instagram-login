import tw from 'tailwind-styled-components';

export const InputContainer = tw.div`
    mt-2
    flex
    p-3
    border
    relative
    rounded-sm
    justify-between
    border-gray-300
    bg-primary-white
`;

export const Label = tw.label`
    z-0
    absolute
    ${props => props.$active
        ? 'bottom-5 mb-1 text-xs'
        : 'text-sm'
    }
    duration-200
    text-gray-400
`;

export const InputField = tw.input`
    z-10
    w-full
    text-xs
    ${props => props.$active
        ? 'relative top-2 duration-200'
        : ''
    }
    bg-transparent
    focus:outline-none
`;

export const HideButton = tw.button`
    text-black
    focus:outline-none
`;