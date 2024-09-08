import { BugButton } from 'app/providers/ErrorBoundary/ui/BugButton';
import { AdvertisementItem } from 'entities/Advertisement';

function AdvertisementsPage() {
    return (
        <div>
            <BugButton />
            AdvertisementsPage
            <AdvertisementItem advertisement={
                {
                    id: '123',
                    name: 'Name',
                    description: 'string',
                    price: 9000,
                    createdAt: 'string',
                    views: 20,
                    likes: 9,
                    // eslint-disable-next-line max-len
                    imageUrl: 'https://sun9-65.userapi.com/impg/otNK__sKAUa0SSNAkiGN9OBdEb2SK-DatZPlLw/nwkztt7dVtk.jpg?size=460x460&quality=96&sign=825e093f90336b1626b5a6dc22133658&type=album',
                }
            }
            />
        </div>
    );
}

export default AdvertisementsPage;
