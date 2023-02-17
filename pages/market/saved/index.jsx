import { useState } from "react";
import Header from "../../../components/market/header";
import ProductCard from "../../../components/market/product-card";
import { products } from "../../../data/products";

export default () => {
  const [currentTab, setCurrentTab] = useState("saved");
  const [savedProducts, setSavedProducts] = useState([...products])
  const TABS = [
    {
      label: "Saved",
      value: "saved",
    },
    {
      label: "Recently Viewed",
      value: "recent",
    },
  ];
  return (
    <div className="h-full w-full">
      <Header />

      {/* TABS */}
      <div className="flex justify-center items-center mb-3">
        {TABS.map((tab, index) => (
          <button
            key={index}
            onClick={() => setCurrentTab(tab.value)}
            className={`z-[300] w-1/3 p-2 pb-1 ${currentTab == tab.value && "border-b-[2.5px] border-b-violet-700"
              } mr-3`}
          >
            <h4 className={`${currentTab == tab.value && "font-bold"} text-xl`}>
              {tab.label}
            </h4>
          </button>
        ))}
      </div>

      <div className="px-3">
        {currentTab == "saved" && (
          <div className="grid gap-4 grid-cols-2 p-3 mt-3">
            {savedProducts.map((product, index) => (
              <div key={index}
              >
                <ProductCard
                  product={product}
                  isRelated={true}
                  isSaved={true}
                  onSave={() => setSavedProducts((saved) => saved.filter(s => s != product))}
                />
              </div>
            ))}
          </div>
        )}

        {currentTab == "recent" && (
          <div className="grid gap-4 grid-cols-2 p-3 mt-3">
            {[...products].splice(0, 3).map((product, index) => (
              <div key={index}
              >
                <ProductCard product={product} isRelated={true} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
