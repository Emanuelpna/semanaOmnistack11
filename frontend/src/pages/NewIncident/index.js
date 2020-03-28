import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';

import * as S from './styled';

import logoImg from '../../assets/logo.svg';

import Input, { TextArea } from '../../components/Input';
import Button from '../../components/Button';
import Backlink from '../../components/Backlink';

const NewIncident = () => {
  const ongID = localStorage.getItem('ongId');

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const history = useHistory();

  const createNewIncident = async e => {
    e.preventDefault();

    try {
      await api.post(
        'incidents',
        {
          title,
          description,
          value: price
        },
        {
          headers: {
            Authorization: ongID
          }
        }
      );

      history.push('/profile');
    } catch (error) {
      alert('Não foi possível cadastras novo caso.');
    }
  };

  return (
    <S.Container>
      <S.Content>
        <S.Display>
          <img src={logoImg} alt="Be the Hero" />
          <S.Title>Cadastrar novo caso</S.Title>
          <S.Text>
            Descreva detalhadamente para encontrar um herói para resolver isso.
          </S.Text>

          <Backlink to="/profile" isRegister>
            Voltar para home
          </Backlink>
        </S.Display>

        <S.Form onSubmit={createNewIncident}>
          <Input
            placeholder="Título do caso"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <TextArea
            placeholder="Descrição"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <Input
            placeholder="Valor em reais"
            value={price}
            onChange={e => setPrice(e.target.value)}
          />

          <Button type="submit">Cadastrar</Button>
        </S.Form>
      </S.Content>
    </S.Container>
  );
};

export default NewIncident;
