import { useRouter } from "next/router";

import {
  FaBriefcase,
  FaMotorcycle,
  FaShoppingBag,
  FaUsers,
} from "react-icons/fa";

const AdminSidebar = ({ organization }) => {
  const router = useRouter();

  const sidebarItems = [
    {
      name: "Dashboard",
      href: `/admin`,
      component: FaBriefcase,
    },
    {
      name: "Products",
      href: `/admin/products`,
      component: FaShoppingBag,
    },
    {
      name: "Customers",
      href: `/admin/customers`,
      component: FaUsers,
    },
    {
      name: "Deliveries",
      href: `/admin/deliveries`,
      component: FaMotorcycle,
    },
  ].map((icon, index) => {
    return (
      <button
        key={index}
        className={`flex mb-[10px] w-[150px] h-[50px] rounded-[10px] items-center ${
          router.pathname === icon.href ? "bg-[#000]" : "bg-[#fff]"
        }`}
        onClick={() => router.push(icon.href)}
      >
        <icon.component
          size={`${router.pathname === icon.href ? 22 : 20}`}
          className="ml-[15px]"
          color={`${router.pathname === icon.href ? "#fff" : "#a9abab"}`}
        />
        <h5
          className={`ml-[10px]  ${
            router.pathname === icon.href
              ? "text-[#fff] text-lg"
              : "text-[#a9abab]"
          }`}
        >
          {icon.name}
        </h5>
      </button>
    );
  });

  return (
    <div className="hidden sm:block pl-[2%] mr-[2%] p-[15px]">
      {sidebarItems}
    </div>
  );
};

export default AdminSidebar;
