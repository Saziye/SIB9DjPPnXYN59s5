// import "./App.css";
// import "../src/components/CounterList";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import PriceList from "./components/PriceList";
import CounterList from "./components/CounterList";
import "../src/style.css";

function App() {
  return (
    <div className="App">
      <Header branding="Bitcoin Dashboard" />
      <div className="container">
        <CounterList />
        <PriceList />
      </div>
    </div>
  );
}

export default App;
