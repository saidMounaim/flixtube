import Image from "next/image";
import MovieCard from "./MovieCard";

async function getRecentlyAdded() {
  const data = await prisma?.movie.findMany({
    select: {
      id: true,
      title: true,
      imageString: true,
      overview: true,
      youtubeString: true,
      age: true,
      release: true,
      duration: true,
      WatchLists: true,
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 4,
  });
  return data;
}

const RecentlyAdded = async () => {
  const movies = await getRecentlyAdded();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8 gap-6">
      {movies?.map((movie) => (
        <div key={movie.id} className="relative h-48">
          <Image
            src={movie.imageString}
            alt={movie.title}
            width={500}
            height={400}
            className="rounded-sm absolute w-full h-full object-cover"
          />
          <div className="w-full h-60 relative z-10 transform transition duration-500 hover:scale-110 opacity-0 hover:opacity-100">
            <div className="bg-gradient-to-b from-transparent via-black/50 to-black z-10 w-full h-full rounded-lg flex items-center justify-center">
              <Image
                src={movie.imageString}
                alt={movie.title}
                width={800}
                height={800}
                className="absolute w-full h-full -z-10 rounded-lg object-cover"
              />
              <MovieCard
                movieId={movie.id}
                title={movie.title}
                overview={movie.overview}
                youtubeUrl={movie.youtubeString}
                age={movie.age}
                release={movie.release}
                duration={movie.duration}
                watchListId={movie.WatchLists[0]?.id}
                watchList={movie.WatchLists.length > 0 ? true : false}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentlyAdded;
