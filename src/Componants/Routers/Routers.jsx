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
import AllProducts from "../Dashboard/AllProducts/AllProducts";
import AllUsers from "../Dashboard/AllUsers/AllUsers";
import MyProfile from "../Dashboard/MyProfile/MyProfile";
import Payment from "../Dashboard/Payment/Payment";
import PaymentHistory from "../Dashboard/PaymentHistory/PaymentHistory";
import AddReview from "../Dashboard/AddReview/AddReview";
import AdminRoute from "./AdminRoute";


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
        path: '/products/singleProduct/:id/:category',
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
    element: <PrivetRoute><Dashboard></Dashboard></PrivetRoute>,
    children: [
      // admin related
      {
        path: '/dashboard/adminHome',
        element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
      },
      {
        path: '/dashboard/addProduct',
        element: <AdminRoute><AddProduct></AddProduct></AdminRoute>
      },
      {
        path: '/dashboard/allProducts',
        element: <AdminRoute><AllProducts></AllProducts></AdminRoute>
      },
      {
        path: '/dashboard/allUsers',
        element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
      },

      // user related
      {
        path: '/dashboard/myProfile',
        element: <MyProfile></MyProfile>
      },
      {
        path: '/dashboard/orderProduct',
        element: <DashboardCart></DashboardCart>
      },
      {
        path: '/dashboard/payment',
        element: <Payment></Payment>
      },
      {
        path: '/dashboard/paymentHistory',
        element: <PaymentHistory></PaymentHistory>
      },
      {
        path: '/dashboard/addReview',
        element: <AddReview></AddReview>
      },
    ]
  }
]);