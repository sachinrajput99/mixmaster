import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";
const HomeLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";
  // console.log(isPageLoading);
  return (
    <div>
      <Navbar />
      <section className="page">
        {/* class page sare pages k layout smbhata hai */}
        {/* koki har ek pages Outlet ko present kr rha hota hai */}

        {/* <Outlet context="hello"/> */}

        {/* setting the loading icon when data is being fetched */}
        {isPageLoading ? <div className="loading" /> : <Outlet />}
      </section>
    </div>
  );
};

export default HomeLayout;
