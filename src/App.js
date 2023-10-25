import React from 'react';
import Navbar from './components/navbar';
import LandingPage from './components/LandingPage';
import Footer from './components/footer';

const appStyle = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
};


function App() {
  return (
    <div style={appStyle}>
      <Navbar />
      <LandingPage  style={{ flex: 1 }} />
      <Footer />
    </div>
  );
}

export default App;
