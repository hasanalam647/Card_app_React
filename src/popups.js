import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Popups = ({ onAddtoCart = () => { } , product}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    onAddtoCart()
    setShow(true)
  };

  return (
    <>
      <Button className='addbtn' variant="primary" onClick={handleShow}>
        Add to cart
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
        <b>{product.name}</b> has been added
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Popups;