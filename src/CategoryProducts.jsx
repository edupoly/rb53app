import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function CategoryProducts() {
  var { cslug } = useParams();
  var [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${cslug}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts([...data.products]);
      });
  }, [cslug]);
  return (
    <div>
      <h1>CategoryProducts</h1>
      <ul>
        {products.map((pr) => {
          return <li>{pr.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default CategoryProducts;
