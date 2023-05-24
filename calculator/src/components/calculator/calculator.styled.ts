import styled from 'styled-components';

const S = {
  container: styled.section`
    display: flex;
    justify-content: center;
  `,
  leftContainer: styled.div`
    width: 70%;
    border-right: 1px solid ${({ theme }) => theme.text};
    padding-right: 10px;
  `,
  rightContainer: styled.div`
    width: 30%;
    padding-left: 10px;
  `,
};

export default S;
