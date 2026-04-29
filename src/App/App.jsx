import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import PageTransition from "../components/PageTransition/PageTransition";

import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";
import MarketPlace from "../pages/MarketPlace/MarketPlace";
import MarketDetail from "../pages/MarketPlace/MarketDetail";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";

import "./App.css";

export default function App() {
  const location = useLocation();
  const { t } = useTranslation();

  return (
    <div className="app">
      <Navbar />

      <main className="app__main">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <PageTransition>
                  <Home />
                </PageTransition>
              }
            />

            <Route
              path="/products"
              element={
                <PageTransition>
                  <Products />
                </PageTransition>
              }
            />

            <Route
              path="/marketplace"
              element={
                <PageTransition>
                  <MarketPlace />
                </PageTransition>
              }
            />

            <Route
              path="/marketplace/:slug"
              element={
                <PageTransition>
                  <MarketDetail />
                </PageTransition>
              }
            />

            <Route
              path="/about"
              element={
                <PageTransition>
                  <About />
                </PageTransition>
              }
            />

            <Route
              path="/contact"
              element={
                <PageTransition>
                  <Contact />
                </PageTransition>
              }
            />

            <Route
              path="*"
              element={
                <PageTransition>
                  <section className="page-fallback">
                    <div className="container">
                      <div className="page-fallback__box glass-panel glass-panel--strong">
                        <h1>404</h1>
                        <p>{t("common.noResult")}</p>
                      </div>
                    </div>
                  </section>
                </PageTransition>
              }
            />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}