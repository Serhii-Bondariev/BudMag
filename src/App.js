import ProductsList from 'components/productsList/ProductsList';
import './App.css';
// import Evidnova from './components/eVidnova/Evidnova';
// import AboutUs from './components/about/AboutUs';
import Footer from './components/footer/Footer';
import Galerry from './components/gallery/Galerry';
import Header from './components/header/Header';
import Main from './components/main/Main';
import PopularProduct from 'components/popularProduct/PopularProduct';

function App() {
  return (
    <div className="App">
      <Header />
      <PopularProduct />
      <ProductsList />
      <Galerry />
      <Main />

      {/* <Evidnova /> */}

      {/* <AboutUs /> */}
      <Footer />
    </div>
  );
}

export default App;
