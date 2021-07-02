import React from 'react';
import { Title1, Title2, FormSingin } from '../../components';
import {Container, Text, Login, Logo} from './styles'
import img from '../../assets/imagen'

const SignIn =() =>{
  return(<>
    <Logo>
      <img src={img.LogoGroup} alt="Logo HackZone" />
    </Logo>
    <Container>
      <Text>
        <Title1>A rede dos programadores</Title1>
        <Title2>Venha compartilhar conhecimento, código e café</Title2>
      </Text>
      <Login>
        <FormSingin></FormSingin>
      </Login>
    </Container>
    

  </>)
}

export default SignIn;