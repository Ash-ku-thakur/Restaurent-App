import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import Header from "./Header";
import About from "./About";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

let Main = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

let appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
