import React from 'react'
import Link from 'next/link';
import Container from "./Container"
import ProductsitemsA from './ProductsitemsA';


const Products = async () => {
  return (
    <Container className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mt-10">
      <ProductsitemsA />
      <ProductsitemsA /> 
      <ProductsitemsA /> 
      <ProductsitemsA /> 
      <ProductsitemsA /> 
      <ProductsitemsA /> 
      <ProductsitemsA /> 
      <ProductsitemsA /> 
      <ProductsitemsA /> 
      <ProductsitemsA /> 
      <ProductsitemsA /> 
      <ProductsitemsA /> 

    </Container>
     
  );
};

export default Products
