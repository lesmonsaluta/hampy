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


// function PrivateRoute({ children } : any) {
//   const [session, setSession] = React.useState<Session | null>(null)
//   supabase.auth.getSession().then(({ data: { session } }) => {
//     setSession(session)
//   })
//   console.log("Checking if logged in")
//   if (session) {
//     console.log("Success!")
//   }

//   return session ? children : <Navigate to='/login' />
// }

async function secureLoader() {
  // Try to fetch the current session
  const { data: { session }, error } = await supabase.auth.getSession();
  // const session = "fake"
  // const session = null
  // const error = undefined

  // Log for debugging purposes
  console.log("Checking if logged in");
  if (error) {
    throw error
  }
  if (session) {
    console.log("Success!");
    // If a session exists, no need to redirect, the loader can return undefined or some data
    return null;
  } else {
    console.log("No session found, redirecting to login.");
    // If there is no session, return an object with a redirect property
    return redirect("/login");
  }
}

async function publicLoader() {
  // Try to fetch the current session
  const { data: { session }, error } = await supabase.auth.getSession();

  // Log for debugging purposes
  console.log("Checking if logged in");
  if (error) {
    throw error
  }
  if (session) {
    console.log("Session found, logging you in");
    // If there is no session, return an object with a redirect property
    return redirect("/home");
  } else {
    console.log("No session found, let's log in!");
    // If a session exists, no need to redirect, the loader can return undefined or some data
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

const checkAuthHealth = async () => {
  // if (error) {
  //   console.error('Failed to fetch user:', error.message);
  //   return;
  // }

  // if (user) {
  //   console.log('Successfully fetched user:', user);
  // } else {
  //   console.log('No user is currently logged in.');
  // }
};


function App() {
  checkAuthHealth()

  return (
    <RouterProvider router={router} />
    )
  }  
export default App
  
  
  // <div className="App">
  //   <Routes>
  //     <Route path="/" element={<Navigate replace to="/home" />} />
  //     <Route path="/home" element= { session ? <HomeScreen /> : <Navigate replace to="/login" /> } />
  //     <Route path="/login" element= { <LoginScreen /> } />
  //     <Route path="/signup" element= { <SignupScreen /> } />
  //     <Route path="/closet" element= { <FullCloset /> } />
  //     <Route path="/hamper" element= { <FullHamper /> } />
  //     <Route path="/addtocloset" element= { <AddToCloset /> } />
  //     {/* <Route path="/sandbox" element = { <Sandbox /> } /> */}
  //   </Routes>
  // </div>