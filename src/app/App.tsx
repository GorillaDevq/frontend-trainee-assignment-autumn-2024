import { Suspense } from 'react';
import { AppRouter } from 'app/providers/router';

function App() {
    return (
        <Suspense fallback="LOADING....">
            <main className="content-page">
                <AppRouter />
            </main>
        </Suspense>
    );
}

export default App;
