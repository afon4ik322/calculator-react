import { styles } from '@styles/global-style';
import styled from 'styled-components';

const S = {
  container: styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 300px;
    @media screen and (max-width: 420px) {
      width: 200px;
    }
  `,
  button: styled.button`
    ${styles.button};
    height: 40px;
  `,
  select: styled.select`
    font-size: 16px;
    height: 25px;
    color: ${({ theme }) => theme.text};
    background-color: transparent;
  `,
  label: styled.label``,
  option: styled.option``,
};

export default S;
