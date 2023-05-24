import styled from 'styled-components';

const S = {
  container: styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 10px;
    font-size: 24px;
    height: 30px;
  `,
  calculatorInput: styled.input`
    font-size: 24px;
    border: 0;
    width: 100%;
    color: ${({ theme }) => theme.text};
    background-color: transparent;
    &:focus {
      outline: none;
    }
    &:disabled {
      background-color: transparent;
      color: ${({ theme }) => theme.text};
    }
  `,
  result: styled.div``,
};

export default S;
