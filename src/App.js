import logo from './logo.svg';
import './App.css';
import '../src/components/CounterList'
import CounterList from '../src/components/CounterList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <CounterList counters={[{ name: 'Saat', id: 0 }, { name: 'Dakika', id: 1 }, { name: 'Saniye', id: 2 }]} />
      </header>
    </div>
  );
}

export default App;
