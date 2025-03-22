"use client"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/app/(app)/component/theme-provider"
import Header from "@/app/(app)/component/header"
import Footer from "@/app/(app)/component/footer"
import type React from "react"
import { usePathname } from "next/navigation" // Import usePathname
import {
  ClerkProvider
} from '@clerk/nextjs';

const inter = Inter({ subsets: ["latin"] })

// export const metadata = {
//   title: "ReadAuro",
//   description: "Your personalized book recommendation platform",
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname(); // Get current route

  const isAuthPage = pathname === "/sign-in" || pathname === "/sign-up"|| pathname === "/sign-up/verify-email-address"; // Check if auth page

  return (
    <ClerkProvider
    publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
    signInUrl="/sign-in"
    signUpUrl="/sign-up"
    afterSignInUrl="/"
    afterSignUpUrl="/"
    afterSignOutUrl='/sign-in'
  >
      <html lang="en">
        <body className={inter.className}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="flex flex-col min-h-screen">
              {!isAuthPage && <Header />} {/* Show header only if not auth page */}
              <main className="flex-grow">{children}</main>
              {!isAuthPage && <Footer />} {/* Show footer only if not auth page */}
            </div>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
