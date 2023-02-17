import Header from "../../../components/market/header";
import ProductCard from "../../../components/market/product-card";
import { products } from "../../../data/products";

export default () => {
  return (
    <div className="h-[100%_-_80px] w-full relative">
      <Header />

      <div className="h-full">
        {/* <h3 className="px-4 text-xl font-bold h-text text-gray-500">My Cart</h3> */}
        <div className="grid gap-4 sm:grid-cols-3 grid-cols-2 p-3 mt-3">
          {[...products, ...products].map((product, index) => (
            <ProductCard key={index} product={product} isCart={true} />
          ))}
        </div>
      </div>
      <div className="sticky bottom-[110px] bg-violet-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-violet-100 p-2 px-3 pb-4">
        <div className="mb-[15px] flex justify-between items-center">
          <span className="font-bold text-xl text-gray-200 drop-shadow-md">
            Total Price:
          </span>
          <span className="font-bold text-2xl text-gray-200 drop-shadow-lg">
            &#8358;
            {products
              .reduce((a, b) => a + Number(b.price * (b?.qty ? b?.qty : 1)), 0)
              .toLocaleString()}
          </span>
        </div>
        <div className="flex justify-center">
          <button
            className="w-3/4 h-[50px] bg-violet-800 rounded-full flex items-center justify-center active:bg-violet-500 p-2"
            style={{
              marginTop: "auto",
              alignSelf: "center",
            }}
          >
            <h4 className="font-bold ml-5 text-[#fff]">PROCEED TO CHECKOUT</h4>
          </button>
        </div>
      </div>
    </div>
  );
};
