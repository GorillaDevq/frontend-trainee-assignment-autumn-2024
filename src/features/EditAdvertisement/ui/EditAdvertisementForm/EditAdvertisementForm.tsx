import { useForm } from 'react-hook-form';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { getAdvertisementDetailsData } from 'entities/Advertisement/model/selectors/advertisementDetails';
import { useEffect } from 'react';
import { InputField } from 'shared/ui/InputField/InputField';
import { Button } from 'shared/ui/Button/Button';
import {
    editAdvertisementById,
} from 'features/EditAdvertisement/model/services/editAdvertisementByid/editAdvertisementByid';
import { advertisementDetailsActions } from 'entities/Advertisement';
import cls from './EditAdvertisementForm.module.scss';

type FormDataType = {
    imageUrl: string;
    name: string;
    description: string;
    price: number;
}

type EditAdvertisementFormProps = {
    className?: string;
    onClose: () => void;
}

export const EditAdvertisementForm = ({ className, onClose }:EditAdvertisementFormProps) => {
    const dispatch = useAppDispatch();
    const advertisement = useSelector(getAdvertisementDetailsData);

    const {
        register, handleSubmit, reset, formState: { errors },
    } = useForm<FormDataType>();
    const isLoading = false;

    useEffect(() => {
        if (advertisement) {
            reset({
                imageUrl: advertisement.imageUrl || '',
                name: advertisement.name || '',
                description: advertisement.description || '',
                price: advertisement.price || 0,
            });
        }
    }, [advertisement, reset]);

    const onSubmit = async (data: FormDataType) => {
        if (advertisement && advertisement.id) {
            const response = await dispatch(editAdvertisementById({ id: advertisement.id, ...data }));
            if (response.meta.requestStatus === 'fulfilled') {
                dispatch(advertisementDetailsActions.setNewDetails(response.meta.arg));
                onClose();
            }
        }
    };

    return (
        <form className={cls.form} onSubmit={handleSubmit(onSubmit)}>
            <InputField
                label="Ссылка на изображение"
                name="imageUrl"
                error={errors.imageUrl}
                register={register}
                validationOptions={{ required: 'Ссылка обязательна' }}
                placeholder="Введите ссылку на изображение"
            />
            <InputField
                label="Наименование"
                name="name"
                error={errors.name}
                register={register}
                validationOptions={{ required: 'Название обязательно' }}
                placeholder="Введите имя товара"
            />
            <InputField
                label="Описание"
                name="description"
                error={errors.description}
                register={register}
                validationOptions={{ required: 'Описание обязательно' }}
                placeholder="Введите описание товара"
            />
            <InputField
                label="Стоимость"
                type="number"
                name="price"
                error={errors.price}
                register={register}
                validationOptions={{
                    required: 'Стоимость обязательна',
                    valueAsNumber: true,
                    min: { value: 1, message: 'Стоимость не может быть меньше 1' },
                }}
                placeholder="Введите описание товара"
            />
            <Button type="submit" disabled={isLoading}>
                {isLoading ? 'Loading...' : 'Submit'}
            </Button>
        </form>
    );
};
