import * as React from 'react';
import ErrorBoundary from './ErrorBoundary';

export default function withErrorBoundary<Props>(Component: React.ComponentType<Props>) {
  return (props: Props) => {
    return (
      <ErrorBoundary>
        <Component {...props} />
      </ErrorBoundary>
    );
  };
}
