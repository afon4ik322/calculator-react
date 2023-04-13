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
  state: State = {
    hasError: false,
    error: null,
  };

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:1', error, errorInfo);
    this.setState({ hasError: true, error: error.message });
  }

  public render() {
    const clearError = () => {
      this.setState({ hasError: false, error: null });
    };

    if (this.state.hasError) {
      return (
        <S.container>
          <h3>{this.state.error}</h3>
          <S.button onClick={() => clearError()}>OK</S.button>
        </S.container>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
