import React, { Component, ReactNode, ErrorInfo } from 'react';
interface SafeComponentProps {
    children: ReactNode;
}
interface SafeComponentState {
    hasError: boolean;
}
declare class SafeComponent extends Component<SafeComponentProps, SafeComponentState> {
    constructor(props: SafeComponentProps);
    static getDerivedStateFromError(_: Error): SafeComponentState;
    componentDidCatch(error: Error, errorInfo: ErrorInfo): void;
    render(): string | number | bigint | boolean | import("react/jsx-runtime").JSX.Element | Iterable<React.ReactNode> | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined;
}
export default SafeComponent;
