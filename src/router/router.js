import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Projects from "../pages/Projects";

const router = createBrowserRouter([
  {
    path: '',
    children: [
      {
        path: '',
        Component: Home
      },
      {
        path: 'last-projects',
        Component: Projects
      }
    ]
  }
])

export default router