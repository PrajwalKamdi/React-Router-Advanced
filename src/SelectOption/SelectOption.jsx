import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SelectOption() {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  async function getProduct() {
    const f1 = await fetch(`https://fakestoreapi.in/api/products/${id}`);
    const f2 = await f1.json();
    setProduct(f2.product);
  }
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <div>
      <h1>All Collection</h1>
      <div className="grid grid-cols-3 border">
        <div className="p-2 ">
          <img src={product.image} alt="" />
        </div>
        <div>
          <p className="py-2">{product.title}</p>
          <p className="py-2">{product.description}</p>
          <p className="text-green-600 font-bold">{product.price}$</p>
        </div>
      </div>
    </div>
  );
}

export default SelectOption;
