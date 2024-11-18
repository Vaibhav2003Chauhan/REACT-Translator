import React from 'react';
import Header from './Header';
import TextArea from './TextArea';
import Footer from './Footer';

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex flex-1 flex-col">
        <TextArea />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
