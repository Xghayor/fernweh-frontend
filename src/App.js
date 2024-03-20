import './App.css';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from './components/Header/Navbar';
import Hero from './components/HeroSection/Hero';
import Blogs from './components/Blogs/Blogs'
import Footer from './components/Footer/Footer'
import Articles from './components/Articles/Articles';
import Login from './components/Auth/login'

const Layout = () => {
  return (
    <div>
        <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
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
      },
      {
        path: "/articles",
        element: (
          <>
           <Articles />
          </>
        )
      },
      {
        path: "/login",
        element: (
          <>
           <Login />
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
