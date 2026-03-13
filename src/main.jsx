import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router';
import Home from './component/Home/Home.jsx';
import Root from './component/Root/Root.jsx';
import Login from './component/Login/Login.jsx';
import SignUp from './component/SignUp/SignUp.jsx';
import AuthProvider from './Auth/AuthProvider.jsx';
import Profile from './component/profile/Profile.jsx';
import DeshBoard from './component/Deshboard/DeshBoard.jsx';
import PriveatRoute from './Route/PriveatRoute.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "login", Component: Login },
      { path: "signup", Component: SignUp },
      { path: "profile", element:<PriveatRoute><Profile></Profile></PriveatRoute> },
      { path: "deshboard", element: <PriveatRoute><DeshBoard></DeshBoard></PriveatRoute> }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
