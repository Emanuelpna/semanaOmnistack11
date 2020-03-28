import React from 'react';

import * as S from './styled';

const Backlink = ({ children, to, isRegister = false }) => (
  <S.Backlink to={to}>
    {isRegister && <S.BacklinkIconRegister />}
    {!isRegister && <S.BacklinkIconLogIn />}
    {children}
  </S.Backlink>
);

export default Backlink;
