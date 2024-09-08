import { Suspense } from 'react';
import { AppRouter } from 'app/providers/router';
import { Link } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

function App() {
    return (
        <div className="wrapper">
            <header className="header">
                <nav>
                    <Link to={RoutePath.orders}>
                        Заказы
                    </Link>
                    <Link to={RoutePath.advertisements}>
                        Объявления
                    </Link>
                </nav>
            </header>
            <Suspense fallback="LOADING....">
                <main className="content-page">
                    <AppRouter />
                </main>
            </Suspense>
            <footer className="footer">
                Подвал
            </footer>
        </div>
    );
}

export default App;
