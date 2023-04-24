import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const S = {
  container: styled.header`
    height: 80px;
    background-color: gray;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 40px 0 40px;
    color: white;
    @media screen and (max-width: 560px) {
      justify-content: center;
      padding: 0 20px 0 20px;
      height: 60px;
    }
  `,
  title: styled.h1`
    font-size: 24px;
    @media screen and (max-width: 768px) {
      font-size: 16px;
    }
    @media screen and (max-width: 560px) {
      display: none;
    }
  `,
  linksList: styled.ul`
    list-style: none;
    display: flex;
    gap: 24px;
    @media screen and (max-width: 560px) {
      padding: 0px;
      gap: 12px;
    }
  `,
  link: styled(NavLink)`
    cursor: pointer;
    color: #fff;
    text-decoration: none;
    &:hover,
    &.active {
      text-decoration: underline;
    }
  `,
};

export default S;
