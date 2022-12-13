import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const state = useSelector((state) => state.cart);

  return (
    <div className="px-44">
      {state.map((cart) => (
        <div className="flex gap-14 mx-auto my-10" key={cart.id}>
          <div className=" h-40" style={{ border: "1px solid #aaaaaa" }}>
            <img
              src={cart.image}
              className="object-cover"
              alt=""
              style={{ height: "100%", width: "100%" }}
            />
          </div>
          <div>
            <p>{cart.model}</p>
            <ul>
              {cart.keyFeature.map((feature) => (
                <li>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
