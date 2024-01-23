import styled from 'styled-components'
import {PageProps} from "./styleTypes";

export const SIDEBAR_WIDTH = 300;

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

export const Page = styled.div<PageProps>`
    height: 100%;
    display: ${(props) => props.display};
    justify-content: ${(props) => props.justifyContent};
    background-color: #313338;
    align-items: ${(props) => props.alignItems};
`;

export const ConversationSidebarStyle = styled.aside`
    position: absolute;
    top: 0;
    left: 0;
    width: ${SIDEBAR_WIDTH}px;
    height: 100%;
    background-color: #2b2d31;
    border-right: 1px solid #5454543d;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
`;

export const ConversationChannelPageStyle = styled.div`
    height: 100%;
    margin-left: ${SIDEBAR_WIDTH}px;
`;

export const ConversationSidebarHeader = styled.header`
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: ${SIDEBAR_WIDTH}px;
    box-sizing: border-box;
    justify-content: space-between;
    align-items: center;
    padding: 0 28px;
    background-color: #1e1f22;
    height: 75px;
    border-bottom: 1px solid #5454543d;
    border-radius: 0 0 10px 10px;
    & h1 {
        font-size: 26px;
        font-weight: 400;
    }
`;

export const ConversationSidebarContainer = styled.div`

`;

export const ConversationSidebarItem = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    box-sizing: border-box;
    padding: 14px 28px;

    &:hover {
        background-color: #35373D;
        border-radius: 5px;
    }
`;