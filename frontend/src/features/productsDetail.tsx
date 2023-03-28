import { useGetAllProductsQuery } from "../redux/apiSlice";
import ProductsList from "../components/productsList";
export default function ProductsDetails() {
  const { data: products, isLoading, error } = useGetAllProductsQuery();
  //Loading data
 
 
  //Handling errors
  if (error && error.status === 404) {
    return <div>Products not found</div>;
  } else if (error) {
    return <div>{error}</div>;
  }

  return <ProductsList data={products} loading={isLoading} />;
}
