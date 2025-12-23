// components/SearchBar/SearchBar.tsx
import { useDebounce } from "@/hooks/useDebounce";
import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";

export interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
  debounceDelay?: number;
  placeholder?: string;
  className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  onSearch,
  debounceDelay = 500,
  placeholder = "Search...",
  className = "",
}) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const debouncedSearchTerm = useDebounce(searchTerm, debounceDelay);

  // Handle input change
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  // Handle form submission
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  // Trigger search on debounced term change
  useEffect(() => {
    if (debouncedSearchTerm.trim()) {
      onSearch(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm, onSearch]);

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex items-center space-x-2 p-1.5 border border-gray-300 rounded-full  ${className}`}
    >
      <input
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        onChange={handleChange}
        className="grow p-2  rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
      />
      <button
        type="submit"
        className="bg-primary   text-white font-bold   transition-colors p-4 rounded-full"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
