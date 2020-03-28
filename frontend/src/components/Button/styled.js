import styled from 'styled-components';

export const Button = styled.button`
  width: 100%;
  height: 60px;
  background: #e02041;
  border: 0;
  border-radius: 8px;
  color: #fff;
  font-weight: 700;
  margin-top: 16px;
  
  display: inline-block;
  text-align: center;
  text-decoration: none;

  font-size: 1.1rem;
  line-height: 3.5rem;

  transition: 150ms ease-in-out;

  &:hover {
    filter: brightness(90%);
  }
`;
