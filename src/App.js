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
    <footer>
		<span>© 2024 Skye Contractor Inc. All rights reserved.&nbsp;</span>
		<span>
			Created by
			<a href="https://github.com/junlee0325/sangkyu-kim" target="_blank">
				Jun Kyung Lee
			</a>
		</span>
	</footer>
    </div>
  );
}

export default App;
