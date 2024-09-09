import { Suspense } from 'react';
import { AppRouter } from 'app/providers/router';
import { Header } from 'widjets/Header';

function App() {
    return (
        <div className="wrapper">
            <Header />
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
