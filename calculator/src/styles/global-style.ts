import { ThemeProps, createGlobalStyle, css } from 'styled-components';
import { ThemeType } from '@styles/theme';

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
`;
