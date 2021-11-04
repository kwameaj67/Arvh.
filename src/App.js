import React, { Suspense } from 'react';
import './App.css';

const Navbar = React.lazy(() => import('./components/Navbar/navbar'))
const Section = React.lazy(() => import('./components/Sections/section'))
const Footer = React.lazy(() => import('./components/Footer/footer'))
// import Navbar from './components/Navbar/navbar';
// import Section from './components/Sections/section'
// import Footer from './components/Footer/footer'

function App() {
  return (
    <div className="App">
      <Suspense fallback={
        <div className="loader">
              <h1>Arvh.</h1>
        </div>
      }>
        <Navbar />
        <Section />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
