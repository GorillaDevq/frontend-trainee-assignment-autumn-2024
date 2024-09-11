import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
    AdvertisementDetails,
    advertisementDetailsActions,
    getAdvertisementDetailsData,
} from 'entities/Advertisement';
import { useState } from 'react';
import { Button } from 'shared/ui/Button/Button';
import { AdvertisementModal, FormDataType } from 'widjets/AdvertisementModal';
import { editAdvertisementById } from 'features/EditAdvertisement';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import cls from './AdvertisementDetailsPage.module.scss';

const AdvertisementDetailsPage = () => {
    const { id } = useParams<{id: string}>();
    const [isOpenModal, setIsOpenModal] = useState(false);

    const dispatch = useAppDispatch();
    const advertisement = useSelector(getAdvertisementDetailsData);

    const onOpenModal = () => {
        setIsOpenModal(true);
    };

    const onCloseModal = () => {
        setIsOpenModal(false);
    };

    const onSubmitForm = async (data: FormDataType) => {
        if (advertisement && advertisement.id) {
            const response = await dispatch(editAdvertisementById({ id: advertisement.id, ...data }));
            if (response.meta.requestStatus === 'fulfilled') {
                dispatch(advertisementDetailsActions.setNewDetails(response.meta.arg));
                onCloseModal();
            }
        }
    };

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
            <AdvertisementDetails
                id={id}
            />
            {isOpenModal && (
                <AdvertisementModal
                    isOpen={isOpenModal}
                    onClose={onCloseModal}
                    onSubmit={onSubmitForm}
                    mode="edit"
                />
            )}
        </section>
    );
};

export default AdvertisementDetailsPage;
