import {
    ErrorInfo,
    Component,
    Suspense,
} from 'react';
import { ErrorPage } from 'pages/ErrorPage';
import { Loader } from 'shared/ui/Loader/Loader';
import { PropsWithChildren } from 'shared/types/common';

type ErrorBoundaryProps = PropsWithChildren

type ErrorBoundaryState = {
    hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error) {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    }

    render() {
        const { hasError } = this.state;
        const { children } = this.props;
        if (hasError) {
            return (
                <Suspense fallback={<Loader />}>
                    <ErrorPage />
                </Suspense>
            );
        }

        return children;
    }
}

export default ErrorBoundary;
