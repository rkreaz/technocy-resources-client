import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Home/Home/Home";
import ErrorPage from "../ErrorPage/ErrorPage";
import Products from "../Products/Products";
import Contact from "../Contact/Contact";
import ProductDetails from "../Home/ProductDetails/ProductDetails";
import Login from "../Login/Login";
import Register from "../Register/Register";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/products/:category',
        element: <Products></Products>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/details/:id',
        element: <ProductDetails></ProductDetails>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      }
    ]
  },
]);