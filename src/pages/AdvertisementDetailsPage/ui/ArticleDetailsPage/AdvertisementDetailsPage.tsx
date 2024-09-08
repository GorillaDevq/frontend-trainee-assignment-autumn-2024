import { useParams } from 'react-router-dom';

const AdvertisementDetailsPage = () => {
    const { id } = useParams<{id: string}>();

    if (!id) {
        return (
            <div>
                ОБЪЯВЛЕНИЕ НЕ НАЙДЕНО
            </div>
        );
    }

    return (
        <div>
            ОБЪЯВЛЕНИЕ 1
        </div>
    );
};

export default AdvertisementDetailsPage;
