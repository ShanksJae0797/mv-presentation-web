"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { navigationMenuData } from "@/data/data"
import { NavigationMenuInterface } from "@/types/types"
import WebLogo from "@/app/_components/WebLogo"
import { usePathname } from "next/navigation"

export default function NavigationBar() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [activeLink, setActiveLink] = useState("Home")
    const pathname = usePathname();
    const [openDropdown, setOpenDropdown] = useState<string | null>(null)
    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])
    useEffect(() => {
        if (pathname === "/") {
            setActiveLink("Home");
        } else {
            const currentPath = navigationMenuData.find((m: NavigationMenuInterface) => m.href === pathname)
            if (currentPath) {
                setActiveLink(currentPath.title)
            }
        }
    }, [pathname])
    const handleDropdownOpen = (name: string) => {
        setOpenDropdown(name)
    }
    const handleDropdownClose = () => {
        setOpenDropdown(null)
    }
    if (pathname !== "/login") {
        return (
            <header
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
                    scrolled
                        ? "bg-gradient-to-r from-gray-900/95 via-gray-800/95 to-gray-900/95 backdrop-blur-md shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)]"
                        : "bg-transparent",
                )}
            >
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between py-4">
                        {/* Logo with subtle shadow */}
                        <div className="flex-shrink-0 relative">
                            <Link href="/" className="block relative">
                                <WebLogo />
                            </Link>
                        </div>
                        {/* Desktop Navigation - Enhanced */}
                        <nav className="hidden lg:flex items-center">
                            <div className="relative flex items-center py-2 px-1 bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-700/50 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
                                {navigationMenuData.map((m: NavigationMenuInterface) => (
                                    <div key={m.id}
                                        className="relative"
                                        onMouseEnter={() => m.dropdown && handleDropdownOpen(m.title)}
                                        onMouseLeave={handleDropdownClose}>
                                        <Link href={m.href} className={cn(
                                            "px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 relative group",
                                            activeLink === m.title
                                                ? "text-white bg-gradient-to-br from-teal-500 to-teal-700 shadow-md"
                                                : "text-gray-200 hover:text-white",
                                        )}
                                            onClick={() => { setActiveLink(m.title); handleDropdownClose() }}>
                                            {m.title}
                                            {m.dropdown && (
                                                <span className="ml-1 inline-block">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="12"
                                                        height="12"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <polyline points="6 9 12 15 18 9"></polyline>
                                                    </svg>
                                                </span>
                                            )}
                                            {activeLink !== m.title && (
                                                <span className="absolute inset-0 rounded-full bg-gradient-to-br from-teal-500/0 to-teal-700/0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                                            )}
                                        </Link>
                                        {/* Dropdown Menu */}
                                        {m.dropdown && openDropdown === m.title && (
                                            <div className="absolute top-full left-0 mt-1 w-56 rounded-md shadow-lg bg-gray-800 border border-gray-700 overflow-hidden z-50 transform origin-top-right transition-all duration-200 ease-out">
                                                <div className="py-1">
                                                    {m.dropdown.map((item: NavigationMenuInterface) => (
                                                        <Link
                                                            key={item.title}
                                                            href={item.href}
                                                            className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700 hover:text-[#00CD95] transition-colors"
                                                        >
                                                            {item.title}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </nav>
                        {/* Desktop Buttons - Enhanced */}
                        <div className="hidden lg:flex items-center space-x-4">
                            <Link
                                href="/login"
                                className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-200 hover:text-white cursor-pointer hover:bg-gray-800/70 border border-gray-700/30 hover:border-teal-500/50 transition-all duration-300 rounded-md"
                            >
                                Sign In
                            </Link>
                            <Button
                                size="sm"
                                className="bg-gradient-to-r cursor-pointer from-teal-600 to-teal-500 hover:from-teal-500 hover:to-teal-400 text-white border border-teal-500/50 shadow-md transition-all duration-300"
                            >
                                Dashboard
                            </Button>
                        </div>
                        {/* Mobile Menu Button - Enhanced */}
                        <div className="flex lg:hidden">
                            <button
                                type="button"
                                className="inline-flex items-center justify-center p-2 rounded-full bg-gray-800/70 border border-gray-700/50 text-gray-200 hover:text-teal-400 shadow-md focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-300"
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                <span className="sr-only">Open main menu</span>
                                {isOpen ? (
                                    <X className="block h-6 w-6" aria-hidden="true" />
                                ) : (
                                    <Menu className="block h-6 w-6" aria-hidden="true" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                {/* Mobile Menu - Enhanced */}
                <div
                    className={cn(
                        "lg:hidden transition-all duration-500 ease-in-out overflow-hidden backdrop-blur-lg",
                        isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0",
                    )}
                >
                    <div className="px-4 pt-4 pb-6 space-y-2 bg-gradient-to-b from-gray-900 to-gray-800 shadow-[0_15px_25px_-5px_rgba(0,0,0,0.3)]">
                        {/* Mobile Menu Items */}
                        {navigationMenuData.map((link: NavigationMenuInterface, index) => (
                            <div key={link.title} className="mb-2">
                                <div
                                    className={cn(
                                        "block px-4 py-3 rounded-lg text-base font-medium border border-transparent",
                                        "transition-all duration-300 ease-in-out transform hover:scale-105",
                                        "hover:border-teal-500/30 hover:bg-gray-800/50 hover:shadow-[0_0_15px_rgba(0,205,149,0.15)]",
                                        index === 0 ? "bg-gradient-to-r from-teal-700/20 to-transparent border-l-2 border-l-teal-500" : "",
                                        "flex items-center justify-between",
                                    )}
                                >
                                    <Link
                                        href={link.href}
                                        className="flex items-center flex-grow"
                                        onClick={() => {
                                            setIsOpen(false)
                                            setActiveLink(link.title)
                                        }}
                                    >
                                        <span className={cn("w-2 h-2 rounded-full mr-3", index === 0 ? "bg-teal-400" : "bg-gray-600")}></span>
                                        {link.title}
                                    </Link>

                                    {link.dropdown && (
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation()
                                                setOpenDropdown(openDropdown === link.title ? null : link.title)
                                            }}
                                            className="ml-2 p-1"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className={cn(
                                                    "transition-transform duration-300",
                                                    openDropdown === link.title ? "transform rotate-180" : "",
                                                )}
                                            >
                                                <polyline points="6 9 12 15 18 9"></polyline>
                                            </svg>
                                        </button>
                                    )}
                                </div>

                                {/* Mobile Dropdown Items */}
                                {link.dropdown && openDropdown === link.title && (
                                    <div className="mt-1 ml-8 pl-4 border-l border-gray-700">
                                        {link.dropdown.map((item) => (
                                            <Link
                                                key={item.title}
                                                href={item.href}
                                                className="block py-2 px-3 text-sm text-gray-300 hover:text-[#00CD95] transition-colors"
                                                onClick={() => setIsOpen(false)}
                                            >
                                                {item.title}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                        <div className="pt-6 pb-3 border-t border-gray-700/50 mt-6">
                            <div className="grid grid-cols-2 gap-4 px-2">
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="w-full justify-center bg-gray-800/50 text-gray-200 border-gray-700/50 hover:bg-gray-700 hover:text-white hover:border-teal-500/30"
                                >
                                    Sign In
                                </Button>
                                <Button
                                    size="sm"
                                    className="w-full justify-center bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-500 hover:to-teal-400 text-white border border-teal-500/50 shadow-md"
                                >
                                    Dashboard
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

