import React from 'react'
import Link from 'next/link';
import Container from "./Container"
import ProductsData from './ProductsData';
import ProductsDataB from './ProductsDataB';
import ProductsDataC from './ProductsDataC';



const Products = async () => {
  return (
    <Container className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-6">
            <ProductsData />
            <ProductsDataB />
            <ProductsDataC/>
    </Container>
     
  );
};

export default Products