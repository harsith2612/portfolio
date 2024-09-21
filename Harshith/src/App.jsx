import Home from "./Components/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Project from "./Components/Project";
import About from "./Components/About";
import Contact from "./Components/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: < Home/>,
  },
  {
    path: "/projects",
    element: < Project/>,
  },
  {
    path: "/about",
    element: < About/>,
  },
  {
    path: "/contact",
    element: < Contact/>,
  },
]);
function App() {
  return (
    <div className="mx-auto lg:mx-24">
      <RouterProvider router={router} />
    </div>
    
  );
}

export default App;
