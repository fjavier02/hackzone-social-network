import styled from 'styled-components';

export const Container = styled.div`
  font-size: 24px;
  color: #fff;
  padding: 20px 18px;
  border-radius: 8px;
  background-color: ${({theme})=> theme.blue};
  text-align:center;

  position: absolute;
  height: 66px;
  left: 126px;
  right: 125px;
  top: 20px;
`;

export const ContainerError = styled.div`
  font-size: 24px;
  color: #fff;
  padding: 20px 18px;
  border-radius: 8px;
  background-color: ${({theme})=> theme.error};
  text-align:center;

  position: absolute;
  height: 66px;
  left: 126px;
  right: 125px;
  top: 20px;
`;

export const ContainerlightGrey = styled.div`
  font-size: 24px;
  color: #fff;
  padding: 20px 18px;
  border-radius: 8px;
  background-color: ${({theme})=> theme.lightGrey};
  text-align:center;

  position: absolute;
  height: 66px;
  left: 126px;
  right: 125px;
  top: 20px;
`;

export const Containerpink = styled.div`
  font-size: 24px;
  color: #fff;
  padding: 20px 18px;
  border-radius: 8px;
  background-color: ${({theme})=> theme.pink};
  text-align:center;
  margin: auto;

  position: relative;
  width: 270px;
  height: 66px;
  left: 0;
  right: 0;

`;
