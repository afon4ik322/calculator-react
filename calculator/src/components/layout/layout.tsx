import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@components/header/header';

import S from './layout.styled';

const Layout: FC = () => (
  <>
    <Header />
    <S.container>
      <Outlet />
    </S.container>
  </>
);

export default Layout;
