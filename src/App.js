import './App.css';
import Home from './Pages/Home/Home';
import Header from './component/Header/Header';
import Product from './component/Products_list/Product';
import { BrowserRouter as Router} from 'react-router-dom'
function App() {
  return (
    <div className="App">
        <Router>
         <Header/>
          <Home/>
        </Router>
    </div>
  );
}

export default App;
