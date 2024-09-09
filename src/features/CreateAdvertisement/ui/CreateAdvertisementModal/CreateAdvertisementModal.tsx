import { Modal } from 'shared/ui/Modal/Modal';
import { CreateAdvertisementForm } from '../CreateAdvertisementForm/CreateAdvertisementForm';

type EditAdvertisementModalProps = {
    isOpen: boolean;
    onClose: () => void;
}

export const CreateAdvertisementModal = ({
    isOpen,
    onClose,
}:EditAdvertisementModalProps) => (
    <Modal
        isOpen={isOpen}
        onClose={onClose}
    >
        <CreateAdvertisementForm onClose={onClose} />
    </Modal>
);
