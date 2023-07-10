import 'bootstrap/dist/css/bootstrap.min.css';
import Headers from './Components/Headers/Headers';
import './App.css';
import Carousels from './Components/Carousels/Carousels';
import Abouts from './Components/Abouts/Abouts';

function App() {
  return (
    <div className="App">
      <header id='header'>
        <Headers />
      </header>
      <main>
        <Carousels />
        <Abouts/>
      </main>
    </div>
  );
}

export default App;
