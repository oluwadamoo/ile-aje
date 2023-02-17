import Router from "next/router";
import { FaCartPlus, FaHeart, FaShoppingBasket, FaTrash } from "react-icons/fa";
// import { addToCart } from "../api/cart";

export default ({ product, isCart, inCart, isRelated, isSaved, onSave }) => {
  return (
    <div
      className={`rounded-[10px] ${isCart || isRelated ? "h-[300px]" : "h-[380px]"
        } relative cursor-pointer bg-[red]`}
    >
      <button
        onClick={() => { onSave ? onSave() : console.log("PRESSED") }}
        className="rounded-full w-[40px] flex items-center justify-center absolute top-2 right-2 bg-[white] h-[40px] shadow-[1px_1px_10px_-2px_rgba(0,0,0,0.3)] hover:animate-pulse"
      >
        {isCart ? (
          <FaTrash size={20} color="#be123c" />
        ) : (
          <FaHeart size={20} color={isSaved ? "#be123c" : "#c9c9c9"} />
        )}
      </button>

      <img
        className={`rounded-[10px] ${isCart || isRelated ? "h-[300px]" : "h-[380px]"
          } w-full object-cover`}
        src={product.images[0]}
        alt="product"
        onClick={() =>
          Router.push(
            "/market/products/[productId]",
            `/market/products/${product.id}`
          )
        }
      />

      <div className="bg-gradient-to-t from-gray-800 to-transparent h-15 w-full absolute p-3 bottom-0 rounded-bl-[10px] rounded-br-[10px] flex justify-between items-center">
        <div className={`${isCart ? "w-full" : "w-3/4"}`}>
          <h4 className={`text-white text-md ${!isCart && "truncate"}`}>
            {product.title}
          </h4>
          <p className="text-white text-sm">
            N{product.price.toLocaleString("en-US")}
          </p>
        </div>
        {!isCart &&
          (inCart ? (
            <div title="Already in cart">
              <FaShoppingBasket color="green" size={20} />
            </div>
          ) : (
            <button
              //   onClick={() => addToCart(product)}
              className="rounded-full w-[40px] flex items-center justify-center bg-transparent h-[40px] hover:animate-pulse"
            >
              <FaCartPlus size={20} color={"#fff"} />
            </button>
          ))}
      </div>
    </div>
  );
};
