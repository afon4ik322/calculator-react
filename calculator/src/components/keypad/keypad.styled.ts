import styled from 'styled-components';

const S = {
  container: styled.div`
    border-top: 1px solid black;
    padding-top: 10px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    /* grid-template-columns: repeat(5, minmax(40px, 80px)); */
    grid-auto-rows: 40px;
    grid-auto-columns: minmax(40px, 80px);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
  `,
};

export default S;
