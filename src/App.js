import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import Header from "./root/components/header/Header";
import Hero from "./root/components/hero/Hero";
import Review from "./root/components/review/Review";
import Shop from "./root/components/shop/Shop";
import Info from "./root/components/info/Info";
import Trending from "./root/components/trending/Trending";
import Mission from "./root/components/mission/Mission";
import Magazine from "./root/components/magazine/Magazine";
import Footer from "./root/components/footer/Footer";
import SignupForm from "./Auth/forms/SignupForm";
import SigninForm from "./Auth/forms/SigninForm";
import Product1 from "./root/components/bottle/Product1";
import ShopAll from "./root/components/shopall/ShopAll";
import AuthLayout from "./Auth/AuthLayout";
import Product2 from "./root/components/bottle/Product2";
import Product3 from "./root/components/bottle/Product3";
import ScrollButton from "./root/components/scrollButton/ScrollButton";
import Product6 from "./root/components/bottle/Product6";
import Product4 from "./root/components/bottle/Product4";
import Product5 from "./root/components/bottle/Product5";
import Product7 from "./root/components/bottle/Product7";
import CheckOut from "./root/components/checkout/CheckOut";
import Tecnolo from "./root/components/techno/Tecnolo";

// import Trending2 from "./root/components/shopall/Trending2";
// import Cart from "./root/components/cart/Cart";

const App = () => {
  return (
    <div>
      {/* <Header /> */}
      <Routes>
        <Route
          path="/techno"
          element={
            <>
              <Header />
              <Tecnolo />
              <Footer />
            </>
          }
        />
        <Route
          path="/"
          element={
            <>
              <Header />
              <Hero />
              <Review />
              <Shop />
              <Info />
              <Trending />
              <Mission />
              <Magazine />
              <Footer />
            </>
          }
        />
        <Route element={<AuthLayout />}>
          <Route
            path="/signin"
            element={
              <>
                <Header />

                <SigninForm />

                <Footer />
              </>
            }
          />
          <Route
            path="/signup"
            element={
              <>
                <Header />

                <SignupForm />
                <Footer />
              </>
            }
          />
        </Route>
        <Route>
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <CheckOut />
              </>
            }
          />
        </Route>
        <Route
          path="/bottle3"
          element={
            <>
              <Header />

              <Product3 />
              <Footer />
            </>
          }
        />
        <Route
          path="/bottle2"
          element={
            <>
              <Header />

              <Product2 />
              <Footer />
            </>
          }
        />
        <Route
          path="/bottle1"
          element={
            <>
              <Header />

              <Product1 />
              <Footer />
            </>
          }
        />
        <Route
          path="/bottle4"
          element={
            <>
              <Header />

              <Product4 />
              <Footer />
            </>
          }
        />
        <Route
          path="/bottle5"
          element={
            <>
              <Header />

              <Product5 />
              <Footer />
            </>
          }
        />
        <Route
          path="/bottle6"
          element={
            <>
              <Header />

              <Product6 />
              <Footer />
            </>
          }
        />
        <Route
          path="/bottle7"
          element={
            <>
              <Header />

              <Product7 />
              <Footer />
            </>
          }
        />
        <Route
          path="/shopLarq"
          element={
            <>
              <Header />

              <ShopAll />

              <Footer />
            </>
          }
        />
      </Routes>
      {/* <Footer /> */}
      <ScrollButton />
    </div>
  );
};

export default App;
