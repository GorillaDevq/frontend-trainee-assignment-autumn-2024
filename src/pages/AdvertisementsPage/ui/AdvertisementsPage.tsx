import { AdvertisementItem } from 'entities/Advertisement';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
    fetchAdvertisementsList,
} from '../model/services/fetchAdvertisementsList/fetchAdvertisementsList';
import { getAdvertisements } from '../model/slice/advertisementsPageSlice';

function AdvertisementsPage() {
    const dispatch = useAppDispatch();
    const advertisements = useSelector(getAdvertisements.selectAll);

    useEffect(() => {
        dispatch(fetchAdvertisementsList());
    }, [dispatch]);

    return (
        <div>
            {!!advertisements.length && advertisements.map((item) => (
                <AdvertisementItem advertisement={item} key={item.name} />
            ))}
        </div>
    );
}

export default AdvertisementsPage;
