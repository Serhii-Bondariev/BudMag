import { useState, useEffect } from 'react';
import ProductsList from 'components/productsList/ProductsList';
import css from './App.css';
import Evidnova from './components/eVidnova/Evidnova';
// import AboutUs from './components/about/AboutUs';
import Footer from './components/footer/Footer';
import Galerry from './components/gallery/Galerry';
import Header from './components/header/Header';
import Main from './components/main/Main';
import PopularProduct from 'components/popularProduct/PopularProduct';
// import VideoIntro from 'components/video/VideoIntro';
// import NawBar from 'components/NawBar/NawBar';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Симуляція завантаження
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <>
        <div className="loader">
          <div className="spinner"></div>
        </div>
        <style>{`
          .loader {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            // background-color: #b71d1d;
          }
          .spinner {
            width: 50px;
            height: 50px;
            border: 5px solid #e9de07;
            border-top: 5px solid #3498db;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </>
    );
  }

  return (
    <div className="App">
      <Header />
      <div className={css.container}>
        <div className={css.wrapper}>
          <PopularProduct />
          {/* <VideoIntro /> */}
        </div>
        <ProductsList />
        <Galerry />
        <Main />
        <Evidnova />
        {/* <AboutUs /> */}
      </div>
      <Footer />
      {/* <NawBar /> */}
    </div>
  );
}

export default App;
