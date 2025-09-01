import React, { useEffect, useState } from "react";

function Products() {
  var [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProducts(data.products);
      });
  }, []);

  return (
    <div className="border border-2 border-info p-2 m-2">
      <h1>Products</h1>
      <ul>
        {products.map((p) => {
          return <li>{p.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default Products;
