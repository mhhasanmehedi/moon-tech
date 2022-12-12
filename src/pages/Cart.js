import React from "react";
import { useProducts } from "../context/ProductProvider";

const Cart = () => {
  const {
    state: { loading, error, cart },
  } = useProducts();

  let content;

  if (loading) {
    content = <p>Loading...</p>;
  }

  if (error) {
    content = <p>Something went wrong</p>;
  }

  if (!loading && !error && cart.length === 0) {
    content = <p>Nothing to show, cart list is empty</p>;
  }

  if (!loading && !error && cart.length) {
    content = cart.map((crt) => (
      <div
        key={crt.id}
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "20px",
          border: "1px solid #eeeeee",
        }}
      >
        <div style={{ height: "160px", width: "160px" }}>
          <img
            src={crt.image}
            alt=""
            style={{ height: "100%", width: "100%", objectFit: "contain" }}
          />
        </div>
        <div>
          <p style={{ fontWeight: "bold" }}>{crt.model}</p>
          {crt.keyFeature.map((feature) => (
            <p>{feature}</p>
          ))}
        </div>
      </div>
    ));
  }

  return <div className="mx-auto my-10 w-4/5 "> {content}</div>;
};

export default Cart;
