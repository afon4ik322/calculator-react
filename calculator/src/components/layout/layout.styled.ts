import styled from 'styled-components';

const S = {
  container: styled.main`
    padding: 40px;
    max-width: 900px;
    margin: 0 auto;
    @media screen and (max-width: 420px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  `,
};

export default S;
