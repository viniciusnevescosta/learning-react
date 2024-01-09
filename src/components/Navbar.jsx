import { useState } from "react";

const Navbar = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      icon: 'ri-home-4-line',
      title: "Home",
      link: "/",
    },
    {
      id: 2,
      icon: 'ri-news-line',
      title: "New blog",
      link: "/",
    },
    {
      id: 3,
      icon: 'ri-account-box-line',
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
            className="flex gap-2 bg-zinc-50 px-5 py-2 rounded-lg"
          >
            <i className={item.icon} />
            {item.title}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
