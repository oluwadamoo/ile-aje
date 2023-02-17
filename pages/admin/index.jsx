import { useRef, useState } from "react";

import { orders } from "../../data/products";
import { AdminCard } from "../../components";
import Graph from "../../components/graphs/graph";
import { customers, sales } from "../../data/graph-data";

const Admin = () => {
  const [showProduct, setShowProduct] = useState({
    product_id: "",
    order_id: "",
  });

  const tableData = orders.map((order, index) => (
    <tr className="border-b-2 border-gray-100" key={index}>
      <td className="text-center">{order.customer}</td>
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
              className={`h-[50px] w-[50px]  ${
                index > 0 && "-ml-4"
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
    <div className="p-[15px] pr-[5%] w-full">
      {/* <AdminCard /> */}
      <div className="flex flex-col">
        <div>
          <div className="grid max-h-[120px] xl:grid-cols-3  lg:grid-cols-2 grid-cols-1 gap-4">
            <AdminCard
              data={{ value: 2000000, growth: 20, label: "Wallet Balance" }}
            />
            <AdminCard
              data={{ value: 2000000, growth: 20, label: "Revenue" }}
            />
            <AdminCard
              data={{ value: 2000000, growth: 20, label: "New Customers" }}
            />
          </div>

          {/* Graphs */}
          {/* SALES */}
          <div className="flex lg:flex-nowrap flex-wrap  w-full xl:mt-[20px] lg:mt-[150px] mt-[300px]">
            <div className=" w-full lg:mr-[20px] lg:mb-[0] mb-[20px] bg-[#03fcfc13] p-2 rounded-md">
              <Graph title={"Sales Chart"} chartData={sales} />
            </div>

            {/* CUSTOMER GROWTH */}
            <div className="w-full bg-[#03fcfc13] p-2 rounded-md">
              <Graph title={"Customer Growth"} chartData={customers} />
            </div>
          </div>
        </div>
        {/* Sales */}
        <div className="mt-[50px]  ml-[20px] p-[10px] rounded-[10px] shadow-sm">
          <h3 className="text-xl font-bold h-text">Recent Sales</h3>

          <div className="flex mt-[30px]" style={{ overflowX: "scroll" }}>
            <div className="min-w-full">
              <table className="min-w-full border-2 border-gray-200">
                <thead className="border-b bg-gray-50 p-[50px]">
                  <tr>
                    <th rowSpan={"2"}>Customer</th>
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
      {/* <div>MAIN CONTENT PART</div> */}
    </div>
  );
};

export default Admin;
