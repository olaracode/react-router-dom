import React from "react";
import { useParams } from "react-router-dom";

const productos = [
  {
    brand: "nike",
    description: "lorem ipsum",
  },
  {
    brand: "adidas",
    description:
      "Adidas AG (German: [ˈʔadiˌdas] (listen); stylized as adidas since 1949)[4] is a German athletic apparel and footwear corporation headquartered in Herzogenaurach, Bavaria, Germany. It is the largest sportswear manufacturer in Europe, and the second largest in the world, after Nike.[5][6] It is the holding company for the Adidas Group, which consists 8.33% stake of the football club Bayern München,[7] and Runtastic, an Austrian fitness technology company. Adidas's revenue for 2018 was listed at €21.915 billion.[3]",
  },
  {
    brand: "puma",
    description: "lorem ipsum",
  },
  {
    brand: "ovejita",
    description: "lorem ipsum",
  },
  {
    brand: "New Balance",
    description: "lorem ipsum",
  },
];

// metodos de array (map, filter, find)

const Product = () => {
  const params = useParams();
  const currentBrand = productos.find((product) => product.brand === params.id);
  return (
    <div className="container">
      <h1>{currentBrand.brand}</h1>
      <p>{currentBrand.description}</p>
    </div>
  );
};

export default Product;
