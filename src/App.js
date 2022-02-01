import logo from './logo.svg';
import './App.css';
import MuiMarkdown from 'mui-markdown'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        Nested Lists
      </header>
        <MuiMarkdown>{`
Start
* Fee
* Fi
  * Fo
  * Fum`}</MuiMarkdown>
    </div>
  );
}

export default App;
