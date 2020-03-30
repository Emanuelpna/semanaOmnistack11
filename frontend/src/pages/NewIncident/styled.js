import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Content = styled.div`
  width: 100%;
  padding: 96px;
  background: #f0f0f5;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Display = styled.section`
  width: 100%;
  max-width: 380px;
`;

export const Logo = styled.img``;

export const Title = styled.h1`
  margin: 4rem 0 2rem;
  font-size: 2rem;
  color: #3c3c48;
`;

export const Text = styled.p`
  font-size: 1.1rem;
  color: #737380;
  line-height: 32px;
`;

export const Form = styled.form`
  width: 100%;
  max-width: 450px;

  & input, textarea {
    margin-top: 12px;
  }
`;
