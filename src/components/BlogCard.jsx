const BlogCard = () => {
  return (
    <div className="flex flex-col gap-4 p-5 rounded-lg bg-zinc-50 shadow-sm">
      <div className="flex justify-between">
        <p>02/01/2024</p>
        <i className="ri-heart-line text-xl"></i>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-3xl">Título</p>
        <p className="text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique
          senectus et netus et. Risus at ultrices mi tempus imperdiet nulla
          malesuada pellentesque elit.
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
