import ProductsList from 'components/productsList/ProductsList';
import css from './App.css';
// import Evidnova from './components/eVidnova/Evidnova';
// import AboutUs from './components/about/AboutUs';
import Footer from './components/footer/Footer';
import Galerry from './components/gallery/Galerry';
import Header from './components/header/Header';
import Main from './components/main/Main';
import PopularProduct from 'components/popularProduct/PopularProduct';
import VideoIntro from 'components/video/VideoIntro';
// import NawBar from 'components/NawBar/NawBar';

function App() {
  return (
    <div className="App">
      <Header />
      <div className={css.container}>
        <div className={css.wrapper}>
          <PopularProduct />
          <VideoIntro />
        </div>
        <ProductsList />
        <Galerry />
        <Main />
        {/* <Evidnova /> */}
        {/* <AboutUs /> */}
      </div>
      <Footer />
      {/* <NawBar /> */}
    </div>
  );
}

export default App;
