
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import ErrorPage from "./Pages/ErrorPage";
import ProductEditPage from "./Pages/ProductEditPage";
import Products from "./Pages/Products";
import Root from "./Pages/Root";
import AddProductPage from "./Pages/AddProductPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children: [
      { path:"", element: <Home/> },
      { path: "products", element: <Products/> },
      { path: "products/add", element: <AddProductPage/> },
      { path: "products/edit/:productID", element: <ProductEditPage/> }
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router}/>
}
export default App;
