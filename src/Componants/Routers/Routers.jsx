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
import Extra from "../Extra/Extra";
import PrivetRoute from "./PrivetRoute";
import Dashboard from "../Layout/Dashboard";
import DashboardCart from "../Dashboard/DashboardCart/DashboardCart";
import AddProduct from "../Dashboard/AddProduct/AddProduct";
import AdminHome from "../Dashboard/AdminHome/AdminHome";


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
      },
      {
        path: '/extra',
        element: <PrivetRoute><Extra></Extra></PrivetRoute>
      }
    ]
  },
  {
    path: '/dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: '/dashboard/adminHome',
        element: <AdminHome></AdminHome>
      },
      {
        path: '/dashboard/dashboardCart',
        element: <DashboardCart></DashboardCart>
      },
      {
        path: '/dashboard/addProduct',
        element: <AddProduct></AddProduct>
      }
    ]
  }
]);