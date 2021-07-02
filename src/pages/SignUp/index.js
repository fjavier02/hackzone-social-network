import React from 'react';
import img from '../../assets/imagen';
import {Container, Login, Logo, Word} from './styles';
import { FormSingup } from '../../components';

const SignUp =() =>{
  return(<>
    <Logo>
      <img src={img.LogoGroup} alt="Logo HackZone" />
    </Logo>
    <Container>
      <Word>
        <img src={img.World} alt="World Map"/>
      </Word>
      <Login>
        <FormSingup></FormSingup>
      </Login>
    </Container>

  </>)
}

export default SignUp;