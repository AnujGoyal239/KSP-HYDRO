import { Outlet } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';
import Footer from './Footer';
import Header from './Header';
import useSmoothScroll from '@/hooks/useSmoothScroll';
import useScrollToTop from '@/hooks/useScrollToTop';
import { ToastProvider } from '@/context/ToastContext';
import Toaster from '@/components/common/Toaster';

function MainLayout() {
  // Apply smooth scrolling globally
  useSmoothScroll();

  // Scroll to top functionality
  const { isVisible, scrollToTop } = useScrollToTop();

  return (
    <ToastProvider>
      <div className="flex flex-col min-h-screen relative">
        <Header />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />

        <Toaster />

        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 z-40 p-3 bg-blue-600 text-white rounded-full shadow-lg transition-all duration-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
            }`}
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      </div>
    </ToastProvider>
  );
}

export default MainLayout;
