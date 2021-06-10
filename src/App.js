import logo from './logo.svg';
import './App.css';
import Letters from './components/Letters';
import Score from './components/Score';
import Solution from './components/Solution';

function App() {
  return (<div>
    <Score />
    <Solution />
    <Letters />
  </div>
  )
}

export default App;
