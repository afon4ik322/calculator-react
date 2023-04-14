import styled from 'styled-components';

const S = {
  container: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.gray[2]};
    padding: 30px;
    color: #fff;
    width: 80%;
    margin: 0 auto;
    border-radius: 10px;
  `,
  button: styled.button`
    padding: 5px 20px;
    &:hover {
      cursor: pointer;
    }
  `,
};

export default S;
