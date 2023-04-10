import { FC } from "react";
import { Outlet } from "react-router-dom";
import Header from "../header/header";
import S from "./layout.styled";

const Layout: FC = () => {
  return (
    <>
      <Header />
      <S.container>
        <Outlet />
      </S.container>
    </>
  );
};

export default Layout;
