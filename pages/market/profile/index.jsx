import { useState } from "react";
import { FaPen, FaRegWindowClose, FaWindowClose } from "react-icons/fa";
import { GrClose, GrEdit } from "react-icons/gr";
import { MdClose, MdEdit } from "react-icons/md";
import { SlClose, SlPencil } from "react-icons/sl";
import { VscClose, VscEdit } from "react-icons/vsc";
import Header from "../../../components/market/header";

export default () => {
  const [full_name, setFullname] = useState("");
  const [allow_update, setAllowUpdate] = useState(false);
  const [email, setEmail] = useState("");
  const [full_address, setFullAddress] = useState("");
  const [phone_number, setPhonenumber] = useState("");
  const [state, setState] = useState("");
  return (
    <div className="h-full w-full flex flex-col">
      <Header />
      {/* <h3 className="px-4 text-2xl  font-bold h-text text-gray-500">Profile</h3> */}

      {/* Profile Picture */}
      <div className="flex justify-center mt-[30px]">
        <div className="w-[110px] h-[110px] flex items-center justify-center rounded-full border-[3px] border-violet-700">
          <img
            src={
              "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
            }
            className="w-[100px] h-[100px] rounded-full "
          />
        </div>
      </div>

      {/* User data */}

      <button
        onClick={() => setAllowUpdate((prev) => !prev)}
        className="font-bold self-end mt-4 p-2 bg-gray-100 text-gray-500 active:bg-gray-300 rounded-full"
      >
        {allow_update ? (
          <GrClose title="close edit" />
        ) : (
          <GrEdit title="edit fields" />
        )}
      </button>
      <form>
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-[#1a335b]">
            Full name <span className="text-[red]">*</span>
          </label>
          <input
            value={full_name}
            disabled={!allow_update}
            onChange={(e) => setFullname(e.target.value)}
            required
            type="text"
            id="name"
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                focus:invalid:border-pink-500 focus:invalid:ring-pink-500
            "
          />
        </div>

        {/*Email  */}
        <div className="mt-4">
          <label htmlFor="email" className="block text-[#1a335b]">
            Email <span className="text-[red]">*</span>
          </label>
          <input
            value={email}
            disabled={!allow_update}
            onChange={(e) => setEmail(e.target.value)}
            required
            type="email"
            id="email"
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                focus:invalid:border-pink-500 focus:invalid:ring-pink-500
            "
          />
        </div>

        {/*Email  */}
        <div className="mt-4">
          <label htmlFor="phone" className="block text-[#1a335b]">
            Phone Number <span className="text-[red]">*</span>
          </label>
          <input
            value={phone_number}
            disabled={!allow_update}
            onChange={(e) => setPhonenumber(e.target.value)}
            required
            type="tel"
            id="phone"
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                focus:invalid:border-pink-500 focus:invalid:ring-pink-500
            "
          />
        </div>

        {/*Email  */}
        <div className="mt-4">
          <label htmlFor="address" className="block text-[#1a335b]">
            Full Address <span className="text-[red]">*</span>
          </label>
          <input
            value={full_address}
            disabled={!allow_update}
            onChange={(e) => setFullAddress(e.target.value)}
            required
            type="text"
            id="address"
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                focus:invalid:border-pink-500 focus:invalid:ring-pink-500
            "
          />
        </div>

        <div className="mt-4">
          <label htmlFor="state" className="block text-[#1a335b]">
            State <span className="text-[red]">*</span>
          </label>
          <input
            disabled={!allow_update}
            value={state}
            onChange={(e) => setState(e.target.value)}
            required
            type="text"
            id="state"
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                focus:invalid:border-pink-500 focus:invalid:ring-pink-500
            "
          />
        </div>

        {allow_update && (
          <button className="w-full active:bg-violet-700 bg-violet-800 text-[white] h-[40px] mt-10 rounded-md font-bold text-lg">
            Update
          </button>
        )}
      </form>
    </div>
  );
};
