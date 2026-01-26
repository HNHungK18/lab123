
import './App.css';
import OrchidContainer from './components/OrchidContainer';
import ThemeToggle from './components/ThemeToggle';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>List of Orchids</h1>
        <ThemeToggle />
      </header>
      <OrchidContainer/>
    </div>
  );
}

export default App;
