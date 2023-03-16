import styles from "@/styles/Home.module.css";
import Navbar from "../components/navbar";
import ProductsDetail from "../features/productsDetail";
//Redux
import { Provider } from "react-redux";
import { store } from "./store";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { productsApi } from "../redux/apiSlice";
import CategoriesNavbar from "@/components/categoriesNavbary";

export default function Home() {
  return (
    <>
      <Provider store={store}>
        <ApiProvider api={productsApi}>
          <Navbar />
          <CategoriesNavbar />
          <ProductsDetail />
        </ApiProvider>
      </Provider>
    </>
  );
}
