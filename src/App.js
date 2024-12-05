// import logo from './logo.svg';
import './App.css';
import ItemsContainer from './Card';
import Navcontainer from "./Nav.js"
// import productlist from "./Items.js"
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from "./Cart"
import { useState } from 'react';

function App() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [cart, setCart] = useState([]);
  const [category, setCategory] = useState('')

  const handleAddToCart = (product) => {
    const prod = cart.find(item => item.id === product.id)
    const prodIdx = cart.findIndex(item => item.id === product.id)
    if (prod) {
      const temp = [...cart]
      prod.quantity += 1;
      temp.splice(prodIdx, 1, prod)
      setCart(temp)
    } else {
      product.quantity = 1;
      setCart((prev) => [...prev, product])
    }
  }

  const handleAddBtn = (product) => {
    const prod = cart.find(item => item.id === product.id)
    const prodIdx = cart.findIndex(item => item.id === product.id)
    if (prod) {
      const temp = [...cart];
      temp[prodIdx].quantity += 1
      setCart(temp)
    }
  }

  const handleSubBtn = (product) => {
    const prod = cart.find(item => item.id === product.id)
    const prodIdx = cart.findIndex(item => item.id === product.id)
    const temp = [...cart];
    if (prod) {
      temp[prodIdx].quantity -= 1
      if (prod.quantity <= 0) {
        temp.splice(prodIdx, 1)
      }
      setCart(temp)
    }
  }

  const handleDeleteBtn = (product) => {
    const prodIdx = cart.findIndex(item => item.id === product.id)
    const temp = [...cart];
    temp.splice(prodIdx, 1)
    setCart(temp)
  }

  const getTotal = () => {
    const temp = [...cart];
    let total = 0;
    temp.forEach(({ price, quantity }) => {
      total += price * quantity;
    });
    return total
  }

  const placeOrder = () => {
    const temp = [...cart];
    if (temp.length > 0) {
      temp.splice(0);
      alert("You'r Order has been placed, Thank you for shopping");
      setCart(temp)
    } else {
      alert("You'r cart is empty, please add items")
    }
  }






  return (<>
    <div className="App">
      <Navcontainer
        handleShow={handleShow}
        category={category}
        setCategory={setCategory}
      />
      <Cart
        show={show}
        handleClose={handleClose}
        cart={cart}
        handleAddBtn={handleAddBtn}
        handleSubBtn={handleSubBtn}
        handleDeleteBtn={handleDeleteBtn}
        getTotal={getTotal}
        placeOrder={placeOrder}
      />
    </div>
    <div >
      <ItemsContainer 
      onAddtoCart={handleAddToCart} 
      category={category} 
      />
    </div>

  </>);
}

export default App;
