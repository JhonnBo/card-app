import logo from './logo.svg';
import './App.css';
import { CardFull } from './Card';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CardFull header = 'Basic' price = {50} desc = 'Прямой номер' no = {1}/>
        
        <CardFull header = 'Standart' price = {100} desc = 'Квадратный номер' no = {2}/>
        
        <CardFull header = 'Premium' price = {150} desc = 'Круглый номер' no = {3}/>
      </header>
    </div>
  );
}

export default App;
