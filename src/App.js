// import logo from './logo.svg';
import './App.css';
import NavBar from './Nav';
import {Routes, Route} from 'react-router-dom'
import Footer from './Footer';
import InvoiceCalculator from './InvoiceCalculator';
// import './style.css';


function App() {
  return (
    <div className="App">
      <NavBar />
      <InvoiceCalculator />
  <h1>this is a test</h1>

  <Footer />
    </div>
  );
}

export default App;
