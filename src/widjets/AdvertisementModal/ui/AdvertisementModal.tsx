import { Modal } from 'shared/ui/Modal/Modal';
import { Suspense } from 'react';
import { Loader } from 'shared/ui/Loader/Loader';
import { AdvertisementForm, FormDataType } from './AdvertisementForm/AdvertisementForm';

type EditAdvertisementModalProps = {
    isOpen: boolean;
    onClose: () => void;
    mode: 'create' | 'edit';
    onSubmit: (data: FormDataType) => Promise<void>;
}

export const AdvertisementModal = ({
    isOpen,
    onClose,
    mode,
    onSubmit,
}:EditAdvertisementModalProps) => (
    <Modal
        isOpen={isOpen}
        onClose={onClose}
        lazy
    >
        <Suspense fallback={<Loader />}>
            <AdvertisementForm
                onSubmit={onSubmit}
                mode={mode}
            />
        </Suspense>
    </Modal>
);
