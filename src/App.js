import './App.css';
// import AboutUs from './components/about/AboutUs';
import Footer from './components/footer/Footer';
import Galerry from './components/gallery/Galerry';
import Header from './components/header/Header';
import Main from './components/main/Main';

function App() {
  return (
    <div className="App">
      <Header />

      <Main />
      <Galerry />
      {/* <AboutUs /> */}
      <Footer />
    </div>
  );
}

export default App;
