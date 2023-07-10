import ProductList from './components/Product/ProductList';
import { jsonData } from './constants/jsonData';
import "./App.css"
import { useEffect, useReducer } from 'react';
import { Reducer } from './reducer';
import Header from './components/Header/Header';
import Cart from './components/Cart/Cart';
import { Route, Routes } from 'react-router';

function App() {
  const [productDetails,dispatch] = useReducer(Reducer,{
    products:[],
    cart:[]
  })
  useEffect(()=>{
    dispatch({
      type:'ADD_PRODUCTS',
      payload:jsonData
    })
  },[])
  return (
    <div className="App">
      <Header state={productDetails}/>
      <Routes>
          <Route path="/" element={<ProductList state={productDetails} dispatch={dispatch}/>} />
          <Route path="/cart" element={<Cart state={productDetails} dispatch={dispatch}/>} />
       </Routes>
    </div>
  );
}

export default App;
