export default function Blog({ title, content, tag, image, user }) {
  return (
    <div className="blog_card bg-gray-100 p-6 rounded-lg shadow-lg">
      <div className="flex justify-between items-start gap-5">
        <div className="flex-1 flex justify-start items-center gap-3 cursor-pointer">
          <img
            src="/assets/images/logo.svg"
            alt="user_image"
            width={40}
            height={40}
            className="rounded-full object-contain"
          />
          <div className="flex flex-col">
            <h3 className="font-satoshi font-semibold text-gray-900">
              {/* {user.email} */}
            </h3>
          </div>
        </div>
        <div className="copy_btn" onClick={() => {}}>
          <img
            src="/assets/icons/copy.svg"
            width={12}
            height={12}
            alt="copy_btn"
          />
        </div>
      </div>
      <h2 className="font-satoshi font-semibold text-gray-900 text-2xl my-4">
        {title}
      </h2>
      {image && <img src={image} width={340} height={340} alt="blog_image" />}
      <p className="my-4 font-satoshi text-base text-gray-700 h-40 overflow-hidden">
        {content}
      </p>
      <p
        className="font-inter text-base blue_gradient cursor-pointer"
        onClick={() => {}}
      >
        {tag}
      </p>
    </div>
  );
}
