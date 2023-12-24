"use client";

import { Button } from "@/components/ui/button";
import { Heart, PlayCircle } from "lucide-react";
import PlayVideoModal from "./PlayVideoModal";
import { useState } from "react";

interface IMovieCard {
  title: string;
  overview: string;
  movieId: number;
  watchList: boolean;
  watchListId: string;
  youtubeUrl: string;
  age: number;
  release: number;
  duration: number;
}

const MovieCard = ({
  title,
  overview,
  movieId,
  watchList,
  age,
  release,
  duration,
  watchListId,
  youtubeUrl,
}: IMovieCard) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <button onClick={() => setOpen(!open)} className="-mt-14">
        <PlayCircle className="h-20 w-20" />
      </button>
      <div className="absolute right-5 top-5 z-10">
        {watchList ? (
          <form>
            <Button variant="outline" size="icon">
              <Heart className="w-4 h-4 text-red-500" />
            </Button>
          </form>
        ) : (
          <form>
            <Button variant="outline" size="icon">
              <Heart className="w-4 h-4" />
            </Button>
          </form>
        )}
      </div>
      <div className="p-5 absolute bottom-0 left-0">
        <h1 className="font-bold text-lg line-clamp-1">{title}</h1>
        <div className="flex gap-x-2 items-center text-sm">
          <p>{release}</p>
          <p className="border py-0.1 px-1 border-gray-300 rounded">+{age}</p>
          <p>{duration}h</p>
        </div>
        <p className="line-clamp-1 text-sm text-gray-200 font-light">
          {overview}
        </p>
      </div>
      <PlayVideoModal
        title={title}
        overview={overview}
        youtubeUrl={youtubeUrl}
        release={release}
        age={age}
        duration={duration}
        state={open}
        changeState={setOpen}
      />
    </>
  );
};

export default MovieCard;
