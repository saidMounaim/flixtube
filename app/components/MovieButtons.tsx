"use client";

import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { useState } from "react";
import PlayVideoModal from "./PlayVideoModal";

interface IMovieButtons {
  id: number;
  title: string;
  overview: string;
  youtubeUrl: string;
  release: number;
  age: number;
  duration: number;
}

const MovieButtons = ({
  id,
  title,
  overview,
  youtubeUrl,
  duration,
  age,
  release,
}: IMovieButtons) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(!open)} className="text-lg font-medium">
        <Play className="mr-3 w-5 h-5" />
        Play
      </Button>
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

export default MovieButtons;
