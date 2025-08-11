import React from "react";
import BlogCard from "../blog/BlogCard";
import { ArrowRight } from "lucide-react";
import { blogData } from "../../data/blogData"; // Assuming you have a blogData.js file with your blog data



const Blog = () => {
  return (
    <section id="blog" className="py-16 px-5 lg:px-0">
      <div className="max-w-7xl mx-auto">
   
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
            Blog and Event
          </h2>
          <button className="flex items-center gap-2 text-gray-800 font-medium hover:underline">
            View All
            <ArrowRight size={18} />
          </button>
        </div>

      
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogData.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
