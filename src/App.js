import './App.css';
import Team from './pages/Team';
import Home from './pages/Home';
import About from './pages/About';
import Downloads from './pages/Downloads';

function App() {
  return (
    <div className="app">
        <Home />
        <About />
        <Team />
        <Downloads />
    </div>
  );
}

export default App;
