import * as React from 'react';
import { ErrorInfo } from 'react';
import styled from 'styled-components';

const FeilStyle = styled.div`
  border: 0.3rem red solid;
  padding: 1rem;
`;

interface Props {
  boundaryName?: string;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true, error, errorInfo });
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <FeilStyle>Det skjedde en feil, se consolen for mer info.</FeilStyle>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
