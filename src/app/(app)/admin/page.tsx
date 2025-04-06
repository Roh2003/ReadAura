"use client";

// import {
//   AlertDialog,
//   AlertDialogAction,
//   AlertDialogCancel,
//   AlertDialogContent,
//   AlertDialogDescription,
//   AlertDialogFooter,
//   AlertDialogHeader,
//   AlertDialogTitle,
//   AlertDialogTrigger,
// } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
// import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
// import { PlusIcon } from "lucide-react";
import { useUser } from "@clerk/nextjs";
import { toast, ToastContainer } from "react-toastify";
import { SignedIn } from "@clerk/nextjs";
import { Input } from "@/components/ui/input";
// if you moved Review type to a shared file
type AddBooks = {
  BOOK_ID: number;
  BOOK_TITLE: string;
  BOOK_AURTHOR: string;
  GENRE: string;
  LANGUAGE: string;
  A_RATINGS:number;
  RATERS:number;
  F_PAGE:string;
  LINK:string
};



// type FeedbackDialogProps = {
//   onAddReview: (addbook:AddBooks) => void;
// };

export default function AddbooksDialog() {
  const [bookid, setBookid] = useState<number>(0);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [lang, setLang] = useState("");
  const [a_rating, setA_rating] = useState<number>(0);
  const [raters, setRaters] = useState<number>(0);
  const [f_page, setF_page] = useState("");
  const [link, setLink] = useState("");
  const { user } = useUser();

  const handleSubmit =async (e:React.FormEvent) => {
    e.preventDefault()
    
    if (!user) {
      toast.error("You must be logged in to submit a review.");
      return;
    };

    const newBooks: AddBooks = {
        BOOK_ID: bookid,
        BOOK_TITLE: title,
        BOOK_AURTHOR: author,
        GENRE: genre,
        LANGUAGE: lang,
        A_RATINGS:a_rating,
        RATERS:raters,
        F_PAGE:f_page,
        LINK:link
    };

    console.log(newBooks);
    setBookid(0)
    setTitle("")
    setAuthor("")
    setA_rating(0)
    setF_page("")
    setLink("")
    setGenre("")
    setRaters(0)
    setLang("")
  };

    return (
        <>
        <SignedIn>
        <div className='space-y-2'>
        <ToastContainer />
            <div className='space-y-2'>
                <div className='flex justify-between'>
                    <div className='p-2'>
                        <h1 className='text-2xl text-center text-white'>
                            Welcome Back...Boss
                        </h1>
                    </div>
                    <div>

                    </div>

                </div>

                <div className="flex flex-col items-center justify-center gap-8 my-10">
                    <h1 className="text-3xl">Add New Book</h1>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label className="block font-medium">Book Id</label>
                            <Input
                                type="number"
                                value={bookid}
                                onChange={(e) => setBookid(Number(e.target.value))}
                                placeholder="1,2"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="block font-medium">Book Title</label>
                            <Input
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="Enter Book Title Here"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="block font-medium">Book Author</label>
                            <Input
                                type="text"
                                value={author}
                                onChange={(e) => setAuthor(e.target.value)}
                                placeholder="eg.,Rj Sowling"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="block font-medium">Genre</label>
                            <select
                                value={genre}
                                onChange={(e) => setGenre(e.target.value)}
                                className="w-full border rounded-md px-3 py-2"
                            >
                                <option value="">Select Genre</option>
                                <option value="Fiction">Fiction</option>
                                <option value="AutoBioGraphy">AutoBioGraphy</option>
                                <option value="BioGraphy">BioGraphy</option>
                                <option value="Poetry">Poetry</option>
                                <option value="Comedy">Comedy</option>
                                <option value="Personal_Growth">Personal Growth</option>
                                <option value="Relationship">Relationship</option>
                                <option value="Religion">Religion</option>
                                <option value="Technology">Technology</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="block font-medium">Language</label>
                            <Input
                                type="text"
                                value={lang}
                                onChange={(e) => setLang(e.target.value)}
                                placeholder="eg., English,Spanish"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="block font-medium">Average Rating</label>
                            <Input
                                type="number"
                                value={a_rating}
                                onChange={(e) => setA_rating(Number(e.target.value))}
                                placeholder="out of 10"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="block font-medium">Raters</label>
                            <Input
                                type="number"
                                value={raters}
                                onChange={(e) => setRaters(Number(e.target.value))}
                                placeholder="eg.,350"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="block font-medium">Front Page Image</label>
                            <Input
                                type="file"
                                value={f_page}
                                onChange={(e) => setF_page(e.target.value)}
                                placeholder="upload link"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="block font-medium">Book Resource</label>
                            <Input
                                type="file"
                                value={link}
                                onChange={(e) => setLink(e.target.value)}
                                placeholder="upload link"
                            />
                        </div>
                        <div>
                            <Button 
                                className="w-full bg-primary text-primary-foreground rounded-md px-4 py-2 font-medium flex items-center justify-center gap-2 hover:bg-primary/90 disabled:opacity-50"
                                type="submit" 
                                
                            > add
                                
                            </Button>
                        </div>
                        


                    </form>

                </div>

            </div>

        </div>
        </SignedIn>
        </>
    )
}

