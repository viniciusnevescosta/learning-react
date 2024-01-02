// import { useState } from "react";
import BlogCard from "../components/BlogCard";

const Home = () => {
  return (
    <section className="flex-1 gap-5 flex flex-col">
      <div className="flex justify-between">
        <h1 className="text-3xl">Latest blogs</h1>
        <button className="w-fit py-4 px-12 rounded-lg bg-zinc-50">
          New post
        </button>
      </div>
      <div className="flex-1 flex flex-col gap-2">
        <BlogCard />
      </div>
    </section>
  );
};

export default Home;
