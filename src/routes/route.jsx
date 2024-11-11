import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Contacts from "../pages/contacts";

const Rotas = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contacts",
    element: <Contacts />,
  }
]);

export default Rotas;

