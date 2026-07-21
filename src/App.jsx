import { useState, useEffect, lazy, Suspense } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Loader from './components/Loader/Loader';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import { useTheme } from './hooks/useTheme';

const Home = lazy(() => import('./pages/Home'));

function App() {
  const [loading, setLoading] = useState(true);
  const { theme } = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <Loader key="loader" />
      ) : (
        <div className="app" key="app">
          <Navbar />
          <main>
            <Suspense fallback={<Loader key="loader-suspense" />}>
              <Home />
            </Suspense>
          </main>
          <Footer />
          <ScrollToTop />
        </div>
      )}
    </AnimatePresence>
  );
}

export default App;
