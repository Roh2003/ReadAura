import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const books = [
  { id: 1, title: "The Midnight Library", author: "Matt Haig", cover: "/placeholder.svg" },
  { id: 2, title: "Project Hail Mary", author: "Andy Weir", cover: "/placeholder.svg" },
  { id: 3, title: "The Seven Husbands of Evelyn Hugo", author: "Taylor Jenkins Reid", cover: "/placeholder.svg" },
  // Add more books as needed
]

export default function Recommendations() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Recommended for You</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {books.map((book) => (
          <Card key={book.id}>
            <CardHeader>
              <Image
                src={book.cover || "/placeholder.svg"}
                alt={book.title}
                width={200}
                height={300}
                className="w-full h-64 object-cover"
              />
            </CardHeader>
            <CardContent>
              <CardTitle>{book.title}</CardTitle>
              <CardDescription>{book.author}</CardDescription>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href={`/books/${book.id}`}>View Details</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

