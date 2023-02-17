import { Provider } from "react-redux";

import { useRouter } from "next/router";
import { store } from "../app/store";
import { AdminSidebar, AdminHeader } from "../components";
import Footer from "../components/market/footer";
import "../styles/global.css";

const AppComponent = ({ Component, pageProps }) => {
  const router = useRouter();
  const showSidebar = router.pathname.includes("admin") ? true : false;
  const showAdminHeader = router.pathname.includes("admin") ? true : false;
  const showMarketFooter = router.pathname.includes("market") ? true : false;
  const wrapMarket = router.pathname.includes("market") ? true : false;
  return (
    <Provider store={store}>
      {showAdminHeader && <AdminHeader />}
      <div className="flex ">
        {showSidebar && <AdminSidebar />}
        {wrapMarket ? (
          <div className="flex w-full min-h-[100vh] justify-center bg-[#fff]">
            <div className="relative sm:w-[600px] h-full  w-full drop-shadow-sm rounded-[2px] bg-[#fff]">
              <Component {...pageProps} />
              <Footer />
            </div>
          </div>
        ) : (
          <Component {...pageProps} />
        )}
      </div>
    </Provider>
  );
};

export default AppComponent;
