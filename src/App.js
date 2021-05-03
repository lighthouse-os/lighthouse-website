import logo from './logo.svg';
import './App.css';
import Team from './components/Team';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <div className="app">
      <Home />
      <About />
      <Team />
    </div>
  );
}

export default App;
