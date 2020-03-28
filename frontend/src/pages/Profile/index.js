import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import * as S from './styled';

import logoImg from '../../assets/logo.svg';
import Button from '../../components/Button';
import api from '../../services/api';

const Profile = () => {
  const ongName = localStorage.getItem('ongName');

  const [incidents, setIncidents] = useState([]);

  const history = useHistory();

  useEffect(() => {
    const ongID = localStorage.getItem('ongId');

    console.log('ongID :', ongID);
    if(!ongID) {
      alert("Faça logon para continuar acessando.")
      history.push("/");
    }

    (async () => {
      const response = await api.get('/profile', {
        headers: { Authorization: ongID }
      });

      console.log('response.data :', response.data[0]);

      setIncidents(response.data);
    })();
  }, [history]);

  const formatPrice = price => {
    return price.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      style: 'currency',
      currency: 'BRL'
    });
  };

  const deleteIncident = async (id, ongID) => {
    try {
      const response = await api.delete(`/incidents/${id}`, {
        headers: { Authorization: ongID }
      });

      console.log('response :', response);

      setIncidents(incidents.filter(incident => incident.id !== id));
    } catch (error) {
      alert('Erro ao deletar caso, tente novamente.');
    }
  };

  const logout = () => {
    localStorage.removeItem('ongId');
    localStorage.removeItem('ongName');

    history.push('/');
  };

  return (
    <S.Container>
      <S.Header>
        <S.Logo src={logoImg} alt="Be the Hero" />
        <S.Welcome>Bem vinda, {ongName}</S.Welcome>

        <Link to="/incidents/new">
          <Button>Cadastrar novo caso</Button>
        </Link>
        <S.PowerButton onClick={logout}>
          <S.PowerButtonIcon />
        </S.PowerButton>
      </S.Header>

      <S.Title>Casos Registrados</S.Title>

      <S.IncidentList>
        {incidents.map(({ id, title, description, value, ong_id }) => (
          <S.Incident key={id}>
            <strong>Caso:</strong>
            <p>{title}</p>

            <strong>Descrição:</strong>
            <p>{description}</p>

            <strong>Valor:</strong>
            <p>{formatPrice(value)}</p>

            <S.TrashButton onClick={() => deleteIncident(id, ong_id)}>
              <S.TrashButtonIcon />
            </S.TrashButton>
          </S.Incident>
        ))}
      </S.IncidentList>
    </S.Container>
  );
};

export default Profile;
