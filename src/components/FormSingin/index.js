import React from 'react';
import { Link } from 'react-router-dom';
import { LayoutForm, ButtonEntrar,EquecioSenha, Line } from './styles';
import { Text1, Text2, Text3, Button, Default, Minorbutton } from '../index'

const FormSingin = () => {
  return (
    <LayoutForm>
        <Default type="text" placeholder="Email">
            
        </Default>
        <Default type="password" placeholder="Senha">
            
        </Default>
        <Link to="/dashboard">
          <ButtonEntrar>
            <Button>Entrar</Button>
          </ButtonEntrar>
        </Link>
        <Link>
          <Text3><EquecioSenha>Esqueceu sua senha?</EquecioSenha></Text3>
        </Link>
        <Line>
        </Line>
        <Link to="/singup" >
          <Minorbutton>Criar Conta</Minorbutton>
        </Link>
    </LayoutForm>
  );
}

export default FormSingin;