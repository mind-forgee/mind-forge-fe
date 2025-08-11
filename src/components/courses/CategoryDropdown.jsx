import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const CategoryDropdown = ({ categories, selectedCategory, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-56 px-4 py-2 text-dark font-medium"
      >
        {selectedCategory === "all"
          ? "Category"
          : selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}
        <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                onChange(cat);
                setIsOpen(false);
              }}
              className={`block w-full text-left px-4 py-2 hover:bg-gray-100 ${
                selectedCategory === cat ? "bg-gray-100 font-semibold" : ""
              }`}
            >
              {cat === "all" ? "All Categories" : cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryDropdown;
