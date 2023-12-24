"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "./utils/auth";
import { revalidatePath } from "next/cache";

export async function addToWatchList(formData: FormData) {
  "use server";

  const session = await getServerSession(authOptions);
  const movieId = formData.get("movieId");
  const pathname = formData.get("pathname");

  const data = await prisma?.watchList.create({
    data: {
      userId: session?.user?.email as string,
      movieId: Number(movieId),
    },
  });

  revalidatePath(pathname as string);
}

export async function removeFromWatchList(formData: FormData) {
  "use server";

  const watchListId = formData.get("watchListId") as string;
  const pathname = formData.get("pathname") as string;

  const data = await prisma?.watchList.delete({
    where: {
      id: watchListId,
    },
  });

  revalidatePath(pathname);
}
