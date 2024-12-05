import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';


const CartItems = ({
    cartItems,
    onhandleAddBtn,
    onhandleSubBtn,
    onhandleDeleteBtn
}) => {
    return (
        <>
            {cartItems.map((product, idx) => (
                <React.Fragment key={product.id}>
                    <div>
                        <div className="d-flex justify-content-around">
                            <img src={product.imageUrl} style={{ height: "100px", width: "100px" }} />
                            <div>
                                <ButtonGroup style={{ marginTop: "20px" }} aria-label="Basic example">
                                    <Button variant="secondary" onClick={() => onhandleSubBtn(product)}>-</Button>
                                    <Button variant="secondary" disabled>{product.quantity}</Button>
                                    <Button variant="secondary" onClick={() => onhandleAddBtn(product)}>+</Button>
                                </ButtonGroup>
                            </div>
                            <a><FontAwesomeIcon icon={faTrashCan} className='trashcan' onClick={() => onhandleDeleteBtn(product)} /></a>
                        </div>
                        <h4>{product.name}</h4>
                        <b>Rs.{product.price}/-</b>
                        <p style={{ float: 'right' }}>Sub Total: Rs.<b>{product.price * product.quantity}</b>/-</p>
                    </div>
                    {idx !== cartItems.length - 1 && <hr className="hr hr-blurry" />}
                </React.Fragment>
            ))}

        </>)

}
export default CartItems; 