import logo from './logo.svg';
import './App.css';
import MuiMarkdown from 'mui-markdown'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        Nested Lists
      </header>
      <p>Expected:</p>
      <ul>
        <li>Fee</li>
        <li>Fi
          <ul>
            <li>Fo</li>
            <li>Fum</li>
          </ul>
        </li>
      </ul>
      <p>Actual:</p>
        <MuiMarkdown>{`
* Fee
* Fi
  * Fo
  * Fum`}</MuiMarkdown>
    </div>
  );
}

export default App;
