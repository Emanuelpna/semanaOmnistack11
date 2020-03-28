import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Backlink from '../../components/Backlink';

import * as S from './styled';

import logoImg from '../../assets/logo.svg';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');

  const history = useHistory();

  const register = async e => {
    e.preventDefault();

    const data = {
      name,
      email,
      whatsapp: whatsapp.replace(/\D/g, ''),
      city,
      uf
    };

    try {
      const response = await api.post('ongs', data);

      alert(`Seu ID de acesso: ${response.data.id}`);

      history.push("/")
    } catch (err) {
      alert('Erro: ' + err);
    }
  };

  return (
    <S.Container>
      <S.Content>
        <S.Display>
          <img src={logoImg} alt="Be the Hero" />
          <S.Title>Cadastro</S.Title>
          <S.Text>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem
            os casos da sua ONG.
          </S.Text>

          <Backlink to="/" isRegister>
            Já tenho cadastro
          </Backlink>
        </S.Display>

        <S.Form>
          <Input
            placeholder="Nome da ONG"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <Input
            placeholder="E-mail"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <Input
            placeholder="Whatsapp"
            value={whatsapp}
            onChange={({ target }) => {
              const { value } = target;

              const phoneNumber = value
                .replace(/\D/g, '')
                .replace(/(\d{2})(\d{1})(\d{4})(\d{4})/, '($1) $2 $3-$4');

              setWhatsapp(phoneNumber);
            }}
          />
          <S.InputGroup>
            <Input
              placeholder="Cidade"
              value={city}
              onChange={e => setCity(e.target.value)}
            />
            <Input
              placeholder="UF"
              value={uf}
              onChange={({ target }) => {
                const { value } = target;
                value.length <= 2 && setUf(value);
              }}
              style={{ width: 80 }}
            />
          </S.InputGroup>

          <Button onClick={register} type="submit">
            Cadastrar
          </Button>
        </S.Form>
      </S.Content>
    </S.Container>
  );
};

export default Register;
