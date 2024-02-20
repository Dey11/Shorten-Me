import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { UserContextProvider } from "./UserContext";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Shorten from "./pages/Shorten";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import MyLinks from "./pages/MyLinks";
import Error from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shorten",
        element: <Shorten />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/my-links",
        element: <MyLinks />,
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <UserContextProvider>
        <RouterProvider router={router} />
      </UserContextProvider>
    </>
  );
}

export default App;
