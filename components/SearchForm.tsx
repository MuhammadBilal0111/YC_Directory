import Form from "next/form";
import React from "react";
import SearchFormReset from "./SearchFormReset";
import { Search } from "lucide-react";

function SearchForm({ query }: { query?: string }) {
  return (
    <Form action={"/"} className="search-form" scroll={false}>
      <input
        name="query"
        type="text"
        defaultValue={query}
        placeholder="Search Startup"
        className="search-input"
      />
      <div className="flex gap-2">
        {query && <SearchFormReset />}
        <button type="submit" className="search-btn text-white">
          <Search className="size-5" />
        </button>
      </div>
    </Form>
  );
}

export default SearchForm;
