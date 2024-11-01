// import './App.css';
import { Layer } from './components/Layer/Layer';
import { About } from './components/About/About';
import { Games } from './components/Games/Games';
import { Hp } from './components/Hp/Hp';
import { Buy } from './components/Buy/Buy';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Layer />
      <About />
      <Games />
      <Hp />
      <Buy />
      <Footer />
    </div>
  );
}

export default App;
