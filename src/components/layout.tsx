import { ReactNode } from 'react';
import Footer from './footer';
import Navbar from './navbar';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col justify-between bg-neutral-50 text-neutral-900">
      <div>
        <Navbar />
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
