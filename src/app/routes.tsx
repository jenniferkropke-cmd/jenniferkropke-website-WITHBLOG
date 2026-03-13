import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/projects",
    Component: Projects,
  },
  {
    path: "/services",
    Component: Services,
  },
  {
    path: "/contact",
    Component: Contact,
  },
  {
    path: "/blog",
    Component: Blog,
  },
  {
    path: "/blog/:slug",
    Component: BlogPost,
  },
]);