import { FaSearch } from "react-icons/fa";
import { Header, Post, ProductCard } from "../../components/market";
import { products } from "../../data/products";

export default () => {
  return (
    <div className="h-full w-full">
      <Header />

      {/* POSTS */}
      <div
        className="flex items-center"
        style={{
          overflowX: "scroll",
        }}
      >
        {[0, 0, 0, 0, 0, 0, 0].map((s, i) => (
          <Post
            key={i}
            image={
              "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80"
            }
            name="new arrivals"
          />
        ))}
      </div>

      {/* FILTER */}
      <div className="w-full p-3 mt-[10px]">
        {/* SEARCH */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            // searchForTeachings();
          }}
        >
          <div className="flex drop-shadow-xl">
            <input
              type={"text"}
              placeholder="What do you want to buy?"
              className="border-2 border-violet-700 px-3 rounded-l-[5px] w-full"
            />
            <button
              type="submit"
              className={`rounded-r-[10px] width-[40px] bg-violet-700 p-3`}
            >
              <FaSearch size={20} color={"#fff"} />
            </button>
          </div>
        </form>

        {/* SORT BY CATEGORY */}
        <div className="flex items-center">
          {/* <span className="p-3 py-2">Sort by: </span> */}
          <select className="mt-[20px] border-2 border-violet-700 p-3 py-2 rounded-[5px]">
            <option>All Categories</option>
            <option>Men</option>
            <option>Women</option>
            <option>Electronics</option>
          </select>

          <select className="ml-[20px] mt-[20px] border-2 border-violet-700 p-3 py-2 rounded-[5px]">
            <option>Recently Added</option>
            <option>Best selling</option>
          </select>
        </div>
      </div>

      {/* PRODUCTS */}
      <div className="grid gap-4 grid-cols-2 p-3 mt-3">
        {[...products, ...products].map((products, index) => (
          <ProductCard key={index} product={products} />
        ))}
      </div>
    </div>
  );
};
