import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import RequestRide from './pages/RequestRide';
import BecomeBuddy from './pages/BecomeBuddy';
import AboutUs from './pages/AboutUs';
import Donate from './pages/Donate';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import ReportIncident from './pages/ReportIncident';
import { ROUTES } from './utils/routes';

const App = () => {
  const [currentPage, setCurrentPage] = React.useState(ROUTES.HOME);

  // Scroll to top whenever page changes
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case ROUTES.HOME:
        return <Home setCurrentPage={setCurrentPage} />;
      case ROUTES.REQUEST_RIDE:
        return <RequestRide />;
      case ROUTES.BECOME_BUDDY:
        return <BecomeBuddy />;
      case ROUTES.ABOUT:
        return <AboutUs setCurrentPage={setCurrentPage} />;
      case ROUTES.DONATE:
        return <Donate />;
      case ROUTES.FAQ:
        return <FAQ setCurrentPage={setCurrentPage} />;
      case ROUTES.CONTACT:
        return <Contact />;
      case ROUTES.REPORT:
        return <ReportIncident />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main style={{ flex: 1 }}>
        {renderPage()}
      </main>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default App;