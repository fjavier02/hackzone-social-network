import React from 'react';
import { Link } from 'react-router-dom';
import { LayoutForm, ButtonEntrar,EquecioSenha } from './styles';
import { Text3, Button, Default,} from '../index'

const FormSingup = () => {
  return (
    <LayoutForm>
        <Default type="text" placeholder="Nome">
        </Default>
        <Default type="email" placeholder="Email">
        </Default>
        <Default type="password" placeholder="Senha">
        </Default>
        <Default type="password" placeholder="Confirmar Senha">
        </Default>

        <Link to="/dashboard">
          <ButtonEntrar>
            <Button>Cadastrar</Button>
          </ButtonEntrar>
        </Link>
        <Link>
          <Text3><EquecioSenha>Já tenho conta. Entrar </EquecioSenha></Text3>
        </Link>
    </LayoutForm>
  );
}

export default FormSingup;