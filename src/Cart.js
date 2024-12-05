// import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
// import ItemsContainer from "./Card"
import CartItems from './CartItems.js'
import Button from 'react-bootstrap/Button';


function Cart(
  {
    show,
    handleClose,
    cart,
    handleAddBtn,
    handleSubBtn,
    handleDeleteBtn,
    getTotal,
    placeOrder }
) {
  return (
    <Offcanvas show={show} onHide={handleClose} placement='end'>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title >You'r Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className='hide-scrollbar'>
        <CartItems
          cartItems={cart}
          onhandleAddBtn={handleAddBtn}
          onhandleSubBtn={handleSubBtn}
          onhandleDeleteBtn={handleDeleteBtn} />
      </Offcanvas.Body>
      <div style={{ boxShadow: '0px -5px 6px #8888888a', padding: '16px', display: "flex", justifyContent: "space-between", width: '100%', alignItems: 'center' }}>
        <Button variant="danger" onClick={() => placeOrder()}><b>Buy Now</b></Button>
        <b style={{ margin: '0' }}>Total: Rs.  <b>{getTotal()}</b>/-</b>
      </div>
    </Offcanvas>
  );
}

export default Cart;