import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import productlist from './Items';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Popups from './popups';


const ItemsContainer = ({ onAddtoCart, category }) => {
    const [filteredItems, setFilteredItems] = useState([]);
    useEffect(() => {
        if(category) {
            const tem = productlist.filter((item) => item.catogory.toLowerCase() === category.toLowerCase())
            setFilteredItems(tem)
        } else {
            setFilteredItems(productlist)
        }
    }, [category])
    return (
        <Container style={{ marginTop: '80px' }}>
            <Row>
                {filteredItems.map((product, idx) => (
                    <Col key={product.id} md={3} className="mb-4">
                        <Card className="text-center cardborder">
                            <Card.Img style={{ width: '15rem', height: "12rem", items: "center", alignSelf: "center" }} variant="top" src={product.imageUrl} />
                            <Card.Body>
                                <Card.Title>{product.name}</Card.Title>
                                <Card.Text>Rs.{product.price}/-</Card.Text>
                                <Popups product={product} onAddtoCart={()=> onAddtoCart(product)}/>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default ItemsContainer;
