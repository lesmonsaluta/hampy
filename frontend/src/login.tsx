import Image from "./assets/login.jpg";
import HampyLogo from "./assets/hampy.png";

import { useNavigate } from 'react-router-dom';

import React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";


import { supabase } from './clients/supabaseClient'

function LoginScreen() {
    // console.log(supabase)
    const navigate = useNavigate()

    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        // submission thing

        setUsername('')
        setPassword('')
        event.preventDefault()
        console.log("Submitted!")
        // console.log(event)
        

        const { data, error } = await supabase.auth.signInWithPassword({
            email: "lesmonsalutalalls@gmail.com",
            password: "short",
            // email: username,
            // password: password,
          })
        
        console.log("request sent")
        console.log(data)
        if (error) {
            console.error('Login error:', error.message);
        } else {
            console.log('Login successful:', data);
            navigate("/home", { replace: true }); // This forces a redirect to the login page
        }
    }

    return (
        <div className="w-full bg-sky-200 lg:grid lg:grid-cols-2 lg:min-h-screen xl:min-h-screen">
            <div className="flex items-center justify-center min-h-screen py-12 lg:min-h-0 lg:py-0">
                <form onSubmit={handleSubmit} className="mx-auto grid w-[350px] gap-6">
                    <img src={HampyLogo} alt="Hampy Logo" className="rounded-xl"/>
                    <div className="grid gap-2 text-center">
                        <h1 className="text-3xl font-bold">Login</h1>
                        <p className="text-balance text-muted-foreground">
                            Enter your username below to login
                        </p>
                    </div>
                    <div className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="username">Username</Label>
                            <Input
                                id="username"
                                type="text" // Changed type to "text" for username
                                placeholder="Your Alias Here"
                                className="bg-gray-100"
                                value={username}
                                onChange={(event) => {
                                    // console.log("Change username")
                                    // console.log(event.target.value)
                                    setUsername(event.target.value);
                                }}
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <div className="flex items-center">
                                <Label htmlFor="password">Password</Label>
                                {/* Placeholder for forgot password link */}
                            </div>
                            <Input 
                                id="password" 
                                type="password" 
                                className="bg-gray-100"
                                value={password}
                                onChange={(event) => {
                                    // console.log("Change password")
                                    // console.log(event.target.value)
                                    setPassword(event.target.value);
                                }}
                                required />
                        </div>
                        <Button type="submit" className="w-full">
                            Login
                        </Button>
                    </div>
                    <div className="mt-4 text-sm text-center">
                        Don't have an account?{" "}
                        {/* Placeholder for sign up link */}
                    </div>
                </form>
            </div>
            <div className="hidden lg:block lg:min-h-screen">
                <img
                    src={Image}
                    alt="Decorative"
                    className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                />
            </div>
        </div>
    );
}

export default LoginScreen;
