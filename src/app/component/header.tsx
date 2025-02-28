import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ModeToggle } from "@/app/component/mode-toggle"

export default function Header() {
  return (
    <header className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          ReadAura
        </Link>
        <div className="flex items-center space-x-4">
          <Input type="search" placeholder="Search books..." className="w-64" />
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link href="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link href="/recommendations">Recommendations</Link>
              </li>
            </ul>
          </nav>
          <ModeToggle />
          <Button variant="secondary">Sign In</Button>
        </div>
      </div>
    </header>
  )
}

