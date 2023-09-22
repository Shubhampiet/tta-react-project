import './App.css';
import Main from './component/Main';
import Footer from './component/Footer';
import Header from './component/Header';

import "./assets/css/common.css"

function App() {
  return (
    <div className="wrapper-class">
      {/* header Component */}
      <header className='header-class'>
        <Header />
      </header>
      {/* main component */}
      <div className="main-class">
        <Main />
      </div>
      {/* footer component */}
      <footer className="footer-class">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
