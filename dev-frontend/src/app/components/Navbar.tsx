"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown, Settings, LogOut, User, CreditCard, ArrowUp, ArrowDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@components/ui/dropdown-menu"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@components/ui/navigation-menu"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@components/ui/collapsible"

const NavigationMenuContentObject = [
  { name: 'Article', href: '/article', text: 'Read latest news and articles.' },
  { name: 'Problems', href: '/problems', text: 'Test your skills and knowledge' },
  { name: 'Challenges', href: '/challenges', text: 'Challenge yourself and compare.' },
];

const label = (isLogin: boolean, accound_data?: object) => {
  if (isLogin) {
    return accound_data;
  }
  return "Get Started"
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)
  const [scrollTimer, setScrollTimer] = useState<NodeJS.Timeout | null>(null)
  const [manualOverride, setManualOverride] = useState<boolean | null>(null)

  const [isLogin, setIsLogin] = useState(false)

  const checkLogin = () => {

  }

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  const toggleNavbarManually = () => {
    setManualOverride((prev) => (prev === null ? !visible : !prev))
  }
  const handleScroll = useCallback(() => {
    if (manualOverride !== null) return

    const currentScrollPos = window.scrollY
    const scrollDifference = Math.abs(prevScrollPos - currentScrollPos)

    if (scrollTimer) {
      clearTimeout(scrollTimer)
    }

    if (scrollDifference > 20) {
      const timer = setTimeout(() => {
        const isVisible = prevScrollPos > currentScrollPos || currentScrollPos < 50

        setPrevScrollPos(currentScrollPos)
        setVisible(isVisible)
      }, 100)

      setScrollTimer(timer)
    }
  }, [prevScrollPos, scrollTimer, manualOverride])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (scrollTimer) {
        clearTimeout(scrollTimer)
      }
    }
  }, [handleScroll, scrollTimer])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [isOpen])

  const finalVisibility = manualOverride !== null ? manualOverride : visible

  return (
    <>
      <div className="fixed top-3 right-0 z-[60]">
        <Button
          size="sm"
          variant="secondary"
          onClick={toggleNavbarManually}
          className="rounded-full shadow-md bg-white hover:bg-gray-100"
        >
          {finalVisibility ? <ArrowUp className="h-4 w-4" /> : <ArrowDown className="h-4 w-4" />}
        </Button>
      </div>

      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 bg-white shadow-sm transition-transform duration-300",
          !finalVisibility && "transform -translate-y-full",
        )}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <Link href="/" className="text-xl font-bold">
                Brand
              </Link>
            </div>

            <nav className="hidden md:block">
              <ul className="flex space-x-8 items-center">
                <li>
                  <Link href="/" className="text-gray-700 hover:text-gray-900 font-medium">
                    Home
                  </Link>
                </li>
                <li>
                  <NavigationMenu>
                    <NavigationMenuList>
                      <NavigationMenuItem>
                        <NavigationMenuTrigger
                          className="text-gray-700 hover:text-gray-900 font-medium">
                          Services
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="bg-white">
                          <div className="grid gap-3 p-4 w-[400px] bg-white">
                            {NavigationMenuContentObject.map((link) => (
                              <NavigationMenuLink key={link.name} asChild>
                                <Link
                                  href={link.href}
                                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                >
                                  <div className="text-sm font-medium leading-none">{link.name}</div>
                                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                    {link.text}
                                  </p>
                                </Link>
                              </NavigationMenuLink>
                            ))}
                          </div>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    </NavigationMenuList>
                  </NavigationMenu>
                </li>
                <li>
                  <Link href="/about" className="text-gray-700 hover:text-gray-900 font-medium">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-700 hover:text-gray-900 font-medium">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="hidden md:block">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button>
                    {label(false)} <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white" align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <CreditCard className="mr-2 h-4 w-4" />
                    <span>Billing</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          <div
            className={cn(
              "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
              isOpen ? "max-h-[500px] pb-4" : "max-h-0",
            )}
          >
            <ul className="space-y-4">
              <li>
                <Link
                  href="/"
                  className="block text-gray-700 hover:text-gray-900 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="block text-gray-700 hover:text-gray-900 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Collapsible className="w-full">
                  <CollapsibleTrigger className="flex w-full items-center justify-between text-gray-700 hover:text-gray-900 font-medium">
                    Services <ChevronDown className="h-4 w-4" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-2 ml-4 space-y-2">
                    <Link
                      href="/services/consulting"
                      className="block text-gray-700 hover:text-gray-900"
                      onClick={() => setIsOpen(false)}
                    >
                      Consulting
                    </Link>
                    <Link
                      href="/services/development"
                      className="block text-gray-700 hover:text-gray-900"
                      onClick={() => setIsOpen(false)}
                    >
                      Development
                    </Link>
                    <Link
                      href="/services/design"
                      className="block text-gray-700 hover:text-gray-900"
                      onClick={() => setIsOpen(false)}
                    >
                      Design
                    </Link>
                  </CollapsibleContent>
                </Collapsible>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="block text-gray-700 hover:text-gray-900 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
              </li>
              <li className="pt-2">
                <Collapsible className="w-full">
                  <CollapsibleTrigger className="w-full">
                    <Button className="w-full flex items-center justify-between">
                      Get Started <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-2 space-y-2 bg-gray-50 p-2 rounded">
                    <div className="px-2 py-1.5 text-sm font-semibold">My Account</div>
                    <Link
                      href="/profile"
                      className="flex items-center px-2 py-1.5 text-sm text-gray-700 hover:text-gray-900"
                      onClick={() => setIsOpen(false)}
                    >
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                    </Link>
                    <Link
                      href="/billing"
                      className="flex items-center px-2 py-1.5 text-sm text-gray-700 hover:text-gray-900"
                      onClick={() => setIsOpen(false)}
                    >
                      <CreditCard className="mr-2 h-4 w-4" />
                      <span>Billing</span>
                    </Link>
                    <Link
                      href="/settings"
                      className="flex items-center px-2 py-1.5 text-sm text-gray-700 hover:text-gray-900"
                      onClick={() => setIsOpen(false)}
                    >
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Settings</span>
                    </Link>
                    <Link
                      href="/logout"
                      className="flex items-center px-2 py-1.5 text-sm text-gray-700 hover:text-gray-900"
                      onClick={() => setIsOpen(false)}
                    >
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Log out</span>
                    </Link>
                  </CollapsibleContent>
                </Collapsible>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  )
}
