import styled from 'styled-components';

export const LayoutForm = styled.form`
    position: absolute;
    width: 530px;
    height: 545px;
    background: #FFFFFF;
    box-shadow: 0px 3px 16px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    text-align: center;
    justify-content: center;
`;
export const ButtonEntrar = styled.div`
    margin-top: 72px;
    margin-bottom: 32px;

`;
export const EquecioSenha = styled.a`
    color: ${({theme})=> theme.blue};
    margin-bottom: 76px;

`;

