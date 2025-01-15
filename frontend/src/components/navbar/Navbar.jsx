import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router";

export default function Navbar() {
  const favorite = useSelector((state) => state.favorite.favorite);
  return (
    <nav className="px-16 py-5 z-50 bg-white shadow-sm flex flex-col sm:flex-row gap-y-5 items-center justify-between fixed w-full">
      <div className="logo">
        <Link to="/" className="font-bold text-4xl">
          Selling<span className="text-orange-600">.</span>
        </Link>
      </div>
      <ul className="flex gap-5">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="add">Add</NavLink>
        </li>
        <li>
          <NavLink to="favorite">Favorite({favorite.length})</NavLink>
        </li>
      </ul>
    </nav>
  );
}
