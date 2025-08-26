import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import { createRoot } from 'react-dom/client'
import { ClerkProvider } from '@clerk/clerk-react'



import './index.css'
import Layout from "./layout/Layout.tsx";
import Homepage from "./routes/Homepage.tsx";
import Login from "./routes/Login.tsx";
import Register from "./routes/Register.tsx";
import Write from "./routes/Write.tsx";
import Posts from "./routes/Posts.tsx";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Invalid or missing VITE_CLERK_PUBLISHABLE_KEY')
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: '/writeblog',
        element: <Write />,
      },
      {
        path: '/posts',
        element: <Posts />,
      },
      {},
    ]
  }
])

createRoot(document.getElementById('root')!).render(
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <RouterProvider router={router} />
    </ClerkProvider>
)

