import './App.css';
import ItemList from './components/ItemList';
import Navbar from './components/Navbar';
import OrderSummary from './components/OrderSummary';
import Supplier from './components/Supplier';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <OrderSummary/>
     <Supplier/>
     <ItemList/>
    </div>
  );
}

export default App;
