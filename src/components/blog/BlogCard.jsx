import React from "react";
import { ArrowRight } from "lucide-react";

const BlogCard = ({ blog }) => {
  return (
    <div key={blog.id} className="flex flex-col gap-y-6">
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-56 object-cover  mb-4"
      />
      <p className="text-gray-500 text-sm mb-2">{blog.date}</p>
      <h3 className="font-semibold text-gray-900 text-lg leading-snug mb-2">
        {blog.title}
      </h3>
      <p className="text-gray-500 text-sm mb-4">{blog.excerpt}</p>
      <button className="flex items-center gap-2 text-gray-800 font-medium hover:underline">
        View All
        <ArrowRight size={16} />
      </button>
    </div>
  );
};

export default BlogCard;
