import { FaEdit, FaEye, FaPlus, FaShirtsinbulk, FaTrash } from "react-icons/fa";
import { AdminCard } from "../../components";
import { products } from "../../data/products";

export default function Products() {
  const productList = products.map((product, index) => {
    return (
      <tr
        key={index}
        className={`${
          index % 2 !== 0 ? "bg-gray-100 hover:bg-gray-50" : "hover:bg-gray-50"
        } `}
      >
        <td className="border border-[#c2c4c4] p-1 px-2">
          <h4 className="text-gray-700">{product.date}</h4>
        </td>
        <td className="border border-[#c2c4c4] p-2 w-[43%] min-w-[200px]">
          <div className="flex items-center mb-3 cursor-pointer">
            <div className="h-[48px] w-[48px] rounded-full flex justify-center items-center bg-[white] border-2  mr-3 border-violet-700">
              <img
                src={product.images[0]}
                alt=""
                className="h-[38px] w-[38px] rounded-full"
              />
            </div>
            <h4 className="font-bold text-lg text-gray-700">{product.title}</h4>
          </div>
        </td>
        <td className="border border-[#c2c4c4] p-1 text-center">
          {product.sold}
        </td>
        <td className="border border-[#c2c4c4] p-1 text-center">
          {product.available_in_stock}
        </td>

        <td className="border border-[#c2c4c4] p-2 font-bold text-gray-700">
          &#8358;{product.price}
        </td>
        <td className="border border-[#c2c4c4] p-2 font-bold text-gray-700">
          <FaTrash color="red" className="cursor-pointer hover:text-xl" />
          <FaEye className="my-[10px] cursor-pointer hover:text-xl" />
          <FaEdit color="#fcd303" className="cursor-pointer hover:text-xl" />
        </td>
      </tr>
    );
  });
  return (
    <div className="p-[15px] pr-[5%] w-full">
      <div className="grid max-h-[120px] xl:grid-cols-3  lg:grid-cols-2 grid-cols-1 gap-4">
        <AdminCard data={{ value: 2000, label: "Total Products" }} />
        <AdminCard data={{ value: 2000000, label: "Expected Revenue" }} />
        <AdminCard data={{ value: 20, label: "Total Product Sold" }} />
      </div>

      <div className="flex xl:mt-[20px] lg:mt-[150px] mt-[300px] items-center justify-between">
        <h3 className=" text-xl font-bold h-text">Products</h3>

        <div className="flex items-center">
          <button className="flex items-center font-bold bg-[#07adf5] text-[white] h-[40px] w-[140px] justify-center shadow-md rounded-[10px] active:shadow-sm">
            <FaPlus className="mr-[5px]" /> Upload New
          </button>
          <button className="ml-[20px] flex items-center font-bold bg-[#4facf8] text-[white] h-[40px] w-[140px] justify-center shadow-md rounded-[10px] active:shadow-sm">
            <FaShirtsinbulk className="mr-[5px]" /> Bulk Upload
          </button>
        </div>
      </div>
      <div className="mt-4">
        <table className="table-auto border-collapse border border-[#c2c4c4] bg-[white] w-full">
          <thead>
            <tr>
              <th className="border border-[#c2c4c4] p-2 text-gray-700">
                Date Added
              </th>
              <th className="border border-[#c2c4c4] p-2 text-gray-700">
                Product
              </th>
              <th className="border border-[#c2c4c4] p-2 text-gray-700">
                No Sold
              </th>
              <th className="border border-[#c2c4c4] p-2 text-gray-700">
                In stock
              </th>
              <th className="border border-[#c2c4c4] p-2 text-gray-700">
                Price
              </th>

              <th className="border border-[#c2c4c4] p-2 text-gray-700"></th>
            </tr>
          </thead>
          <tbody>{productList}</tbody>
        </table>
      </div>
    </div>
  );
}
