import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { LogInOutline } from '@styled-icons/evaicons-outline/LogInOutline';
import { ArrowLeft } from '@styled-icons/feather/ArrowLeft';

export const Backlink = styled(Link)`
  display: flex;
  align-items: center;
  margin-top: 40px;
  color: #41414d;
  font-size: 1.1rem;
  text-decoration: none;
  font-weight: 500;
  transition: 150ms ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`;

export const BacklinkIconRegister = styled(ArrowLeft)`
  margin-right: 8px;
  width: 16px;
  stroke: #e02041;
`;

export const BacklinkIconLogIn = styled(LogInOutline)`
  margin-right: 8px;
  width: 16px;
  fill: #e02041;
`;
