import { Modal } from 'shared/ui/Modal/Modal';
import { OrderDetails } from 'entities/Order';
import cls from './OrderDetailsModal.module.scss';

type OrderDetailsModalProps = {
    isOpen: boolean;
    onClose: () => void;
    orderItems?: OrderItem[];
}

export const OrderDetailsModal = ({
    isOpen,
    onClose,
    orderItems,
}:OrderDetailsModalProps) => (
    <Modal
        className={cls.modal}
        isOpen={isOpen}
        onClose={onClose}
    >
        <div className={cls.modal__container}>
            {!!orderItems?.length && orderItems.map((item) => (
                <OrderDetails orderItem={item} key={item.id} />
            ))}
        </div>
    </Modal>
);
