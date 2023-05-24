import { styles } from '@styles/global-style';
import styled from 'styled-components';

const S = {
  headerContainer: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  header: styled.h4`
    margin: 0;
    font-size: 24px;
    margin-right: 10px;
    @media screen and (max-width: 768px) {
      font-size: 16px;
    }
    @media screen and (max-width: 560px) {
      font-size: 12px;
    }
  `,
  list: styled.ul`
    list-style: none;
    padding: 0;
    margin-bottom: 0px;
  `,
  button: styled.button`
    ${styles.button};
    padding: 5px;
    @media screen and (max-width: 560px) {
      font-size: 8px;
    }
  `,
};

export default S;
