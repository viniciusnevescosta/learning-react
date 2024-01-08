import { useState } from "react";
import BlogCard from "../components/BlogCard";

const Home = () => {
  const [blogs] = useState([
    // definir , setBlogs depois
    {
      id: 0,
      author: "vini",
      date: "02/01/2024",
      liked: false,
      title: "teste",
      body: "oi",
    },
    {
      id: 1,
      author: "vini",
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
      <div className="flex-1 flex flex-col gap-4">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} />
        ))}
      </div>
    </section>
  );
};

export default Home;
