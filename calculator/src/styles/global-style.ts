import { ThemeType } from '@styles/theme';
import { createGlobalStyle, css, ThemeProps } from 'styled-components';

export const styles = {
  button: css`
    cursor: pointer;
    outline: none;
    border: 1px solid ${({ theme }) => theme.text};
    border-radius: 5px;
    background-color: ${({ theme }) => theme.gray[2]};
    color: ${({ theme }) => theme.text};
    &:hover {
      background-color: ${({ theme }) => theme.gray[1]};
    }
    &:active {
      background-color: ${({ theme }) => theme.gray[0]};
    }
    &:focus {
      background-color: ${({ theme }) => theme.blue};
    }
    &:disabled {
      border: 1px solid ${({ theme }) => theme.gray[1]};
      background-color: ${({ theme }) => theme.gray[0]};
      color: ${({ theme }) => theme.gray[1]};
      cursor: default;
    }
    @media screen and (max-width: 768px) {
      font-size: 12px;
    }
  `,
};

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${({ theme }: ThemeProps<ThemeType>) => theme.text};
    background: ${({ theme }) => theme.background};
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
  }
  main {
    margin-top: 60px;
  }
  @media screen and (max-width:768px){
    body {
      font-size: 0.9rem;
    }
  }
  @media screen and (max-width:640px){
    body {
      font-size: 0.8rem;
    }
  }
`;
