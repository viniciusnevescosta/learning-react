const Navbar = () => {
  return (
    <nav>
      <h1>SelfBlog</h1>
      {/* links */}
      <div>
        <a href="/">Home</a>
        <a href="/create">New blog</a>
        <a href="/account">My account</a>
      </div>
    </nav>
  );
};

export default Navbar;
