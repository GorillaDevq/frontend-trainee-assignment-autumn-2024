import { createPortal } from 'react-dom';
import { PropsWithChildren } from 'shared/types/common';

type PortalProps = {
    className?: string,
    element?: HTMLElement,
} & PropsWithChildren

export const Portal = (PortalProps: PortalProps) => {
    const { children, element = document.body } = PortalProps;

    return createPortal(children, element);
};
