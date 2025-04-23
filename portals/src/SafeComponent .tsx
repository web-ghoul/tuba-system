import React, { Component, ReactNode, ErrorInfo } from 'react';

interface SafeComponentProps {
  children: ReactNode;
}

interface SafeComponentState {
  hasError: boolean;
}

class SafeComponent extends Component<SafeComponentProps, SafeComponentState> {
  constructor(props: SafeComponentProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): SafeComponentState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by SafeComponent:', error, errorInfo);
    // You can add additional error logging here
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong. Please try again later.</div>;
    }

    return this.props.children;
  }
}

export default SafeComponent;
