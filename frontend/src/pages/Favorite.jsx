import React from "react";
import { useSelector } from "react-redux";
import FavoriteCard from "../components/favoriteCard/FavoriteCard";
import { Helmet } from "react-helmet-async";

export default function Favorite() {
  const favorite = useSelector((state) => state.favorite.favorite);
  return (
    <>
      <Helmet>
        <title>Favorite page</title>
        <meta name="description" content="Favorite page" />
      </Helmet>
      {favorite.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-10 py-48 px-16">
          {favorite.map((item) => (
            <FavoriteCard item={item} key={item._id} />
          ))}
        </div>
      ) : (
        <p className="flex items-center justify-center py-80 text-4xl">
          Your favorite is empty
        </p>
      )}
    </>
  );
}
