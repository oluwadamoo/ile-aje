import { useState } from "react";
import Header from "../../../components/market/header";
import { orders } from "../../../data/products";

export default () => {
  const [currentTab, setCurrentTab] = useState("all");
  const [showProduct, setShowProduct] = useState({
    product_id: "",
    order_id: "",
  });

  const TABS = [
    {
      label: "All",
      value: "all",
    },
    {
      label: "Completed",
      value: "completed",
    },
    {
      label: "Delivered",
      value: "delivered",
    },
    {
      label: "Cancelled",
      value: "cancelled",
    },
  ];

  const tableData = orders
    .filter(
      (order) => order.status.toLowerCase() == currentTab || currentTab == "all"
    )
    .map((order, index) => (
      <tr className="border-b-2 border-gray-100" key={index}>
        <td className="px-2">
          <div className="flex items-center justify-center">
            {order.products.slice(0, 3).map((product, index) => (
              <div
                onMouseOver={() =>
                  setShowProduct({
                    product_id: product.id,
                    order_id: order.id,
                  })
                }
                onMouseLeave={() => setShowProduct()}
                key={index}
                className={`h-[50px] w-[50px]  ${index > 0 && "-ml-4"
                  } relative rounded-full flex justify-center items-center bg-[white]`}
              >
                <div
                  className={`h-[42px] w-[42px] rounded-full flex justify-center items-center bg-[white] border-2 border-violet-700`}
                >
                  <img
                    src={product.images[0]}
                    alt=""
                    className="h-[34px] w-[34px] rounded-full"
                  />
                </div>

                {showProduct?.order_id == order.id &&
                  showProduct?.product_id == product.id && (
                    <div
                      className="absolute top-[-20px] flex justify-center z-[1000] min-w-[100px] max-w-[300px] bg-[#fff] drop-shadow-md rounded-[3px] px-[2%]"
                      style={{
                        width: "fit-content",
                      }}
                    >
                      <span className="text-center">{product.title}</span>
                    </div>
                  )}
              </div>
            ))}
            {order.products.length > 3 && (
              <div
                className={`h-[50px] w-[50px] -ml-4 rounded-full flex justify-center items-center bg-[white]`}
              >
                <div
                  className={`h-[42px] w-[42px] rounded-full flex justify-center items-center bg-[white] border-2
                border-violet-700`}
                >
                  <div className="h-[30px] w-[30px] rounded-full flex items-center justify-center">
                    <h4 className="font-bold text-lg">
                      +{order.products.length - 3}
                    </h4>
                  </div>
                </div>
              </div>
            )}
          </div>
        </td>
        <td className="text-center">
          &#8358;
          {order.products
            .reduce((a, b) => a + Number(b.price * b.qty), 0)
            .toLocaleString()}
        </td>
        <td className="text-center">{order.date}</td>
        <td className="text-center">{order.status}</td>
      </tr>
    ));

  return (
    <div className="flex flex-col h-full w-full">
      <Header />

      {/* <h3 className="px-4 text-xl font-bold h-text text-gray-500 mb-[15px]">
        My Orders
      </h3> */}

      {/* TABS */}
      <div className=" px-[10px]">
        <div className="flex justify-center items-center mb-3">
          {TABS.map((tab, index) => (
            <button
              key={index}
              onClick={() => setCurrentTab(tab.value)}
              className={`z-[300] w-full p-2 pb-1 ${currentTab == tab.value &&
                "border-b-[2.5px] border-b-violet-700"
                } mr-3`}
            >
              <h4
                className={`${currentTab == tab.value && "font-bold"} text-xl`}
              >
                {tab.label}
              </h4>
            </button>
          ))}
        </div>

        <div className="flex mt-[30px]" style={{ overflowX: "scroll" }}>
          <div className="min-w-full">
            <table className="min-w-full border-2 border-gray-200">
              <thead className="border-b bg-gray-50 p-[50px]">
                <tr>
                  <th rowSpan={"2"}>Product</th>
                  <th>Price</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody className="">
                {tableData.length > 0 ? (
                  tableData
                ) : (
                  <tr>
                    <td className="px-3 font-bold">No Data</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
