
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import ErrorPage from "./Pages/ErrorPage";
import ProductDetails from "./Pages/ProductDetails";
import ProductEditPage from "./Pages/ProductEditPage";
import Products from "./Pages/Products";
import Root from "./Pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children: [
      { path:"", element: <Home/> },
      { path: "products", element: <Products/> },
      { path: "products/:productID", element: <ProductDetails/> },
      { path: "products/edit/:productID", element: <ProductEditPage/> }
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router}/>
}
export default App;
