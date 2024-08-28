import './App.css';
import Evidnova from './components/eVidnova/Evidnova';
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
      <Evidnova />

      {/* <AboutUs /> */}
      <Footer />
    </div>
  );
}

export default App;
