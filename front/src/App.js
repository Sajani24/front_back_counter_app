import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Sajani's Lab in Data Engineering II
        </p>
        <div>You accessed to this page <p id="page-count"></p> times</div>
      </header>
    </div>
  );
}

export default App;
