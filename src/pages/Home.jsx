import { useState } from "react";
import BlogCard from "../components/BlogCard";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      id: 0,
      author: "Vini",
      date: "02/01/2024",
      liked: true,
      title: "eae",
      body: "oi",
    },
    {
      id: 1,
      author: "Pedro",
      date: "02/01/2024",
      liked: false,
      title: "oi",
      body: "oi",
    },
    {
      id: 2,
      author: "Pedro",
      date: "02/01/2024",
      liked: false,
      title: "teste",
      body: "oi",
    },
  ]);

  // Emit function
  const handleDelete = (id) => {
    const newsBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newsBlogs);
  };

  return (
    <section className="flex-1 gap-5 flex flex-col">
      <div className="flex justify-between">
        <h1 className="text-3xl">Latest blogs</h1>
      </div>

      {/* Passing a prop and a emit function. */}
      <BlogCard blogs={blogs} handleDelete={handleDelete} />

      {/* If I wanna to filter a list, I can do this with the Js. 'filter' function. */}
      {/* <BlogCard blogs={blogs.filter((blog) => blog.author === "Pedro")} /> */}
    </section>
  );
};

export default Home;
