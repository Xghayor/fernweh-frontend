import './App.css';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from './components/Header/Navbar';
import Hero from './components/HeroSection/Hero';
import Articles from './components/Articles/Articles'
import Footer from './components/Footer/Footer'
import Article from './components/Article/Article';
import Login from './components/Auth/login'
import Signup from './components/Auth/Signup';
import Profile from './components/Profile/Profile'

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
            <Articles />
          </>
        )
      },
      {
        path: "/articles/:postId",
        element: <Article />
      },
      {
        path: "/login",
        element: (
          <>
           <Login />
          </>
        )
      },
      {
        path: "/signup",
        element: (
          <>
           <Signup />
          </>
        )
      },
      {
        path: "/profile",
        element: (
          <>
           <Profile />
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
