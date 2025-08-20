import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

const Test = styled.div`
    background-color: red;
`

function App() {
  return (
    <Test className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Test>
          Edit <code>src/App.js</code> and save to reload.
        </Test>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </Test>
  );
}

export default App;
