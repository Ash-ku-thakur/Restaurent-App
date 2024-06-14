import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./Header";
import About from "./About";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Body from "./Body";
import RestaurentMenuList from "./RestaurentMenuList";
import { Provider } from "react-redux";
import Store from "./sliceStore/store";

let Main = () => {
  return (
    <Provider store={Store}>
      <div className="w-full">
        <Header />
        <div className="w-[80%] m-auto flex items-center justify-center">
          <Outlet />
        </div>
      </div>
    </Provider>
  );
};

let appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/restaurentCard/:id",
        element: <RestaurentMenuList />,
      },
    ],
  },
]);

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
