import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import ProductList from './components/ProductList';
import DetailsPage from './components/DetailsPage';
import Search from "./components/search";
import Cart from "./components/Cart";

function App() {
  return (

      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/search" element={<Search/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/products/:id" element={<DetailsPage />} />

      </Routes>

      

    
 

 
  );
}

export default App;