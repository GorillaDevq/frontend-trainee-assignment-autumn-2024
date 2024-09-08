import { Modal } from 'shared/ui/Modal/Modal';
import { EditAdvertisementForm } from '../EditAdvertisementForm/EditAdvertisementForm';

type EditAdvertisementModalProps = {
    isOpen: boolean;
    onClose: () => void;
}

export const EditAdvertisementModal = ({
    isOpen,
    onClose,
}:EditAdvertisementModalProps) => (
    <Modal
        isOpen={isOpen}
        onClose={onClose}
    >
        <EditAdvertisementForm onClose={onClose} />
    </Modal>
);
