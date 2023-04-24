import { Component, ErrorInfo, ReactNode } from 'react';

import S from './error-boundary.styled';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error: null | string;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
    this.setState({ hasError: true, error: error.message });
  }

  public render() {
    const clearError = () => {
      this.setState({ hasError: false, error: null });
    };

    if (this.state.hasError) {
      return (
        <S.container>
          <S.header>{this.state.error}</S.header>
          <S.header>Be careful and use the on-screen keyboard to avoid mistakes.</S.header>
          <S.button onClick={() => clearError()}>OK</S.button>
        </S.container>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
