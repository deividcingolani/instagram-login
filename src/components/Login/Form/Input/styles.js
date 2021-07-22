import tw from 'tailwind-styled-components';

export const InputContainer = tw.div`
    mt-2
    flex
    p-2
    border
    justify-between
    border-gray-300
    bg-primary-white
`;

export const Label = tw.label`

`;

export const InputField = tw.input`
    w-full
    rounded-sm
    focus:outline-none
    focus:border-gray-400
`;

export const HideButton = tw.button`
    text-black
    focus:outline-none
`;