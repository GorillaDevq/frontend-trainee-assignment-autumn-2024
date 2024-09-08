import { useParams } from 'react-router-dom';
import { AdvertisementDetails } from 'entities/Advertisement/ui/AdvertisementDetails/AdvertisementDetails';
import { useCallback, useState } from 'react';
import { Button } from 'shared/ui/Button/Button';
import { EditAdvertisementModal } from 'features/EditAdvertisement/ui/EditAdvertisementModal/EditAdvertisementModal';
import cls from './AdvertisementDetailsPage.module.scss';

const AdvertisementDetailsPage = () => {
    const { id } = useParams<{id: string}>();
    const [isOpenModal, setIsOpenModal] = useState(false);

    const onOpenModal = useCallback(() => {
        setIsOpenModal(true);
    }, []);

    const onCloseModal = useCallback(() => {
        setIsOpenModal(false);
    }, []);

    if (!id) {
        return (
            <div>
                ОБЪЯВЛЕНИЕ НЕ НАЙДЕНО
            </div>
        );
    }

    return (
        <section className={cls.page}>
            <Button className={cls.page__edit} onClick={onOpenModal}>Редактировать</Button>
            <AdvertisementDetails id={id} />
            <EditAdvertisementModal isOpen={isOpenModal} onClose={onCloseModal} />
        </section>
    );
};

export default AdvertisementDetailsPage;
