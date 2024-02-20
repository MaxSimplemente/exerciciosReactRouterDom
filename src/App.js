import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Rutas from './componentes/Rutas';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Rutas></Rutas>
      </BrowserRouter>     
    </div>
  );
}

export default App;
