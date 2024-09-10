import { AdvertisementItem } from 'entities/Advertisement';

export const renderAdvertisementsListItem = (props: Advertisement) => (
    <li key={props.id}>
        <AdvertisementItem advertisement={props} />
    </li>
);
