"use client"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Eye, EyeOff, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import WebLogo from "../_components/WebLogo"

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false)

    return (
        <div className="min-h-screen flex flex-col lg:flex-row">
            {/* Left side - Background and quote */}
            <div className="relative w-full lg:w-3/5 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-6 md:p-12 flex flex-col">
                {/* Logo */}
                <Link href="/">
                    <WebLogo />
                </Link>

                {/* Quote section */}
                <div className="flex-grow flex flex-col justify-center items-center text-center md:text-left md:items-start max-w-2xl mx-auto md:mx-0">
                    <div className="mb-12">
                        <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-6">
                            After Decades In The Industry, I Saw Firsthand How Mineral Owners Are At A{" "}
                            <span className="text-teal-400">Massive Disadvantage</span> Compared To Operators.
                        </h1>
                        <p className="text-gray-300 text-lg md:text-xl">
                            Mineral View Was Built To Level The Playing Field—Giving Owners The Data And Insights They Need To Make
                            Informed Decisions About Their Assets.
                        </p>
                    </div>

                    {/* CEO section */}
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="relative w-20 h-20 rounded-lg overflow-hidden">
                            <Image
                                src="https://res.cloudinary.com/mineralview/image/upload/rayan.webp"
                                alt="Ryan Cochran"
                                width={667}
                                height={590}
                                className="object-cover object-center absolute inset-0"
                                sizes="80px"
                                priority
                            />
                        </div>
                        <div className="text-center md:text-left">
                            <h3 className="text-white text-xl font-bold">Ryan Cochran</h3>
                            <p className="text-teal-400">CEO</p>
                        </div>
                    </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-gray-900/80 to-transparent pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-1/2 h-full bg-[url('/grid.svg')] bg-center opacity-5 pointer-events-none"></div>
            </div>

            {/* Right side - Login form */}
            <div className="w-full lg:w-2/5 bg-gray-950 flex items-center justify-center p-6 md:p-12">
                <div className="w-full max-w-md bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl shadow-2xl p-8 border border-gray-800">
                    <div className="text-center mb-8">
                        <h2 className="text-teal-400 text-2xl font-bold mb-1">LOGIN</h2>
                        <h3 className="text-white text-lg">WELCOME TO MVIEW</h3>
                    </div>

                    {/* Google sign in button */}
                    <button className="w-full flex items-center justify-center bg-white hover:bg-gray-100 text-gray-800 font-medium py-3 px-4 rounded-lg mb-6 transition-colors">
                        <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                            <path
                                fill="#4285F4"
                                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                            />
                            <path
                                fill="#34A853"
                                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                            />
                            <path
                                fill="#FBBC05"
                                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                            />
                            <path
                                fill="#EA4335"
                                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                            />
                        </svg>
                        Sign up with Google
                    </button>

                    <div className="relative flex items-center justify-center mb-6">
                        <div className="flex-grow border-t border-gray-700"></div>
                        <span className="flex-shrink mx-4 text-gray-400 text-sm">OR CONTINUE WITH</span>
                        <div className="flex-grow border-t border-gray-700"></div>
                    </div>

                    {/* Login form */}
                    <form>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">
                                Email <span className="text-teal-500">*</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                                className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                                required
                            />
                        </div>

                        <div className="mb-6">
                            <label htmlFor="password" className="block text-gray-300 mb-2 font-medium">
                                Password <span className="text-teal-500">*</span>
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    placeholder="Enter your password"
                                    className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                                    required
                                />
                                <button
                                    type="button"
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>
                        </div>

                        <Button
                            type="submit"
                            className="w-full bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-500 hover:to-teal-400 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 mb-4"
                        >
                            Login
                        </Button>

                        <div className="text-center">
                            <Link href="/forgot-password" className="text-teal-400 hover:text-teal-300 text-sm transition-colors">
                                Forgot Password?
                            </Link>

                            <div className="mt-6 text-gray-400 text-sm">
                                Don't have an account?{" "}
                                <Link
                                    href="/register"
                                    className="text-teal-400 hover:text-teal-300 font-medium inline-flex items-center transition-colors"
                                >
                                    Register for Free
                                    <ChevronRight className="h-4 w-4 ml-1" />
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
