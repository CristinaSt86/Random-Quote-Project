import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Main from '@/components/Main';
import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow flex justify-center items-center">
        <Main />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
