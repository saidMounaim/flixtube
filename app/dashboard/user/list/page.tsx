import { getServerSession } from "next-auth";
import prisma from "../../../utils/db";
import { authOptions } from "@/app/utils/auth";
import MovieCard from "@/app/components/MovieCard";
import Image from "next/image";

async function getData(userId: string) {
  const data = await prisma.watchList.findMany({
    where: {
      userId,
    },
    select: {
      Movie: {
        select: {
          id: true,
          title: true,
          overview: true,
          imageString: true,
          duration: true,
          age: true,
          release: true,
          WatchLists: true,
          youtubeString: true,
        },
      },
    },
  });
  return data;
}

const WatchListPage = async () => {
  const session = await getServerSession(authOptions);
  const data = await getData(session?.user?.email as string);
  return (
    <>
      <h1 className="text-3xl font-bold mt-4">Your watchlist</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8 gap-6">
        {data.map((movie) => (
          <div key={movie.Movie?.id} className="relative h-48">
            <Image
              src={movie.Movie?.imageString as string}
              alt={movie.Movie?.title as string}
              width={500}
              height={400}
              className="rounded-sm absolute w-full h-full object-cover"
            />
            <div className="w-full h-60 relative z-10 transform transition duration-500 hover:scale-110 opacity-0 hover:opacity-100">
              <div className="bg-gradient-to-b from-transparent via-black/50 to-black z-10 w-full h-full rounded-lg flex items-center justify-center">
                <Image
                  src={movie.Movie?.imageString as string}
                  alt={movie.Movie?.title as string}
                  width={800}
                  height={800}
                  className="absolute w-full h-full -z-10 rounded-lg object-cover"
                />
                <MovieCard
                  key={movie.Movie?.id as number}
                  movieId={movie.Movie?.id as number}
                  title={movie.Movie?.title as string}
                  overview={movie.Movie?.overview as string}
                  youtubeUrl={movie.Movie?.youtubeString as string}
                  age={movie.Movie?.age as number}
                  release={movie.Movie?.release as number}
                  duration={movie.Movie?.duration as number}
                  watchListId={movie.Movie?.WatchLists[0]?.id as string}
                  watchList={
                    (movie.Movie?.WatchLists.length as number) > 0
                      ? true
                      : false
                  }
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default WatchListPage;
