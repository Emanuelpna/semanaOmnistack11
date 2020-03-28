import React from 'react';

import * as S from './styled';

const Button = ({ children, ...args }) => (
  <S.Button {...args}>{children}</S.Button>
);

export default Button;
