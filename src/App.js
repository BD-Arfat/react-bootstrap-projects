import 'bootstrap/dist/css/bootstrap.min.css';
import Headers from './Components/Headers/Headers';
import './App.css';
import Carousels from './Components/Carousels/Carousels';
import Abouts from './Components/Abouts/Abouts';
import Services from './Components/Services/Services';
import Works from './Components/Works/Works';
import Teams from './Components/Teams/Teams';

function App() {
  return (
    <div className="App">
      <header id='header'>
        <Headers />
      </header>
      <main>
        <Carousels />
        <Abouts/>
        <Services/>
        <Works/>
        <Teams/>
      </main>
    </div>
  );
}

export default App;
