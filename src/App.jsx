import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Legal from './components/Legal/Legal';
import Privacy from './components/Privacy/Privacy';
import Terms from './components/Terms/Terms';
import Support from './components/Support/Support';
import DeleteAccount from './components/DeleteAccount/DeleteAccount';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/support" element={<Support />} />
          <Route path="/delete-account" element={<DeleteAccount />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;