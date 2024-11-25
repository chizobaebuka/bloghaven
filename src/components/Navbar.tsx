"use client"

import Link from "next/link"
import { Button } from "./ui/button"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "./ui/navigation-menu"
import { Switch } from "./ui/switch"
import MobileMenu from "./MobileMenu"
import { usePathname } from "next/navigation"
import { useContext } from "react"
import { ThemeContext } from "@/context/themeContext"

const Navbar = () => {

    const pathname = usePathname()

    const { isDarkMode, toggleTheme }: any = useContext(ThemeContext);

    return (
        <header className={`py-4 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} shadow-md transition-colors duration-300`}>
            <nav className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
                {/* logo */}
                <div className="text-xl font-bold">
                    <Link href="/">Blog Haven</Link>
                </div>

                {/* desktop navigation */}
                <NavigationMenu className="hidden lg:flex ">
                    <NavigationMenuList className="flex space-x-8">

                        <NavigationMenuItem>
                            <NavigationMenuLink href="/news" className={`${pathname === '/news' ? 'text-red-500 font-semibold' : ''} hover:text-gray-600`}>News</NavigationMenuLink>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuTrigger className="dark:bg-gray-800 dark:text-white">Services</NavigationMenuTrigger>

                            <NavigationMenuContent>
                                <NavigationMenuLink>
                                    <ul className="text-gray-600 shadow-md rounded-md py-4 px-5 space-y-2">
                                        <li>
                                            <NavigationMenuLink href="/services/web-development" className="dark hover:text-gray-600">
                                                Web Development
                                            </NavigationMenuLink>
                                        </li>
                                        <li>
                                            <NavigationMenuLink href="/services/app" className="dark hover:text-gray-600">
                                                Mobile Apps
                                            </NavigationMenuLink>
                                        </li>
                                        <li>
                                            <NavigationMenuLink href="/services/seo" className="dark hover:text-gray-600">
                                                SEO
                                            </NavigationMenuLink>
                                        </li>
                                    </ul>
                                </NavigationMenuLink>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuLink href="/about" className={`${pathname === '/about' ? 'text-red-500 font-semibold' : ''} hover:text-gray-600`}>About</NavigationMenuLink>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuLink href="/contact" className={`${pathname === '/contact' ? 'text-red-500 font-semibold' : ''} hover:text-gray-600`}>Contact</NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>

                {/* toggle dark and bright mode and logon btn */}
                <div className="hidden lg:flex items-center space-x-4">
                    <div 
                        className="flex items-center"
                        onClick={toggleTheme}
                    >
                        <span className="mr-2">Dark Mode</span>
                        <Switch />
                    </div>
                    <Button variant="default" className="px-6">Login</Button>
                </div>

                {/* hamburger menu for mobile devices */}
                <MobileMenu />
            </nav>
        </header>
    )
}

export default Navbar