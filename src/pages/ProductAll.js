import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProductCard from "../components/ProductCrad/ProductCrad";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  console.log("productList", productList);

  const getProducts = async () => {
    let url = `http://localhost:5000/products`;
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Container>
      <Row>
        {productList.map((menu) => (
          <Col lg={3}>
            <ProductCard item={menu} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductAll;
