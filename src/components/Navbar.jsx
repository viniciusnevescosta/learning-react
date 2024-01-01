const Navbar = () => {
  return (
    <nav>
      {/* links */}
      <div className="flex p-4 justify-center gap-4 text-xl font-bold">
        <a href="/">Home</a>
        <a href="/create">New blog</a>
        <a href="/account">My account</a>
      </div>
    </nav>
  );
};

export default Navbar;
