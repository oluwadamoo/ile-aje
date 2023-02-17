import { products } from "../../data/products";
import {
  FaEdit,
  FaEye,
  FaMailchimp,
  FaPhone,
  FaPlus,
  FaShirtsinbulk,
  FaTrash,
} from "react-icons/fa";
import { customers } from "../../data/customers";
import { RiMessage2Fill } from "react-icons/ri";
import { IoMail } from "react-icons/io5";
import { useState } from "react";

export default () => {
  const [selectedCustomers, setSelectedCustomers] = useState([]);
  const customerList = customers.map((customer, index) => {
    return (
      <tr
        key={index}
        className={`${
          index % 2 !== 0 ? "bg-gray-100 hover:bg-gray-50" : "hover:bg-gray-50"
        } `}
      >
        <td className="border border-[#c2c4c4] p-1 px-2 text-center">
          <button
            className={`w-[20px] h-[20px] ${
              selectedCustomers.includes(customer)
                ? "bg-[#328cc8]"
                : "bg-[#c7c7c7]"
            }`}
            onClick={() => {
              if (!selectedCustomers.includes(customer)) {
                setSelectedCustomers((prev) => [...prev, customer]);
              } else {
                setSelectedCustomers((prev) =>
                  prev.filter((p) => p != customer)
                );
              }
            }}
          />
        </td>
        <td className="border border-[#c2c4c4] p-1 px-2">
          <h4 className="text-gray-700">{customer.date}</h4>
        </td>
        <td className="border border-[#c2c4c4] p-2  text-center">
          {customer.name}
        </td>
        <td className="border border-[#c2c4c4] p-1   text-center">
          {customer.email}
        </td>
        <td className="border border-[#c2c4c4] p-1  text-center">
          {customer.phone}
        </td>

        <td className="border border-[#c2c4c4] p-2  font-bold text-gray-700">
          {customer.location}
        </td>
        <td className="border border-[#c2c4c4] p-2 font-bold text-gray-700">
          <button className="rotate-90 cursor-pointer hover:text-xl">
            <FaPhone />
          </button>
          <button className="cursor-pointer text-lg hover:text-xl block">
            <IoMail />
          </button>
        </td>
      </tr>
    );
  });

  return (
    <div className="p-[15px] pr-[5%] w-full">
      <div className="flex justify-between">
        <h3 className=" text-2xl font-bold h-text mb-[40px]">Customers</h3>

        <div className="flex items-center">
          <button className="flex items-center font-bold bg-[#07adf5] text-[white] h-[40px] w-[140px] justify-center shadow-md rounded-[10px] active:shadow-sm">
            <FaPlus className="mr-[5px]" /> Add New
          </button>
          <button className="ml-[20px] flex items-center font-bold bg-[#4facf8] text-[white] h-[40px] w-[140px] justify-center shadow-md rounded-[10px] active:shadow-sm">
            <FaShirtsinbulk className="mr-[5px]" /> Bulk Upload
          </button>
        </div>
      </div>
      <div
        className="mt-4"
        style={{
          overflowX: "scroll",
        }}
      >
        <table
          className="table-auto border-collapse border border-[#c2c4c4] bg-[white] w-full"
          style={{
            overflowX: "scroll",
          }}
        >
          <thead>
            <tr>
              <th className="border border-[#c2c4c4] p-2 text-gray-700"></th>
              <th className="border border-[#c2c4c4] p-2 text-gray-700">
                Date Joined
              </th>
              <th className="border border-[#c2c4c4] p-2 text-gray-700">
                Full Name
              </th>
              <th className="border border-[#c2c4c4] p-2 text-gray-700">
                Email
              </th>
              <th className="border border-[#c2c4c4] p-2 text-gray-700">
                Phone
              </th>
              <th className="border border-[#c2c4c4] p-2 text-gray-700">
                Location/Address
              </th>

              <th className="border border-[#c2c4c4] p-2 text-gray-700"></th>
            </tr>
          </thead>
          <tbody>{customerList}</tbody>
        </table>
      </div>
    </div>
  );
};
