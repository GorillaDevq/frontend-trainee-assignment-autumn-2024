import React, {
    useCallback, useEffect, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Portal } from 'shared/ui/Portal/Portal';
import { PropsWithChildren } from 'shared/types/common';
import cls from './Modal.module.scss';

type ModalProps = {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
    lazy?: boolean;
} & PropsWithChildren

export const Modal = ({
    className,
    isOpen,
    onClose,
    children,
    lazy,
}: ModalProps) => {
    const [isMounted, setIsMounted] = useState(false);

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            onClose();
        }
    }, [onClose]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }

        return () => {
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
        }
    }, [isOpen]);

    if (lazy && !isMounted) {
        return null;
    }

    const mods: Record<string, boolean> = {
        [cls.modal_opened]: isOpen,
    };

    return (
        <Portal>
            <div className={classNames(cls.modal, mods, [className])}>
                <div className={cls.modal__overlay} onClick={onClose}>
                    <div className={cls.modal__container} onClick={onContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
