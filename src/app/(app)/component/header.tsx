'use client'
import React, { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ModeToggle } from "@/app/(app)/component/mode-toggle"
import { useAuth, useClerk, UserProfile } from "@clerk/clerk-react"
import { useRouter } from "next/navigation";
import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton, SignOutButton } from "@clerk/nextjs"






export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const { isSignedIn } = useAuth();
  const { signOut } = useClerk();
  const router = useRouter();

  return (
    <header className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            ReadAura
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="sm:hidden text-2xl focus:outline-none"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? '✖' : '☰'}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex items-center space-x-4">
            <Input type="search" placeholder="Search books..." className="w-64 ml-5 text-black" />
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <Link href="/dashboard" className="hover:text-secondary">Dashboard</Link>
                </li>
                <li>
                  <Link href="/recommendations" className="hover:text-secondary">Recommendations</Link>
                </li>
              </ul>
            </nav>
            <ModeToggle />
            {isSignedIn ? (
                <Button variant="secondary" onClick={() => {
                  signOut()
                  toggleMobileMenu()
                }}>Sign Out</Button>
              ) : (
                <Button variant="secondary"><Link href="/sign-in">Sign In</Link></Button>
              )}
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed inset-0 bg-primary z-50 transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full p-6">
            <div className="flex justify-between items-center mb-8">
              <Link href="/" className="text-2xl font-bold">
                ReadAura
              </Link>
              <button
                className="text-2xl focus:outline-none"
                onClick={toggleMobileMenu}
              >
                ✖
              </button>
            </div>
            
            <Input type="search" placeholder="Search books..." className="mb-6" />
            
            <nav className="flex-1">
              <ul className="space-y-4">
                <li>
                  <Link 
                    href="/dashboard" 
                    className="block text-lg hover:text-secondary"
                    onClick={toggleMobileMenu}
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/recommendations" 
                    className="block text-lg hover:text-secondary"
                    onClick={toggleMobileMenu}
                  >
                    Recommendations
                  </Link>
                </li>
              </ul>
            <div className="flex flex-col space-y-4">
              <ModeToggle />
              <SignedOut>
                <SignInButton forceRedirectUrl="/dashboard">
                  <Button variant="outline">Login</Button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <UserButton />
             </SignedIn>

            </div>
            </nav>
            
          </div>
        </div>
      </div>
    </header>
  )
}
