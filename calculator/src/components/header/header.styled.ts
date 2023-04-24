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
  `,
  title: styled.h1`
    font-size: 24px;
  `,
  linksList: styled.ul`
    list-style: none;
    display: flex;
    gap: 24px;
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
