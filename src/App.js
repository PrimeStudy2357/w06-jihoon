import logo from './logo.svg';
import './App.css';

function App() {
  const a = 1;

  const b = a + 1;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello <br /> World!
          <br />
          {b}
          asdjfklasdjasdfjklasdfjkl
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
