import {
  IoNotificationsSharp,
  IoSearchSharp,
  IoSettingsSharp,
} from "react-icons/io5";

export default () => {
  return (
    <div className="flex pl-[2%] h-[100px] items-center pr-[2%]">
      {/* Logo */}
      <div className="mr-[5%] p-[15px]">
        <h4>Organization 1</h4>
      </div>
      {/* Welcome */}
      <div className="flex-1">
        <h3 className="text-3xl font-bold">Admin Dashboard</h3>
        <h6 className="text-lg text-[#a9abab] italic">Welcome Omolola</h6>
      </div>

      {/* icons */}
      <div className="flex items-center ">
        <button className="border  border-[#bababa] p-1 rounded-[5px]">
          <IoSearchSharp size={20} />
        </button>
        <button className="border ml-[10px] border-[#bababa] p-1 rounded-[5px]">
          <IoSettingsSharp size={20} />
        </button>
        <button className="border ml-[10px] border-[#bababa] p-1 rounded-[5px]">
          <IoNotificationsSharp size={20} />
        </button>
      </div>
    </div>
  );
};
