"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const BookPreferencesForm = () => {
    const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
    const [selectedMoods, setSelectedMoods] = useState<string[]>([]);

    const genres = ["Fiction", "Non-Fiction", "Mystery", "Romance", "Fantasy", "Sci-Fi", "Thriller", "Biography", "Self-Help"];
    const moods = ["Lighthearted", "Dark & Gritty", "Emotional", "Thought-Provoking", "Fast-Paced", "Slow & Deep"];

    const handleGenreChange = (genre: string) => {
        setSelectedGenres((prev) =>
            prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre]
        );
    };

    const handleMoodChange = (mood: string) => {
        setSelectedMoods((prev) =>
            prev.includes(mood) ? prev.filter((m) => m !== mood) : [...prev, mood]
        );
    };

    return (
        <div className="space-y-4">
            {/* Genre Selection */}
            <div>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline">
                            {selectedGenres.length > 0 ? selectedGenres.join(", ") : "Select Genres"}
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        {genres.map((genre) => (
                            <DropdownMenuCheckboxItem
                                key={genre}
                                checked={selectedGenres.includes(genre)}
                                onCheckedChange={() => handleGenreChange(genre)}
                            >
                                {genre}
                            </DropdownMenuCheckboxItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            {/* Mood Selection */}
            <div>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline">
                            {selectedMoods.length > 0 ? selectedMoods.join(", ") : "Select Moods"}
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        {moods.map((mood) => (
                            <DropdownMenuCheckboxItem
                                key={mood}
                                checked={selectedMoods.includes(mood)}
                                onCheckedChange={() => handleMoodChange(mood)}
                            >
                                {mood}
                            </DropdownMenuCheckboxItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    );
};

export default function Page() {
    return (
        <>
            <div className="flex flex-col items-center gap-8 p-8">
                <h1 className="font-bold text-3xl text-center max-w-3xl">Find Your Next Perfect Read – Tell Us What You Love, and We'll Recommend the Best Books for You!</h1>

                <div className="w-full max-w-2xl">
                    <form className="space-y-6">
                        <div className="space-y-2">
                            <label htmlFor="genres" className="block font-medium">Book Preferences</label>
                            <BookPreferencesForm />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="authors" className="block font-medium">Favorite Authors</label>
                            <Input 
                                type="text" 
                                id="authors" 
                                placeholder="e.g. J.K. Rowling, Stephen King"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="length" className="block font-medium">Preferred Book Length</label>
                            <select id="length" className="w-full rounded-md border border-input bg-background px-3 py-2">
                                <option value="">Select length</option>
                                <option value="short">Short (less than 300 pages)</option>
                                <option value="medium">Medium (300-500 pages)</option>
                                <option value="long">Long (more than 500 pages)</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="pace" className="block font-medium">Reading Pace</label>
                            <select id="pace" className="w-full rounded-md border border-input bg-background px-3 py-2">
                                <option value="">Select pace</option>
                                <option value="casual">Casual (1-2 books per month)</option>
                                <option value="regular">Regular (3-4 books per month)</option>
                                <option value="avid">Avid (5+ books per month)</option>
                            </select>
                        </div>

                        <button type="submit" className="w-full bg-primary text-primary-foreground rounded-md px-4 py-2 font-medium hover:bg-primary/90">
                            Get Recommendations
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

