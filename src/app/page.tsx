import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Welcome to ReadAura</h1>
      <p className="text-xl mb-8 text-center">Discover your next favorite book with personalized recommendations.</p>
      <div className="flex justify-center space-x-4">
        <Button asChild>
          <Link href="/requirements">Get Started</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/about">Learn More</Link>
        </Button>
      </div>
    </div>
  )
}

