import { useState } from "react";
import BlogCard from "../components/BlogCard";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      id: 0,
      author: "Vini",
      date: "02/01/2024",
      liked: true,
      title: "teste",
      body: "oi",
    },
    {
      id: 1,
      author: "Pedro",
      date: "02/01/2024",
      liked: false,
      title: "teste",
      body: "oi",
    },
  ]);

  return (
    <section className="flex-1 gap-5 flex flex-col">
      <div className="flex justify-between">
        <h1 className="text-3xl">Latest blogs</h1>
      </div>
      {/* <BlogCard blogs={blogs} /> */}
      <BlogCard blogs={blogs.filter(blog => blog.author === "Pedro")} />
    </section>
  );
};

export default Home;
