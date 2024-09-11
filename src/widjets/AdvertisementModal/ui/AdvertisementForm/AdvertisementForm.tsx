import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { InputField } from 'shared/ui/InputField/InputField';
import { Button } from 'shared/ui/Button/Button';
import { getFormIsLoading } from 'entities/Form';
import { getAdvertisementDetailsData } from 'entities/Advertisement';
import { getFormError } from 'entities/Form/model/selectors/form';
import cls from './AdvertisementForm.module.scss';

export type FormDataType = {
    imageUrl: string;
    name: string;
    description: string;
    price: number;
}

type EditAdvertisementFormProps = {
    mode: 'create' | 'edit';
    onSubmit: (data: FormDataType) => Promise<void>;
}

export const AdvertisementForm = ({
    mode,
    onSubmit,
}:EditAdvertisementFormProps) => {
    const isLoading = useSelector(getFormIsLoading);
    const fetchError = useSelector(getFormError);
    const advertisement = useSelector(getAdvertisementDetailsData);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormDataType>();

    useEffect(() => {
        if (mode === 'edit' && advertisement) {
            reset({
                imageUrl: advertisement.imageUrl || '',
                name: advertisement.name || '',
                description: advertisement.description || '',
                price: advertisement.price || 0,
            });
        }
    }, [mode, advertisement, reset]);

    return (
        <form className={cls.form} onSubmit={handleSubmit(onSubmit)}>
            <InputField
                label="Ссылка на изображение"
                name="imageUrl"
                error={errors.imageUrl}
                register={register}
                validationOptions={{
                    required: 'Ссылка обязательна',
                    pattern: {
                        value: /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|svg))/i,
                        message: 'Введите корректную ссылку',
                    },
                }}
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
            <Button
                className={cls.form__button}
                type="submit"
                disabled={isLoading}
            >
                {isLoading ? 'Загрузка...' : 'Отправить'}
            </Button>
            {!!fetchError && (
                <span className={cls.form__error}>{fetchError}</span>
            )}
        </form>
    );
};
