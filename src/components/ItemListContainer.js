import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from "react";
import { useEffect } from "react";
import { getProducts } from "../services/products";
import { useNavigate } from 'react-router-dom';


const ItemListContainer = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);

    useEffect(() => {
      getProducts().then((response) => {
        console.log("getProducts");
        setProducts(response);
      });
    }, []);

    return(
      <>
        <div className='container d-flex justify-content-center align-items-center h-100'>
          <div className='row'>
            {products.map((product) =>{
              return(
                   
                <div className='col-md-4'> 
                  <Card style={{ width: 'auto' }} key={product.id}>
                    <Card.Img variant="top" src={product.imagen} />
                    <Card.Body>
                      <Card.Title>"{product.id}"{product.tipo}</Card.Title>
                      <Card.Text>
                        {product.detalle}
                      </Card.Text>
                      <Button onClick={() => navigate(`/item/${product.id}`)} variant="primary">VER MAS</Button>
                    </Card.Body>
                  </Card>
                </div>
              )
            })}
          </div> 
        </div>        
      </>
    )
  
}
export default ItemListContainer;


