import { MutableRefObject, useCallback, useRef } from 'react';

type AbortControllerManagerHook = [
    MutableRefObject<AbortController[]>,
    () => Promise<void>
];

export const useAbortControllerManager = (): AbortControllerManagerHook => {
    const controllersRef = useRef<AbortController[]>([]);

    const abortAllRequests = useCallback(async () => {
        controllersRef.current.forEach((controller) => controller.abort());
    }, []);

    return [controllersRef, abortAllRequests];
};
