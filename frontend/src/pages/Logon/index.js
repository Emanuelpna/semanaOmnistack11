import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Backlink from '../../components/Backlink';

import * as S from './styled';

import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';
import api from '../../services/api';

const Logon = () => {
  const [id, setId] = useState('');

  const history = useHistory();

  const login = async e => {
    e.preventDefault();

    try {
      const response = await api.post('sessions', { id });

      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.name);

      history.push("/profile")
    } catch (err) {
      alert('Falha no login, tente novamente!');
    }
  };

  return (
    <S.LogonContainer>
      <S.LogonFormContainer>
        <img src={logoImg} alt="Be The Hero" />
        <S.LogonForm onSubmit={login}>
          <S.LogonTitle>Faça seu logon</S.LogonTitle>
          <Input
            placeholder="Sua ID"
            value={id}
            onChange={e => setId(e.target.value)}
          />
          <Button type="submit">Entrar</Button>
          <Backlink to="/register">Não tenho cadastro</Backlink>
        </S.LogonForm>
      </S.LogonFormContainer>
      <S.LogonImg src={heroesImg} alt="Heroes" />
    </S.LogonContainer>
  );
};

export default Logon;
