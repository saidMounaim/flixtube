import { Button } from "@/components/ui/button";
import prisma from "../utils/db";
import MovieButtons from "./MovieButtons";

async function getMovie() {
  const data = await prisma.movie.findFirst();
  return data;
}

const MovieVideo = async () => {
  const movie = await getMovie();
  return (
    <div className="h-[55vh] lg:h-[80vh] flex justify-start items-center w-full">
      <video
        poster={movie?.imageString}
        autoPlay
        muted
        loop
        src={movie?.videoSource}
        className="w-full absolute top-0 left-0 h-[80vh] object-cover -z-10 brightness-[50%]"
      ></video>
      <div className="absolute w-[90%] lg:w-[40%] mx-auto">
        <h1 className="text-white font-bold text-4xl md:text-5xl lg:text-6xl">
          {movie?.title}
        </h1>
        <p className="text-white text-lg mt-4 line-clamp-3">
          {movie?.overview}
        </p>
        <div className="flex gap-x-3 mt-4">
          <MovieButtons
            key={movie?.id}
            id={movie?.id as number}
            title={movie?.title as string}
            overview={movie?.overview as string}
            age={movie?.age as number}
            duration={movie?.duration as number}
            release={movie?.release as number}
            youtubeUrl={movie?.youtubeString as string}
          />
        </div>
      </div>
    </div>
  );
};

export default MovieVideo;
