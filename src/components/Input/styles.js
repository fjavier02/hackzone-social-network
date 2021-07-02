import styled from "styled-components";

export const Default = styled.input`
    position: relative;
    margin-bottom: 16px;
    border: 1px solid ${(props)=> props.theme.lightGrey};
    border-radius: 5px;
    width: 470px;
    height: 58px;
    left: 0;
    right: 0;
    top: 54px;
    ::placeholder{
        position: absolute;
        width: 429px;
        left: 20px;
        right: 21px;
        top: 19px;
        bottom: 19px;
    }
`;

