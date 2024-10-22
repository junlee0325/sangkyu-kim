import './App.css';
import { Navbar } from "./components/Navbar"
import { Home } from "./components/Home"
import { Services } from "./components/Services"
import { Gallery } from "./components/Gallery"
import { Contact } from "./components/Contact"



function App() {
  return (
    <div id="App">
      <Navbar />
      <div id="body">
        <Home />
        <Services />
        <Gallery />
        <Contact />
      </div>
    </div>
  );
}

export default App;
