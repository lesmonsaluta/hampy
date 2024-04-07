import { Navigate, createBrowserRouter, RouterProvider, redirect } from "react-router-dom"


import HomeScreen from './homescreen.tsx'
import LoginScreen from "./login.tsx"
import SignupScreen from "./signup.tsx"
import FullCloset from "./full-closet.tsx"
import FullHamper from "./full-hamper.tsx"
import AddToCloset from "./closet/addToCloset.tsx"
import LogoutScreen from "./logout.tsx"
import './App.css'

import { supabase } from './clients/supabaseClient'


async function secureLoader() {
  // const session = "fake"
  // const session = null
  // const error = undefined

  // Try to fetch the current session
  const { data: { session }, error } = await supabase.auth.getSession();

  console.log("Checking if logged in...");
  if (error) {
    throw error
  }
  if (session) {
    console.log("Success!");
    return null;
  } else {
    console.log("No session found, redirecting to login.");
    return redirect("/login");
  }
}

async function publicLoader() {
  // Try to fetch the current session
  const { data: { session }, error } = await supabase.auth.getSession();

  // Log for debugging purposes
  console.log("Checking if logged in...");
  if (error) {
    throw error
  }
  if (session) {
    console.log("Session found, logging you in...");
    return redirect("/home");
  } else {
    console.log("No session found, let's log in!");
    return null;
  }
}


const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to='/home' />,
    loader: publicLoader
  },
  {
    path: '/login',
    element: <LoginScreen />,
    loader: publicLoader
  },
  {
    path: '/signup',
    element: <SignupScreen />,
    loader: publicLoader
  },
  {
    path: '/home',
    element: <HomeScreen />,
    loader : secureLoader
  },  
  {
    path: '/closet',
    element: <FullCloset />,
    loader : secureLoader
  },
  {
    path: '/hamper',
    element: <FullHamper />,
    loader : secureLoader
  
  },
  {
    path: '/addtocloset',
    element: <AddToCloset />,
    loader : secureLoader
  },
  {
    path: '/logout',
    element: <LogoutScreen />,
    loader : secureLoader
  },
  {
    path: '/*',
    element: (
        <p>Naliligaw ka bai</p>
    )
  },
])



function App() {
  return (
    <RouterProvider router={router} />
    )
  }  
export default App
  
