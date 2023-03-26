import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Router from './routers/Router';

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <Router />
      </div>
      <Footer />
    </div>
  );
}

export default App;
