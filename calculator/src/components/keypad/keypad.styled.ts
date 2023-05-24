import styled from 'styled-components';

const S = {
  container: styled.div`
    border-top: 1px solid ${({ theme }) => theme.text};
    padding-top: 10px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-auto-rows: 40px;
    grid-auto-columns: minmax(40px, 80px);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
  `,
};

export default S;
