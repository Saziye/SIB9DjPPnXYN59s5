// import "./App.css";
// import "../src/components/CounterList";
import  'bootstrap/dist/css/bootstrap.min.css';
// import CounterList from "../src/components/CounterList";
import Header from "./components/Header";
import PriceList from "./components/PriceList";
import '../src/style.css'

function App() {
  return (
    <div className="App">
      <Header branding="Bitcoin Dashboard" />
      <div className="container">
        <PriceList />
      </div>
    </div>
  );
}

export default App;
