import React from "react";

import { RiArrowRightUpLine, RiArrowRightDownLine } from "react-icons/ri";
const AdminCard = ({ data }) => {
  return (
    <div className="shadow-sm min-w-[300px] min-h-[100px] p-[20px] bg-[#7ef6f8] rounded-[10px] ml-[10px]">
      <p className="text-sm">{data.label}</p>
      <h3 className="mt-[5px] text-xl font-bold">
        &#8358;{data.value.toLocaleString("en-US")}
      </h3>
      <div className="flex flex-col">
        <div className="self-end w-[50px] flex items-center">
          {parseInt(data.growth) > 0 ? (
            <RiArrowRightUpLine color="green" />
          ) : (
            <RiArrowRightDownLine color="red" />
          )}
          <span
            className={`text-sm ${
              parseInt(data.growth) > 0 ? "text-[green]" : "text-[red]"
            }`}
          >
            {" "}
            {data.growth}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default AdminCard;
