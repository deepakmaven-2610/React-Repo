import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import ProductPage from "./pages/Products";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Errror";
import ProductDetailPage from "./pages/ProductDetail";

const router = createBrowserRouter([
  {
  path:'/', 
  element: <RootLayout/>,
  errorElement: <ErrorPage/>,
  children: [
    {index: true,  element: <HomePage/>},  //by default this index route would be send
    {path: '/products', element: <ProductPage />},
    {path: '/products/:productId', element: <ProductDetailPage/>}  //dynamic route
            ],
  },
]);

function App() {
  return <RouterProvider router={router}/>;
}

export default App;
