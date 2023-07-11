import 'bootstrap/dist/css/bootstrap.min.css';
import Headers from './Components/Headers/Headers';
import './App.css';
import Carousels from './Components/Carousels/Carousels';
import Abouts from './Components/Abouts/Abouts';
import Services from './Components/Services/Services';
import Works from './Components/Works/Works';
import Teams from './Components/Teams/Teams';
import Testimonials from './Components/Testimonials/Testimonials';
import Pricing from './Components/Pricing/Pricing';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';

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
        <Testimonials/>
        <Pricing/>
        <Blog/>
        <Contact/>
      </main>
    </div>
  );
}

export default App;
