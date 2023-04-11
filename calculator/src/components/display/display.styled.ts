import styled from 'styled-components';

const S = {
  container: styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 10px;
    font-size: 24px;
  `,
  calculatorInput: styled.input`
    font-size: 24px;
    border: 0;
    width: 100%;
    &:focus {
      outline: none;
    }
    &:disabled {
      background-color: transparent;
      color: black;
    }
  `,
};

export default S;
