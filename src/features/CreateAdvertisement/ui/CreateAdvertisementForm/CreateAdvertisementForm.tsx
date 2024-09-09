import { useForm } from 'react-hook-form';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { InputField } from 'shared/ui/InputField/InputField';
import { Button } from 'shared/ui/Button/Button';
import {
    createAdvertisementByid,
} from 'features/CreateAdvertisement/model/services/createAdvertisementByid/createAdvertisementByid';
import cls from './CreateAdvertisementForm.module.scss';

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

export const CreateAdvertisementForm = ({ className, onClose }:EditAdvertisementFormProps) => {
    const dispatch = useAppDispatch();

    const {
        register, handleSubmit, formState: { errors },
    } = useForm<FormDataType>();
    const isLoading = false;

    const onSubmit = async (data: FormDataType) => {
        const response = await dispatch(createAdvertisementByid(data));
        if (response.meta.requestStatus === 'fulfilled') onClose();
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
