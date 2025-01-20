import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { useState , useEffect } from "react";
import { motion } from "framer-motion";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import TodoPage from "./components/TodoPage";
import Error from "./components/Error";
import styles from "./styles/styles.css";

const AppLayout = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

return (
  <div className="main">
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{
        textAlign: "center",
        position: "fixed",
        top: 10,
        width: "100%",
        zIndex: 1000,
      }}
    >
      <Header />
    </motion.header>
    <Outlet/>
    <Footer />
  </div>
);
};

const appRouter = createBrowserRouter(
  [
    {
      path:"/",
      element:<AppLayout />,
      children: [
        {
          path:"/",
          element:<Body />,
        },
        {
          path:"/user/signup",
          element:<SignUp />,
        },
        {
          path:"/user/signin",
          element:<SignIn />,
        },
        {
          path:"/user/mytodo",
          element:<TodoPage />,
        },
      ]
    }
  ]
)


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
