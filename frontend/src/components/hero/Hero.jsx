import React from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <div className={`${styles.bgImg} py-[22.48rem]`}>
      <div className="content text-white px-16 flex flex-col gap-8 w-full sm:w-5/12">
        <p className="text-7xl font-bold">Shop With Us</p>
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          assumenda ea quo cupiditate facere deleniti fuga officia.
        </p>
        <div className="buttons flex gap-3 ">
          <button className="p-2 bg-transparent border border-white uppercase font-bold hover:bg-black hover:text-white hover:border-black transition">
            shop now
          </button>
          <button className="p-2  border border-black bg-black font-white uppercase font-bold hover:bg-transparent  hover:border-white transition">
            club membership
          </button>
        </div>
      </div>
    </div>
  );
}
