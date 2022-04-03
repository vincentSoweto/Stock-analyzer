import './App.css';
import Extractor from './components/Extractor'
import Conv from './components/csvToJSON'

function App() {

  
  return (
    <div className="App">
      <Conv/>
      <Extractor />
    </div>
  );
}

export default App;
