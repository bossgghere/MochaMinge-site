import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="w-full min-h-screen bg-black text-white">
      <Header />
      <main className="w-full">
        <Hero />
      </main>
      <Footer />
    </div>
  );
}

export default App;
