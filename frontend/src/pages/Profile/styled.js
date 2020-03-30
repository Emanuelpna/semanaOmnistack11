import styled from 'styled-components';
import { Power } from '@styled-icons/feather/Power';
import { Trash2 } from '@styled-icons/feather/Trash2';

export const Container = styled.div`
  width: 100%;
  max-width: 1180px;
  padding: 0 30px;
  margin: 32px auto;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;

  & a {
    width: 260px;
    margin-left: auto;
  }

  & a button {
    margin-top: 0;
  }
`;

export const Welcome = styled.span`
  font-size: 20px;
  margin-left: 24px;
`;

export const Logo = styled.img`
  height: 64px;
`;

export const Title = styled.h1`
  margin-top: 80px;
  margin-bottom: 24px;
  color: #3c3c48;
`;

export const IncidentList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 24px;
  list-style: none;
`;

export const Incident = styled.li`
  position: relative;
  padding: 24px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 6px #69696d26;

  & strong {
    display: block;
    margin-bottom: 16px;
    color: #18181b;
    font-size: 1.2rem;
  }

  & span {
    display: block;
    margin-top: 32px;
    font-size: 1.4rem;
    color: #e02041;
    font-weight: bold;
  }

  & p {
    max-width: 45ch;
    color: #737380;
    margin-top: 12px;
    line-height: 1.4rem;
    font-size: 1rem;
    font-weight: 400;
  }
`;

export const PowerButton = styled.button`
  height: 60px;
  width: 60px;
  border-radius: 4px;
  border: 1px solid #dcdce6;
  background: transparent;
  margin-left: 16px;
  transition: 150ms ease-in-out;

  &:hover {
    border-color: #999;
  }
`;

export const PowerButtonIcon = styled(Power)`
  width: 18px;
  stroke: #e02041;
`;

export const TrashButton = styled.button`
  position: absolute;
  right: 24px;
  top: 24px;
  padding: 16px;
  border-radius: 4px;
  border: 0;
  background: transparent;
  transition: 150ms ease-in-out;

  &:hover {
    background: #d4d4de87;
    opacity: 0.8;
  }
`;

export const TrashButtonIcon = styled(Trash2)`
  width: 18px;
`;
