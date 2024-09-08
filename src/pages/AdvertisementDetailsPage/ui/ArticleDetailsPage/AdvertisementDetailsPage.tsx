import { useParams } from 'react-router-dom';
import { AdvertisementDetails } from 'entities/Advertisement/ui/AdvertisementDetails/AdvertisementDetails';

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
            <AdvertisementDetails id={id} />
        </div>
    );
};

export default AdvertisementDetailsPage;
