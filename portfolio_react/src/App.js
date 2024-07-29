import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Introduction from './components/Introduction';
import About from './components/About';
import CodingProjects from './components/CodingProjects';
import ProductPortfolio from './components/ProductPortfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import PDFViewer from './components/PDFViewer';




//randpm shit
function App() {
  const pdfUrl = 'https://hhamzie.github.io/documents/MyResume1.pdf';

  return (
    <div className="App">
      <NavBar />
      <Introduction />
      <About />
      <ProductPortfolio />
      <CodingProjects />
       <Resume /> 
      <PDFViewer pdfUrl={pdfUrl} />
      <Contact/>
    </div>
  );
}


export default App;
