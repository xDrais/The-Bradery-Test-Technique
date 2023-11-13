import {Row, Col} from 'react-bootstrap';
//import { productsArray } from '../productsStore';
import ProductCard from '../components/ProductCard';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Store=() =>{
   /* const productsArray =  axios({
        method: 'get',
        url:"http://localhost:5000/api/products"
     
    });*/
    const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
        try {
          const response = await axios.get('http://localhost:5000/api/products');
          const productsFromApi = response.data?.products;
      
          if (productsFromApi) {
            setProducts(productsFromApi);
          } else {
            // Handle the case when the API response does not contain products
            console.log('No products found in the API response');
          }
      
          setLoading(false);
        } catch (error) {
          console.error(error);
          // Handle error - e.g., set an error state or display an error message
        }
      };
      
    getProducts();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }


    return (
        <>
            <h1 align="center" className="p-3">Welcome to the store!</h1>
            <Row xs={1} md={3} className="g-4">
                {products?.map((product, idx) => (
                    <Col align="center" key={idx}>
                        <ProductCard product={product}/>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default Store;