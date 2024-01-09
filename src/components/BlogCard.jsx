/* eslint-disable react/prop-types */
const BlogCard = ({ blogs }) => {
  return (
    <div className="flex-1 flex flex-col gap-4">
      {blogs.map((blog) => (
        <div
          key={blog.id}
          className="flex flex-col gap-4 p-5 rounded-lg bg-zinc-50 shadow-sm"
        >
          <div className="flex justify-between">
            <p>
              {blog.date} - {blog.author}
            </p>
            <div className="flex gap-2">
              {blog.liked ? (
                <i className="ri-heart-fill text-xl hover:cursor-pointer" />
              ) : (
                <i className="ri-heart-line text-xl hover:cursor-pointer" />
              )}
              <i className="ri-delete-bin-line text-xl hover:cursor-pointer"></i>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-3xl">{blog.title}</p>
            <p className="text-xl">{blog.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogCard;
