import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/homepage";
import Contacts from "../pages/contacts";
import Galery from "../pages/galery";
import About from "../pages/about";

const Rotas = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contacts",
    element: <Contacts />,
  },
  {
    path: "/galery",
    element: <Galery />,
  },
  {
    path: "/about",
    element: <About />,
  }
]);

export default Rotas;

