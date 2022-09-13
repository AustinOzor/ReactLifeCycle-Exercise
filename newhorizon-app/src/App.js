import './App.css';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import Plan from './components/Plan';
function App() {
  return (
    <div >
      <Navbar/>
      <Carousel />
      <Plan/>
      <Footer/>
    </div>
  );
}

export default App;
