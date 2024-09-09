import LogoIcon from 'shared/assets/images/logo.svg';
import { Link } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import cls from './Header.module.scss';

export const Header = () => (
    <header className={cls.header}>
        <LogoIcon className={cls.image} />
        <nav className={cls.nav}>
            <Link
                className={cls.link}
                to={RoutePath.orders}
            >
                Заказы
            </Link>
            <Link
                className={cls.link}
                to={RoutePath.advertisements}
            >
                Объявления
            </Link>
        </nav>
    </header>
);

export default Header;
