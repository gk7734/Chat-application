import styled from 'styled-components'

export const InputField = styled.input`
    font-family: Inter;
    outline: none;
    border: none;
    background-color: inherit;
    color: #fff;
    font-size: 18px;
    width: 100%;
    box-sizing: border-box;
    padding: 0;
    margin: 4px 0;
`;

export const InputContainer = styled.div`
    background-color: #131313;
    padding: 12px 16px;
    border-radius: 10px;
    width: 100%;
    box-sizing: border-box;
`;

export const InputLabel = styled.label`
    display: block;
    color: #8f8f8f;
    font-size: 14px;
    margin: 4px 0;
`;

export const Button = styled.button`
    font-family: Inter;
    width: 100%;
    background-color: #2b09ff;
    color: #fff;
    font-size: 16px;
    outline: none;
    border: none;
    border-radius: 10px;
    padding: 25px 0;
    font-weight: 500;
    transition: 250ms background-color ease;
    &:hover {
        cursor: pointer;
        background-color: #3415ff;
    }

    &:active {
        background-color: #3a1cff;
    }
`;

export const Page = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    background-color: #1a1a1a;
    align-items: center;
`;
