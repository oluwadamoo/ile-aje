import { FaArrowLeft, FaMinus, FaPlus } from "react-icons/fa";
import { Carousel } from "../../../components/market";
import { products, reviews } from "../../../data/products";
import { useRouter } from "next/router";
import { useState } from "react";
import ProductCard from "../../../components/market/product-card";

export default () => {
  const router = useRouter();
  const [currentTab, setCurrentTab] = useState("details");
  const [sizes, setSizes] = useState([]);
  const [colors, setColors] = useState([]);
  const [qty, setQty] = useState(1);

  const TABITEMS = [
    {
      label: "Details",
      value: "details",
    },
    {
      label: "Reviews",
      value: "reviews",
    },
    {
      label: "Related Products",
      value: "related",
    },
  ];

  return (
    <div className="p-5 w-full min-h-[100vh]">
      <button
        onClick={() => router.back()}
        className="justify-self-start w-1/3 flex items-center p-2 active:opacity-50"
      >
        <FaArrowLeft color={"rgb(109 40 217)"} />
        <p className="ml-2 text-violet-700 font-bold">Go Back</p>
      </button>

      {/* Carousel */}
      <Carousel images={products[0].images} />

      {/* Product Tabs */}
      <div className="flex justify-center items-center mb-3">
        {TABITEMS.map((tab, index) => (
          <button
            key={index}
            onClick={() => setCurrentTab(tab.value)}
            className={`z-[300] p-2 pb-1 ${
              currentTab == tab.value && "border-b-2 border-b-violet-700"
            } mr-3`}
          >
            <h4 className={`${currentTab == tab.value && "font-bold"} text-xl`}>
              {tab.label}
            </h4>
          </button>
        ))}
      </div>

      {/* Details */}
      {currentTab == "details" && (
        <div className="mt-[20px]">
          <h2 className="font-bold text-2xl  mb-3">{products[0].title}</h2>

          {/* SIZES */}
          <div className="flex items-center mb-[10px]">
            <span className="mr-[10px] font-bold">Sizes: </span>{" "}
            {products[0].sizes.map((size, index) => (
              <button
                onClick={() => {
                  !sizes.includes(size)
                    ? setSizes((prev) => [...prev, size])
                    : setSizes((prev) => prev.filter((p) => p !== size));
                }}
                className={`p-1 ${
                  sizes.includes(size) && "bg-gray-100"
                } active:bg-gray-100 px-2 border-[1px] border-gray-200`}
                key={index}
              >
                <span>{size}</span>
              </button>
            ))}
          </div>

          {/* COLORS */}
          <div className="flex items-center mb-[10px]">
            <span className="mr-[10px] font-bold">Colors: </span>{" "}
            {products[0].colors.map((color, index) => (
              <button
                onClick={() => {
                  !colors.includes(color)
                    ? setColors((prev) => [...prev, color])
                    : setColors((prev) => prev.filter((p) => p !== color));
                }}
                className={`p-1 ${
                  index !== 0 && "ml-[10px]"
                }  p-2  border-2 rounded-full`}
                key={index}
                style={{
                  borderColor: color,
                  background: colors.includes(color) ? color : "transparent",
                }}
              ></button>
            ))}
          </div>

          {/* In STOCK */}
          <div className="flex items-center mb-[10px]">
            <span className="mr-[10px] font-bold">Items In Stock: </span>{" "}
            <span>{products[0].available_in_stock}</span>
          </div>

          {/* PRICE */}
          <div className="flex sm:flex-row flex-col sm:items-center mb-[10px]">
            {/* price */}
            <div className="flex items-center">
              <span className="mr-[10px] font-bold">Price: </span>{" "}
              <h4 className="text-xl">
                &#8358;
                {(qty > 0
                  ? products[0].price * qty
                  : products[0].price
                ).toLocaleString("en-US")}
              </h4>
              <div className="flex items-center h-[30px] ml-[30px]">
                <button
                  onClick={() => {
                    if (qty > 1) {
                      setQty((prev) => prev - 1);
                    }
                  }}
                  className="active:bg-gray-200 text-xs border-[1px] border-gray-200 h-full px-2"
                >
                  <FaMinus />
                </button>
                <input
                  className="h-full px-2 border-[1px] border-gray-200 w-[50px]"
                  type="number"
                  value={qty}
                  onChange={(e) => {
                    setQty(e.target.value);
                  }}
                />
                <button
                  onClick={() => setQty((prev) => prev + 1)}
                  className="text-xs border-[1px] border-gray-200 h-full px-2"
                >
                  <FaPlus />
                </button>
              </div>
            </div>
            <button className="sm:ml-[30px] sm:mt-[0px] self-center mt-[30px] w-3/4 h-[50px] bg-violet-900 active:bg-violet-600 hover:bg-violet-600 rounded-full flex items-center justify-center active:bg-violet-500 p-2">
              <h4 className="font-bold text-[#fff]">ADD TO CART</h4>
            </button>
          </div>

          {/* DESCRIPTION */}
          <hr className="my-[15px]" />
          <div className="">
            <div className="mb-[10px]">
              <span className="relative font-bold text-xl after:absolute after:h-[1.5px] after:bg-violet-700 after:w-[60%] after:rounded-[50%] after:-bottom-[2px] after:left-[20%]">
                DESCRIPTION:
              </span>
            </div>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
            fugiat voluptate nulla accusantium corporis quisquam dicta
            necessitatibus alias eos, facilis explicabo est quia iusto,
            obcaecati veniam incidunt error commodi itaque! Harum sint natus eum
            deleniti maiores eligendi ex cupiditate, magnam est at. Deleniti,
            provident! Commodi cumque labore dicta, unde reiciendis nisi
            excepturi perferendis accusamus deserunt, explicabo quas, obcaecati
            doloribus minima.
          </div>
        </div>
      )}
      {/* Details End */}

      {/* Reviews */}
      {currentTab == "reviews" && (
        <div>
          {reviews.map((review, index) => (
            <div
              key={index}
              className="mb-[10px] pb-[10px] border-b-2 border-b-gray-200"
            >
              <div className="flex items-center">
                <img
                  className="w-[35px] h-[35px] rounded-full"
                  src={
                    review.user.image
                      ? review.user.image
                      : "/images/default-image.jpeg"
                  }
                  alt="user-image"
                />
                <span className="font-bold ml-[10px] text-lg">
                  {review.user.name}
                </span>
                <span className="ml-[17px] italic text-sm">{review.date}</span>
              </div>

              {review.images.length > 0 ? (
                <div
                  className="mt-[10px] flex items-center"
                  style={{
                    overflowX: "scroll",
                  }}
                >
                  {review.images.map((image, index) => (
                    <img
                      className={`w-3/4 ${
                        index !== 0 ? "ml-[10px]" : "ml-[0px]"
                      }`}
                      src={image}
                      key={index}
                      alt={`${image}-${index}`}
                    />
                  ))}
                </div>
              ) : (
                <div className="mt-[10px]" />
              )}
              <span>{review.review}</span>
            </div>
          ))}
        </div>
      )}

      {/* Reviews End*/}

      {/* Related Products */}
      {currentTab == "related" && (
        <div className="grid gap-4 sm:grid-cols-3 grid-cols-2  p-3 mt-3">
          {products.map((products, index) => (
            <ProductCard key={index} product={products} isRelated={true} />
          ))}
        </div>
      )}
      {/* Related Products End */}

      {/* {currentTab !== "related" && (
        <div className="flex justify-center">
          <button className="sm:ml-[30px] self-center mt-[30px] w-3/4 h-[50px] active:bg-violet-600 hover:bg-violet-600 bg-violet-900 rounded-full flex items-center justify-center active:bg-violet-500 p-2">
            <h4 className="font-bold text-[#fff]">ADD TO CART</h4>
          </button>
        </div>
      )} */}
    </div>
  );
};
