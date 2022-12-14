import React from "react";
import { BiListPlus } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  addToCart,
  removeFormCart,
} from "../redux/actionCreators/productActions";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const { pathname } = useLocation();

  return (
    <div className="shadow-lg relative rounded-3xl border  p-3 flex flex-col text-indigo-900">
      {pathname.includes("cart") && (
        <div className="bg-indigo-500 p-1 text-white h-8 w-8 rounded-full absolute grid place-items-center top-0 right-0">
          <p>{product.quantity}</p>
        </div>
      )}
      <div className="h-52 w-52 mx-auto">
        <img src={product.image} alt={product.model} />
      </div>
      <h1 className="font-bold text-center">{product.model}</h1>
      <p className="text-center font-semibold mb-3">
        Id: {product.id} || Rating: {product.rating}
      </p>
      <div className=" flex-1">
        <ul className="space-y-2">
          {product.keyFeature.map((feature) => {
            return (
              <li className="text-sm " key={feature}>
                {feature}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex gap-2 mt-5">
        {pathname.includes("cart") && (
          <button
            onClick={() => dispatch(removeFormCart(product))}
            className="bg-red-500 rounded-full py-1 px-2 flex-1 text-white text-bold"
          >
            Remove
          </button>
        )}

        {!pathname.includes("cart") && (
          <button
            onClick={() => dispatch(addToCart(product))}
            className="bg-indigo-500 rounded-full py-1 px-2 flex-1 text-white text-bold"
          >
            Add to cart
          </button>
        )}
        {!pathname.includes("cart") && (
          <button
            title="Add to wishlist"
            className="bg-indigo-500  py-1 px-2 rounded-full"
          >
            <BiListPlus className="text-white" />
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
