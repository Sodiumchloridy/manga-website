"use client";

import { Dispatch, SetStateAction, useEffect, useState } from "react";

// Custom hook for user favourited manga id
export const useFavourites = <T>(
  userId: string,
  initialState: T
): [T, Dispatch<SetStateAction<T>>] => {
  const [favourites, setFavourites] = useState<T>(initialState);

  useEffect(() => {
    if (!userId) return;
    const fetchFavourite = async () => {
      const res = await fetch(`/api/get-favourite?userId=${userId}`, {
        method: "GET",
      });

      const data = await res.json();

      if (data.status === "Success") {
        setFavourites(data.message);
      } else {
        console.log(data.message);
      }
    };

    fetchFavourite();
  }, [userId]);

  return [favourites, setFavourites];
};
