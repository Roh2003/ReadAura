"use client";

import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

const reviews = [
    { 
      name: "Rohit S.", 
      username: "@rohit", 
      body: "ReadAura is a game-changer! The recommendations are spot-on, making book discovery effortless. Highly recommended!", 
      img: "/roh.jpg", 
      rating: "⭐⭐⭐⭐⭐" 
    },
    { 
      name: "Jill", 
      username: "@jill", 
      body: "Absolutely blown away! The recommendations feel tailor-made, and the experience is just seamless!", 
      img: "https://avatar.vercel.sh/jill", 
      rating: "⭐⭐⭐⭐⭐" 
    },
    { 
      name: "John", 
      username: "@john", 
      body: "A must-have for book lovers! Finding the perfect book has never been easier.", 
      img: "https://avatar.vercel.sh/john", 
      rating: "⭐⭐⭐⭐⭐" 
    },
    { 
      name: "Jane", 
      username: "@jane", 
      body: "ReadAura is a masterpiece! Every book suggestion is a hit. I love it!", 
      img: "https://avatar.vercel.sh/jane", 
      rating: "⭐⭐⭐⭐⭐" 
    },
    { 
        name: "Chinmai P.", 
        username: "@chinmai", 
        body: "I was stuck in a reading slump, but ReadAura brought back my love for books. Every recommendation is a gem!", 
        img: "/chi.jpg", 
        rating: "⭐⭐⭐⭐⭐" 
    },
    { 
      name: "Jenny", 
      username: "@jenny", 
      body: "Amazing experience! ReadAura makes discovering books effortless and fun.", 
      img: "https://avatar.vercel.sh/jenny", 
      rating: "⭐⭐⭐⭐⭐" 
    },
    { 
      name: "James", 
      username: "@james", 
      body: "This platform is amazing! Every recommendation is a perfect match.", 
      img: "https://avatar.vercel.sh/james", 
      rating: "⭐⭐⭐⭐⭐" 
    },
    { 
      name: "Jerry", 
      username: "@jerry", 
      body: "Wow! ReadAura truly understands my taste. Highly recommended!", 
      img: "https://avatar.vercel.sh/jerry", 
      rating: "⭐⭐⭐⭐⭐" 
    },
    { 
      name: "Jessica", 
      username: "@jessica", 
      body: "Next-level book discovery! ReadAura makes reading even more enjoyable.", 
      img: "https://avatar.vercel.sh/jessica", 
      rating: "⭐⭐⭐⭐⭐" 
    },
    { 
      name: "Jacob", 
      username: "@jacob", 
      body: "Smooth, elegant, and insightful! ReadAura changed how I find books.", 
      img: "https://avatar.vercel.sh/jacob", 
      rating: "⭐⭐⭐⭐⭐" 
    },
    { 
        name: "Pratish B.", 
        username: "@pratish", 
        body: "The community aspect makes ReadAura amazing! Real people, real recommendations—feels like a book club!", 
        img: "/pra.jpg", 
        rating: "⭐⭐⭐⭐⭐" 
      }
  ];
  
  

const chunkSize = Math.ceil(reviews.length / 3);
const firstRow = reviews.slice(0, chunkSize);
const secondRow = reviews.slice(chunkSize, chunkSize * 2);
const thirdRow = reviews.slice(chunkSize * 2);

const ReviewCard = ({ img, name, username, body }: { img: string; name: string; username: string; body: string }) => (
  <figure
    className={cn(
      "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
      "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
      "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
    )}
  >
    <div className="flex flex-row items-center gap-2">
      <img className="rounded-full" width="32" height="32" alt="" src={img} />
      <div className="flex flex-col">
        <figcaption className="text-sm font-medium dark:text-white">{name}</figcaption>
        <p className="text-xs font-medium dark:text-white/40">{username}</p>
      </div>
    </div>
    <blockquote className="mt-2 text-sm">{body}</blockquote>
  </figure>
);

export default function ReviewMarquee() {
  return (
    <section className="relative flex w-full flex-col items-center justify-center overflow-hidden py-10">
    

      {/* First Marquee Row */}
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>

      {/* Second Marquee Row (Reversed Direction) */}
      <Marquee reverse pauseOnHover className="[--duration:22s] mt-4">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>

      {/* Third Marquee Row */}
      <Marquee pauseOnHover className="[--duration:24s] mt-4">
        {thirdRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
    </section>
  );
}
