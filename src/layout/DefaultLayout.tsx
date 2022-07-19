import AppHeader from './AppHeader';
import AppBreadcrumb from './AppBreadcrumb';
import AppContent from './AppContent';
import AppFooter from './AppFooter';

const DefaultLayout = () => {
  return (
    <div className="wrapper flex flex-column min-h-screen bg-gray-100">
      <AppHeader />
      <div className="body flex-grow-1">
        <div className="container-fluid">
          <div className="mb-2">
            <AppBreadcrumb />
          </div>
          <AppContent />
        </div>
      </div>
      <AppFooter />
    </div>
  );
};

export default DefaultLayout;
