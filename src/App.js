import './SASS/App.scss';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Container from './components/Container';
// import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Hero />
      <Navbar />
      <Container />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
