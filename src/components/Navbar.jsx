import { useState } from "react";

const Navbar = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      title: "Home",
      link: "/",
    },
    {
      id: 2,
      title: "New blog",
      link: "/",
    },
    {
      id: 3,
      title: "My account",
      link: "/",
    },
  ]);

  return (
    <nav>
      {/* links */}
      <div className="flex p-4 justify-center gap-4 text-xl border-b">
        {items.map((item) => (
          <a
            key={item.key}
            href={item.link}
            className="bg-zinc-100 px-5 py-2 rounded-xl"
          >
            {item.title}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
