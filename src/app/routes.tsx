import { lazy } from "react";
import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";

const Home = lazy(() => import("./pages/Home").then(m => ({ default: m.Home })));
const Catalog = lazy(() => import("./pages/Catalog").then(m => ({ default: m.Catalog })));
const DJs = lazy(() => import("./pages/DJs").then(m => ({ default: m.DJs })));
const Gallery = lazy(() => import("./pages/Gallery").then(m => ({ default: m.Gallery })));
const Quiz = lazy(() => import("./pages/Quiz").then(m => ({ default: m.Quiz })));
const Contact = lazy(() => import("./pages/Contact").then(m => ({ default: m.Contact })));
const NotFound = lazy(() => import("./pages/NotFound").then(m => ({ default: m.NotFound })));

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "catalogo", Component: Catalog },
      { path: "djs", Component: DJs },
      { path: "galeria", Component: Gallery },
      { path: "test", Component: Quiz },
      { path: "contacto", Component: Contact },
      { path: "*", Component: NotFound },
    ],
  },
]);
