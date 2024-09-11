import { Suspense } from 'react';
import { AppRouter } from 'app/providers/router';
import { Header } from 'widjets/Header';
import { Loader } from 'shared/ui/Loader/Loader';

function App() {
    return (
        <div className="wrapper">
            <Header />
            <Suspense fallback={<Loader />}>
                <main className="content-page">
                    <AppRouter />
                </main>
            </Suspense>
        </div>
    );
}

export default App;
