import Image from "next/image"
import { Button } from "@/components/ui/button"

// This would typically come from an API or database
const book = {
  id: 1,
  title: "The Midnight Library",
  author: "Matt Haig",
  cover: "/placeholder.svg",
  description:
    "Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived.",
  amazonLink: "https://www.amazon.com/Midnight-Library-Matt-Haig/dp/0525559477",
}

export default function BookDetails({ params }: { params: { id: string } }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3">
          <Image
            src={book.cover || "/placeholder.svg"}
            alt={book.title}
            width={300}
            height={450}
            className="w-full h-auto"
          />
        </div>
        <div className="md:w-2/3">
          <h1 className="text-3xl font-bold mb-4">{book.title}</h1>
          <h2 className="text-xl mb-4">by {book.author}</h2>
          <p className="mb-6">{book.description}</p>
          <div className="flex space-x-4">
            <Button>Read Now</Button>
            <Button variant="outline" asChild>
              <a href={book.amazonLink} target="_blank" rel="noopener noreferrer">
                Buy on Amazon
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

