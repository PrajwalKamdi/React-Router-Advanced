import React from "react";
import { Link, useLoaderData } from "react-router-dom";

function Input() {
  const products = useLoaderData();
  return (
    <div>
      <h1>All Collection</h1>
      <div className="grid grid-cols-5 gap-5 text-sm">
        {products.map((item) => (
          <Link to={`${item.id}`} key={item.id}>
            <div className="p-2 shadow-sm border">
              <img src={item.image} alt="" />
              <p className="line-clamp-1">{item.title}</p>
              <p className="line-clamp-3">{item.description}</p>
              <p>{item.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
export async function getProducts() {
  const f1 = await fetch("https://fakestoreapi.in/api/products");
  const f2 = await f1.json();
  return f2.products;
}
export default Input;
