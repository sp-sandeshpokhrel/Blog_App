const FormBlog = ({
  title,
  setTitle,
  tags,
  setTags,
  image,
  setImage,
  content,
  setContent,
  handleSubmit,
  type,
}) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 md:grid-cols-2 gap-4"
    >
      <div className="mb-4 col-span-2 md:col-span-1">
        <label htmlFor="title" className="block mb-1 font-medium">
          Title
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4 col-span-2 md:col-span-1">
        <label htmlFor="tags" className="block mb-1 font-medium">
          Tags (comma-separated)
        </label>
        <input
          type="text"
          id="tags"
          value={tags}
          placeholder="e.g. javascript, react, node"
          onChange={(e) => setTags(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4 col-span-2 md:col-span-1">
        <label htmlFor="image" className="block mb-1 font-medium">
          Image URL
        </label>
        <input
          type="text"
          id="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded"
        />
      </div>
      <div className="col-span-2">
        <label htmlFor="content" className="block mb-1 font-medium">
          Content
        </label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded"
          rows={6}
        ></textarea>
      </div>
      <button
        type="submit"
        className="col-span-2 px-4 py-2 bg-blue-500 text-white rounded"
      >
        {type}
      </button>
    </form>
  );
};

export default FormBlog;
