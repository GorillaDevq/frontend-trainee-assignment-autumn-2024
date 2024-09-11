import LogoIcon from 'shared/assets/images/logo.svg';
import { Link } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import cls from './Header.module.scss';

export const Header = () => (
    <header className={cls.header}>
        <nav className={cls.header__nav}>
            <Link
                className={cls.header__link}
                to={RoutePath.advertisements}
            >
                <LogoIcon />
            </Link>
            <Link
                className={cls.header__link}
                to={RoutePath.orders}
            >
                Заказы
            </Link>
            <Link
                className={cls.header__link}
                to={RoutePath.advertisements}
            >
                Объявления
            </Link>
        </nav>
    </header>
);

export default Header;
