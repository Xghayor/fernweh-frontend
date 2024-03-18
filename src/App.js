import './App.css';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from './components/Header/Navbar';
import Hero from './components/HeroSection/Hero';
import Blogs from './components/Blogs/Blogs'

const Layout = () => {
  return (
    <div>
        <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <>
            <Hero />
            <Blogs />
          </>
        )
      }
    ],
  },
]);



function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
