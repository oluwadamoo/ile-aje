import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import {
  FaAddressCard,
  FaBook,
  FaHeart,
  FaHome,
  FaSearch,
  FaShoppingCart,
  FaUser,
} from "react-icons/fa";

export default () => {
  const router = useRouter();

  const bottomTabIcons = [
    { name: "Home", href: "/market/products", component: FaHome },
    { name: "Saved", href: "/market/saved", component: FaHeart },
    { name: "Orders", href: "/market/orders", component: FaBook },
    { name: "Cart", href: "/market/cart", component: FaShoppingCart },
    { name: "Me", href: "/market/profile", component: FaUser },
  ].map((tabIcon, index) => {
    return (
      <button
        className="bg-inherit flex flex-col items-center px-3"
        onClick={() => router.push(tabIcon.href)}
        key={index}
      >
        <tabIcon.component
          className="text-3xl mb-[10px]"
          color={
            router.pathname === tabIcon.href ||
              router.pathname.includes(tabIcon.href) || (tabIcon.name == 'Home' && router.pathname === '/market')
              ? "rgb(109 40 217)"
              : "rgb(148 163 184)"
          }
        />
        <h5
          className={`text-sm ${router.pathname === tabIcon.href ||
            router.pathname.includes(tabIcon.href)
            ? "text-violet-700"
            : "text-slate-400"
            }
          }`}
        >
          {tabIcon.name}
        </h5>
      </button>
    );
  });

  return (
    <div className="pt-[25px] px-[10px] flex sticky bottom-0 h-[80px] justify-between border-t-2 border-top-gray-200 w-full bg-[white]">
      {bottomTabIcons}
    </div>
  );
};
